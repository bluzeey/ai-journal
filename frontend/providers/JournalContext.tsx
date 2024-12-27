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
  setEntries: React.Dispatch<React.SetStateAction<JournalEntry[]>>;
  isLoggedIn: boolean;
  fetchEntries: (userId: string) => Promise<void>;
  userId: string | null;
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
  const [userId, setUserId] = useState<string | null>(null);
  const pathname = usePathname();

  const fetchEntries = useCallback(
    async (userId: string) => {
      if (!userId) return;

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

      const moods = formattedEntries.map((entry) => entry.mood);
      setRecentMood(moods[0] || "");

      const today = new Date();
      const streak = formattedEntries.filter(
        (entry) => new Date(entry.date).getDate() === today.getDate()
      ).length;

      setCurrentStreak(streak);
    },
    [userId]
  );

  const fetchUserAndEntries = useCallback(async () => {
    const supabase = createClient();

    const { data: userData, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error);
      return;
    }

    setIsLoggedIn(!!userData?.user);

    if (userData?.user) {
      setUserId(userData.user.id);
    } else {
      setEntries([]);
      setTotalEntries(0);
      setRecentMood("");
      setCurrentStreak(0);
    }
  }, [setEntries]);

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/login") {
      fetchUserAndEntries();
      if (userId) {
        fetchEntries(userId);
      }
    }
  }, [pathname, fetchUserAndEntries, fetchEntries, userId]);

  useEffect(() => {
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      fetchUserAndEntries();
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [fetchUserAndEntries]);

  return (
    <JournalContext.Provider
      value={{
        totalEntries,
        currentStreak,
        recentMood,
        entries,
        setEntries,
        isLoggedIn,
        fetchEntries,
        userId,
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
