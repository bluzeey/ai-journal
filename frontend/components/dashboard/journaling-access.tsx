"use client";

import { useEffect, useState } from "react"; // Import useEffect and useState
import Link from "next/link";
import { PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client"; // Use your Supabase client
import { JournalEntry } from "@/lib/definitions";

type SimplifiedJournalEntry = Omit<
  JournalEntry,
  "snippet" | "content" | "tags" | "wordCount"
>;

export function JournalingAccess() {
  const [recentEntries, setRecentEntries] = useState<
    SimplifiedJournalEntry[] | null
  >(null); // State to hold fetched entries
  const supabase = createClient(); // Initialize Supabase client

  useEffect(() => {
    const fetchRecentEntries = async () => {
      const { data, error } = await supabase
        .from("journal_entries") // Fetch from your journal entries table
        .select("id, title, date") // Select the fields you need
        .order("date", { ascending: false }) // Order by date desc
        .limit(5); // Limit to recent 5 entries

      if (error) {
        console.error("Error fetching recent entries:", error);
      } else {
        setRecentEntries(data); // Set the fetched entries to state
      }
    };

    fetchRecentEntries(); // Call the fetch function
  }, [supabase]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Journaling</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button asChild className="w-full">
          <Link href="/journal/new">
            <PenSquare className="mr-2 h-4 w-4" />
            Start Your Journal
          </Link>
        </Button>
        <div>
          <h3 className="mb-2 font-semibold">Recent Entries</h3>
          <ul className="space-y-2">
            {recentEntries?.map((entry) => (
              <li key={entry.id}>
                <Link
                  href={`/journal/${entry.id}`}
                  className="text-sm hover:underline"
                >
                  {entry.title} -{" "}
                  {new Date(entry.date).toLocaleDateString("en-US")}{" "}
                  {/* Format the date */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
