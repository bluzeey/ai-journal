"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ChevronLeft, ChevronRight, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
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

interface JournalSidebarProps {
  entries: JournalEntry[];
  setEntries: React.Dispatch<React.SetStateAction<JournalEntry[]>>;
  onSelectEntry: (entry: JournalEntry) => void;
  onAddEntry: (entry: JournalEntry) => void;
}

export default function JournalSidebar({
  entries,
  setEntries,
  onSelectEntry,
  onAddEntry,
}: JournalSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagColorsMap, setTagColorsMap] = useState<{ [key: string]: string }>(
    {}
  );
  const [newEntryId, setNewEntryId] = useState<string | null>(null);

  useEffect(() => {
    setTagColorsMap((prevColorsMap) => {
      const newColorsMap = { ...prevColorsMap };
      entries.forEach((entry) => {
        entry.tags.forEach((tag: string) => {
          if (!newColorsMap[tag]) {
            newColorsMap[tag] = generateRandomColor();
          }
        });
      });
      return newColorsMap;
    });
  }, [entries]); //

  const filteredEntries = entries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleAddEntry = () => {
    const lastId = entries.length > 0 ? parseInt(entries[0].id) : 0;
    const newEntryIdProp = lastId + 1;

    const newEntry = {
      id: newEntryIdProp.toString(),
      title: "New Entry",
      date: new Date().toISOString(),
      content: "This is a new entry...",
      snippet: "This is a new entry...",
      tags: [],
      wordCount: 0,
    };

    // Update both local state and optionally reflect immediate state change
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
    setNewEntryId(newEntry.id);

    // Trigger the UI-level animation
    onAddEntry(newEntry); // Updated to allow UI-level animation without immediate re-fetch
  };

  return (
    <div
      className={`border-r bg-white dark:bg-gray-800 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } border-gray-200 dark:border-gray-700`}
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
          variant="ghost"
          className="mb-4 flex items-center"
          onClick={handleAddEntry}
        >
          <Plus className="mr-2" /> Add New Entry
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className={`cursor-pointer border-b p-4 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              entry.id === newEntryId ? "fade-in-up" : ""
            }`}
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
                  {entry.content}
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
