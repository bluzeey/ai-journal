"use client";

import { useEffect, useState } from "react";
import { Calendar, Star, Trophy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useJournal } from "@/providers/JournalContext"; // Adjust based on your context path

export function Achievements() {
  const { entries } = useJournal(); // Access journal entries from the context
  const [achievements, setAchievements] = useState<any[]>([]); // Store achievements

  useEffect(() => {
    // Define achievements array
    const allAchievements = [
      {
        count: 1,
        icon: Trophy,
        label: "First Entry",
        description: "Completed your first journal entry",
      },
      {
        count: 5,
        icon: Star,
        label: "5 Entries",
        description: "Completed 5 journal entries",
      },
      {
        count: 10,
        icon: Calendar,
        label: "10 Entries",
        description: "Completed 10 journal entries",
      },
      {
        count: 50,
        icon: Zap,
        label: "50 Entries",
        description: "Completed 50 journal entries",
      },
    ];

    // Track achieved milestones and the dates for each achievement
    const earnedAchievements = allAchievements
      .map((achievement) => {
        const milestoneEntries = entries.filter((entry) => {
          return (
            entries.length >= achievement.count &&
            entries.indexOf(entry) + 1 === achievement.count
          ); // Check for the specific achievement count
        });

        if (milestoneEntries.length > 0) {
          // Get the date of the last entry that met the milestone count
          const achievementDate = new Date(
            milestoneEntries[milestoneEntries.length - 1].date
          )
            .toISOString()
            .split("T")[0];
          return { ...achievement, date: achievementDate }; // Add the date to the achievement
        }

        return null;
      })
      .filter(Boolean); // Filter out null achievements

    setAchievements(earnedAchievements);
  }, [entries]); // Re-run when entries change

  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-muted p-4 text-center"
            >
              <achievement.icon className="mb-2 h-8 w-8 text-primary" />
              <h3 className="font-semibold">{achievement.label}</h3>
              <p className="mb-2 text-sm text-muted-foreground">
                {achievement.description}
              </p>
              <Badge variant="secondary">{achievement.date}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
