"use client";

import { useEffect, useState } from "react"; // Import useEffect to fetch entries
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createClient } from "@/utils/supabase/client"; // Ensure this imports your Supabase client

type JournalEntry = {
  id: string;
  title: string;
  date: string;
  snippet: string;
  tags: string[];
};

export default function JournalSidebar({ onSelectEntry }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>([]);

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
        // Transform fetched data
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
      }
    };

    fetchEntries();
  }, []);

  const filteredEntries = entries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div
      className={`border-r bg-white transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <div className="flex items-center justify-between border-b p-4">
        {!isCollapsed && (
          <Input
            type="text"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2 w-full"
          />
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="cursor-pointer border-b p-4 hover:bg-gray-100"
            onClick={() => onSelectEntry(entry)} // Call the callback with the entry
          >
            {!isCollapsed && (
              <>
                <h3 className="truncate font-semibold">{entry.title}</h3>
                <p className="text-sm text-gray-500">{entry.date}</p>
                <p className="truncate text-sm">{entry.snippet}</p>
                <div className="mt-2 flex flex-wrap">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mb-1 mr-1 rounded-full bg-gray-200 px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
            {isCollapsed && (
              <div className="flex justify-center">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
