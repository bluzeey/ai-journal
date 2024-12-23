"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { createClient } from "@/utils/supabase/client";
import { JournalEntry } from "@/lib/definitions";
import { usePathname } from "next/navigation";

interface JournalContextType {
  totalEntries: number;
  currentStreak: number;
  recentMood: string;
  entries: JournalEntry[];
  isLoggedIn: boolean; // Add logged-in state
  fetchEntries: (userId: string) => Promise<void>; // Function to fetch entries
}

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export const JournalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [recentMood, setRecentMood] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  // Function to fetch user data and entries
  const fetchUserAndEntries = useCallback(async () => {
    if (pathname != "/" && pathname != "/login") {
      const supabase = createClient();

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      setIsLoggedIn(!!user);
      if (user != null) {
        await fetchEntries(user.id); // Fetch entries if user is logged in
      } else {
        setEntries([]); // Clear entries if user is not logged in
        setTotalEntries(0);
        setRecentMood("");
        setCurrentStreak(0);
      } // Update logged-in state
    }
  }, [pathname]);

  // Fetch journal entries from Supabase
  const fetchEntries = async (userId: string) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("journal_entries")
      .select("id, title, date, content, tags, word_count, mood")
      .eq("user_id", userId)
      .order("date", { ascending: false });

    if (error) {
      console.error("Error fetching journal entries:", error);
      return;
    }

    const formattedEntries = (data || []).map((entry: any) => ({
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

    // Set recent mood based on the latest entry
    const moods = formattedEntries.map((entry) => entry.mood);
    setRecentMood(moods[0] || "");

    // Example logic for determining current streak
    const today = new Date();
    const streak = formattedEntries.filter(
      (entry) => new Date(entry.date).getDate() === today.getDate()
    ).length;

    setCurrentStreak(streak);
  };

  // Use effect to fetch user data on mount and when user state changes
  useEffect(() => {
    fetchUserAndEntries();
  }, [fetchUserAndEntries]); // Run this on component mount

  // Handle user login to re-fetch entries
  useEffect(() => {
    const supabase = createClient(); // Assuming createClient returns supabase client

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      fetchUserAndEntries(); // Re-fetch user when authentication state changes
    });

    return () => {
      subscription?.unsubscribe(); // Clean up subscription on unmount
    };
  }, [fetchUserAndEntries]);

  return (
    <JournalContext.Provider
      value={{
        totalEntries,
        currentStreak,
        recentMood,
        entries,
        isLoggedIn,
        fetchEntries,
      }}
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
