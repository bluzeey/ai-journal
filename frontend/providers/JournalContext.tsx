"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { JournalEntry } from "@/lib/definitions"; // Adjust import path as necessary

interface JournalContextType {
  totalEntries: number;
  currentStreak: number;
  recentMood: string;
  entries: JournalEntry[];
  isLoggedIn: boolean; // Add logged-in state
}

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export const JournalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [recentMood, setRecentMood] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    const fetchUser = async () => {
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
        setIsLoggedIn(true);
        fetchEntries(); // Fetch entries if user is logged in
      } else {
        setIsLoggedIn(false);
      }
    };

    fetchUser();
  }, []);

  const fetchEntries = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("journal_entries")
      .select("id, title, date, content, tags, word_count") // Adjust the fields based on your schema
      .order("date", { ascending: false });

    if (error) {
      console.error("Error fetching journal entries:", error);
    } else {
      const formattedEntries = data.map((entry: any) => ({
        id: entry.id,
        title: entry.title,
        date: new Date(entry.date).toISOString().split("T")[0],
        mood: entry.mood || "",
        content: entry.content || "",
        tags: entry.tags || [],
        wordCount: entry.word_count || 0,
      }));

      setEntries(formattedEntries);
      setTotalEntries(formattedEntries.length);

      // Set recent mood based on the latest entry.
      const moods = formattedEntries.map((entry) => entry.mood);
      setRecentMood(moods[0] || "");

      // Example logic for determining streak.
      const today = new Date();
      const streak = formattedEntries.filter(
        (entry) => new Date(entry.date).getDate() === today.getDate()
      ).length;

      setCurrentStreak(streak);
    }
  };

  return (
    <JournalContext.Provider
      value={{ totalEntries, currentStreak, recentMood, entries, isLoggedIn }}
    >
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => {
  const context = useContext(JournalContext);
  if (!context) {
    throw new Error("useJournal must be used within a JournalProvider");
  }
  return context;
};
