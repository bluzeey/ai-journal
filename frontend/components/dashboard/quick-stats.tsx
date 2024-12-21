"use client";

import { BookOpen, Calendar, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useJournal } from "@/providers/JournalContext"; // Adjust to your context path

export function QuickStats() {
  const { totalEntries, currentStreak, recentMood, isLoggedIn } = useJournal();

  if (!isLoggedIn) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <span>Please log in to see your statistics.</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center">
          <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">
            Total Entries: {totalEntries}
          </span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">
            Current Streak: {currentStreak} days
          </span>
        </div>
        <div className="flex items-center">
          <Smile className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Recent Mood: {recentMood}</span>
        </div>
      </CardContent>
    </Card>
  );
}
