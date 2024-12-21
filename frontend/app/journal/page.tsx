"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import JournalSidebar from "@/components/journal/Sidebar";
import { PrimarySidebar } from "@/components/shared/sidebar";
import { createClient } from "@/utils/supabase/client";
import axios from "axios";
import { JournalEntry } from "@/lib/definitions";
import TextFormattingButtons from "@/components/journal/TextEditingButtons"; // Separate component for text formatting
import TagsAndWordCount from "@/components/journal/TagsAndWordCount"; // Separate component for tags and word count
import AIInsights from "@/components/journal/Insights"; // Separate component for AI insights
import { useProfile } from "@/providers/ProfileContext"; // Assuming the profile context is available

export default function JournalEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [insights, setInsights] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { incrementPoints } = useProfile(); // Access incrementPoints from ProfileContext

  useEffect(() => {
    const fetchUserId = async () => {
      const supabase = createClient();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      }

      if (user) {
        setUserId(user.id);
      } else {
        console.error("User not authenticated");
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (selectedEntry) {
      setTitle(selectedEntry.title);
      setContent(selectedEntry.content);
      setTags(selectedEntry.tags || []);
    } else {
      setTitle("");
      setContent("");
      setTags([]);
    }
  }, [selectedEntry]);

  const handleSave = async () => {
    if (!userId) {
      alert("User not authenticated. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/journal/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          title,
          content,
          date: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Entry saved successfully", data);

      // Add 100 points to the user's profile
      await incrementPoints();

      resetFields();
    } catch (error) {
      console.error("Error saving entry:", error);
      alert("Failed to save the journal entry.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      selectedEntry &&
      window.confirm("Are you sure you want to delete this entry?")
    ) {
      const supabase = createClient();

      try {
        const { error } = await supabase
          .from("journal_entries")
          .delete()
          .eq("id", selectedEntry.id);

        if (error) throw error;

        console.log("Entry deleted successfully");
        resetFields(); // Clear fields on successful delete
      } catch (error: any) {
        console.error("Error deleting entry:", error);
        alert("Failed to delete the journal entry.");
      }
    }
  };

  const handleAIInsights = async () => {
    if (!userId || !selectedEntry) {
      alert("User not authenticated or no entry selected.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/insights", {
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          entryId: selectedEntry.id,
          userId: userId,
        },
      });

      if (response.statusText !== "OK") {
        throw new Error(`Error: ${response.statusText}`);
      }

      const { insight } = await response.data; // Adjust based on your API response structure
      setInsights(insight || ""); // Store insights in state
    } catch (error) {
      console.error("Error generating AI insights:", error);
      alert("Failed to generate insights. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const resetFields = () => {
    setTitle("");
    setContent("");
    setTags([]);
    setSelectedEntry(null);
    setInsights(null); // Reset insights if needed
  };

  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
      <PrimarySidebar />
      <div className="flex h-screen flex-1">
        <JournalSidebar onSelectEntry={setSelectedEntry} />
        <div className="flex-1 overflow-auto p-6">
          <Card className="p-6 bg-white dark:bg-gray-800">
            {" "}
            {/* Card background for light and dark modes */}
            <div className="mb-4 flex items-center justify-between">
              <Input
                type="text"
                placeholder="Entry Title (optional)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-2/3 text-2xl font-bold bg-white dark:bg-gray-700 dark:text-white"
              />
              <Input
                type="datetime-local"
                defaultValue={new Date().toISOString().slice(0, 16)}
                className="w-1/3 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            {/* Text Formatting Buttons */}
            <TextFormattingButtons />
            <Textarea
              placeholder="Write your journal entry here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-4 min-h-[300px] bg-white dark:bg-gray-700 dark:text-white"
            />
            {/* Tags and Word count */}
            <TagsAndWordCount tags={tags} setTags={setTags} content={content} />
            {/* Save and Insights Button */}
            <div className="flex justify-between">
              <div className="space-x-2">
                <Button onClick={handleSave} disabled={loading}>
                  {loading ? "Saving..." : "Save"}
                </Button>
                <Button variant="outline" onClick={handleDelete}>
                  <span>Delete</span>
                </Button>
              </div>
              <Button variant="secondary" onClick={handleAIInsights}>
                AI Insights
              </Button>
            </div>
          </Card>

          {insights && <AIInsights insights={insights} />}
        </div>
      </div>
    </div>
  );
}
