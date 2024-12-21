"use client";

import Link from "next/link";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useJournal } from "@/providers/JournalContext"; // Use JournalContext to get journal entries

// Mapping moods to scores
const moodScores: { [key: string]: number } = {
  happy: 10,
  excited: 8,
  neutral: 6,
  sad: 4,
  angry: 2,
};

export function InsightsPreview() {
  const { entries } = useJournal(); // Fetch journal entries from context

  // Process mood data based on journal entries
  const moodData = entries
    .map((entry) => {
      const date = new Date(entry.date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
      });

      // Only process if mood exists and matches the scoring
      if (entry.mood && entry.mood in moodScores) {
        return {
          date,
          mood: moodScores[entry.mood], // Keep mood values as is, no accumulation
        };
      }
      return null; // Return null for entries without valid moods
    })
    .filter(Boolean) // Filter out nulls left by invalid entries
    .sort((a, b) => new Date(a!.date).getTime() - new Date(b!.date).getTime()); // Sort by date in ascending order

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mood Trends</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={moodData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <Button asChild>
          <Link href="/insights">See More Insights</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
