"use client";

import { useEffect, useState } from "react";
import {
  Bold,
  BrainCircuit,
  Image,
  Italic,
  List,
  Save,
  Smile,
  Tag,
  Trash2,
  Underline,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import JournalSidebar from "@/components/journal/sidebar"; // Import default
import { PrimarySidebar } from "@/components/shared/sidebar";
import { createClient } from "@/utils/supabase/client";

export default function JournalEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState<Number | null>(null);
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  // State to hold the selected entry
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const supabase = createClient();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      if (user) {
        setUserId(user.id);
      } else {
        console.error("User not authenticated");
      }
    };

    fetchUserId();
  }, []);

  // Update fields when selected entry changes
  useEffect(() => {
    if (selectedEntry) {
      setTitle(selectedEntry.title);
      setContent(selectedEntry.content);
      setTags(selectedEntry.tags || []);
      setWordCount(selectedEntry.wordCount);
    } else {
      // Reset fields if no entry is selected
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
    const supabase = createClient();

    // Prepare the entry to be saved or updated
    const newEntry = {
      user_id: userId,
      title,
      content,
      mood,
      tags: tags.length ? tags : null,
      date: new Date().toISOString(),
      word_count: content?.split(/\s+/).filter(Boolean).length,
    };

    // Check if selectedEntry contains an ID, then update; otherwise, insert
    const { data, error } = selectedEntry
      ? await supabase
          .from("journal_entries")
          .update(newEntry)
          .eq("id", selectedEntry.id)
      : await supabase.from("journal_entries").insert([newEntry]);

    setLoading(false);

    if (error) {
      console.error("Error saving entry:", error);
      alert("Failed to save the journal entry.");
    } else {
      console.log("Entry saved successfully", data);
      // Reset the fields
      setTitle("");
      setContent("");
      setTags([]);
      setMood("");
      setSelectedEntry(null); // Reset selected entry
    }
  };

  const handleDelete = async () => {
    if (
      selectedEntry &&
      window.confirm("Are you sure you want to delete this entry?")
    ) {
      const supabase = createClient();
      const { error } = await supabase
        .from("journal_entries")
        .delete()
        .eq("id", selectedEntry.id);

      if (error) {
        console.error("Error deleting entry:", error);
        alert("Failed to delete the journal entry.");
      } else {
        console.log("Entry deleted successfully");
        setSelectedEntry(null); // Clear selection
        setTitle("");
        setContent("");
        setTags([]);
      }
    }
  };

  const handleAIInsights = () => {
    console.log("Generating AI insights");
    // Implement AI insights functionality
  };

  return (
    <div className="flex h-screen w-full">
      <PrimarySidebar />
      <div className="flex h-screen flex-1 bg-gray-100">
        <JournalSidebar onSelectEntry={setSelectedEntry} />{" "}
        {/* Pass down the callback */}
        <div className="flex-1 overflow-auto p-6">
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <Input
                type="text"
                placeholder="Entry Title (optional)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-2/3 text-2xl font-bold"
              />
              <Input
                type="datetime-local"
                defaultValue={new Date().toISOString().slice(0, 16)}
                className="w-1/3"
              />
            </div>
            <div className="mb-4 flex space-x-2">
              <Button variant="outline" size="icon">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Underline className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Image className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              placeholder="Write your journal entry here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-4 min-h-[300px]"
            />
            <div className="mb-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setTags([...tags, ""])}
                >
                  {" "}
                  {/* Placeholder for Add Tag */}
                  <Tag className="mr-2 h-4 w-4" />
                  Add Tag
                </Button>
                <Button variant="outline">
                  <Smile className="mr-2 h-4 w-4" />
                  Set Mood
                </Button>
              </div>
              <span className="text-sm text-gray-500">
                Word Count:{" "}
                {wordCount ?? content?.split(/\s+/).filter(Boolean).length}
              </span>
            </div>
            <div className="flex justify-between">
              <div className="space-x-2">
                <Button onClick={handleSave} disabled={loading}>
                  {loading ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" /> Save
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={handleDelete}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
              <Button variant="secondary" onClick={handleAIInsights}>
                <BrainCircuit className="mr-2 h-4 w-4" />
                AI Insights
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
