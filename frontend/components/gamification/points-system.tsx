"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useJournal } from "@/providers/JournalContext"; // Use the context for journal entries
import { useProfile } from "@/providers/ProfileContext"; // Use the context for user points

export function PointsSystem() {
  const { points } = useProfile(); // Access points from ProfileContext
  const { entries } = useJournal(); // Access journal entries from the context
  const [recentActivities, setRecentActivities] = useState<any[]>([]); // Store recent activities

  useEffect(() => {
    // Transform the last entries into recent activities
    const activities = entries
      .slice(-5) // Get the last 5 entries
      .map((entry, index) => ({
        activity: entry.title, // Use the title of the journal entry
        timestamp: new Date(entry.date).toDateString(), // Format the date for display without time
      }));

    setRecentActivities(activities); // Set the recent activities state
  }, [entries]); // Trigger when entries change

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Star className="mr-2 h-6 w-6 text-yellow-400" />
          Points: {points}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="mb-2 font-semibold">Recent Activities</h3>
        <ul className="space-y-2">
          {recentActivities.map((activity, index) => (
            <li key={index} className="text-sm">
              <span className="font-medium">{activity.activity}</span>
              <br />
              <span className="text-xs text-muted-foreground">
                {activity.timestamp}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
