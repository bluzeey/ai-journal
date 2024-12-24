"use client";

import { useEffect, useState } from "react"; // Import useEffect for fetching entries
import { ChevronLeft, ChevronRight, Search, Plus } from "lucide-react"; // Added Plus icon
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createClient } from "@/utils/supabase/client"; // Ensure this imports your Supabase client
import { JournalEntry } from "@/lib/definitions";

const generateRandomColor = () => {
  const tagColors = [
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-orange-400",
  ];
  return tagColors[Math.floor(Math.random() * tagColors.length)];
};

export default function JournalSidebar({
  onSelectEntry,
  onAddEntry, // Function to notify parent to add a new entry
}: {
  onSelectEntry: (entry: JournalEntry) => void;
  onAddEntry: (entry: JournalEntry) => void; // Pass in this new prop
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [tagColorsMap, setTagColorsMap] = useState<{ [key: string]: string }>(
    {}
  ); // To hold each tag's color

  // Fetch existing journal entries
  useEffect(() => {
    const fetchEntries = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("journal_entries")
        .select("id, title, date, content, tags, word_count")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching entries:", error);
      } else {
        const formattedEntries = data.map((entry: any) => ({
          id: entry.id,
          title: entry.title,
          date: new Date(entry.date).toISOString().split("T")[0],
          content: entry.content,
          snippet: entry.content.substring(0, 100) + "...",
          tags: entry.tags || [],
          wordCount: entry.word_count,
        }));

        setEntries(formattedEntries);

        // Generate and set tag colors for unique tags
        const colorsMap: { [key: string]: string } = {};
        formattedEntries.forEach((entry) => {
          entry.tags.forEach((tag) => {
            if (!colorsMap[tag]) {
              colorsMap[tag] = generateRandomColor();
            }
          });
        });
        setTagColorsMap(colorsMap);
      }
    };

    fetchEntries();
  }, []); // Only run once on mount

  // Filter entries based on the search term
  const filteredEntries = entries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Function to handle adding a new entry with placeholder text
  const handleAddEntry = () => {
    const newEntry: JournalEntry = {
      id: Date.now().toString(), // Unique ID based on timestamp
      title: "Empty Title", // Placeholder title
      date: new Date().toISOString(),
      content: "Untitled Content", // Placeholder content
      snippet: "Untitled Content", // Snippet for display
      tags: [], // No tags by default
      wordCount: 0, // Zero word count
    };

    setEntries((prevEntries) => [newEntry, ...prevEntries]); // Prepend to the entries
    onAddEntry(newEntry); // Notify parent to add the entry
  };

  return (
    <div
      className={`border-r bg-white dark:bg-gray-800 transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} border-gray-200 dark:border-gray-700`}
    >
      <div className="flex items-center justify-between border-b p-4 border-gray-200 dark:border-gray-700">
        {!isCollapsed && (
          <Input
            type="text"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2 w-full text-gray-900 bg-white dark:bg-gray-700 dark:text-white"
          />
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          )}
        </Button>
      </div>
      <div className="p-4">
        <Button
          variant="primary"
          className="mb-4 flex items-center"
          onClick={handleAddEntry} // Call handleAddEntry on click
        >
          <Plus className="mr-2" /> Add New Entry
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="cursor-pointer border-b p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => onSelectEntry(entry)}
          >
            {!isCollapsed && (
              <>
                <h3 className="truncate font-semibold text-gray-800 dark:text-gray-200">
                  {entry.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {entry.date}
                </p>
                <p className="truncate text-sm text-gray-600 dark:text-gray-300">
                  {entry.snippet}
                </p>
                <div className="mt-2 flex flex-wrap">
                  {entry.tags?.map((tag) => (
                    <span
                      key={tag}
                      className={`mb-1 mr-1 rounded-full text-white px-2 py-1 text-xs ${tagColorsMap[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
            {isCollapsed && (
              <div className="flex justify-center">
                <Search className="h-4 w-4 text-gray-400 dark:text-gray-200" />
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
