"use client";

import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProfile } from "@/providers/ProfileContext"; // Access user points from ProfileContext
import { useJournal } from "@/providers/JournalContext"; // Access journal entries from context

// Define levels based on experience points for 10 levels
const levels = [
  { title: "Novice Journaler", xp: 100 },
  { title: "Beginner Journaler", xp: 200 },
  { title: "Intermediate Journaler", xp: 300 },
  { title: "Skilled Journaler", xp: 600 },
  { title: "Adept Journaler", xp: 1000 },
  { title: "Expert Journaler", xp: 1500 },
  { title: "Master Journaler", xp: 2100 },
  { title: "Grandmaster Journaler", xp: 2800 },
  { title: "Legendary Journaler", xp: 3400 },
  { title: "Mythical Journaler", xp: 4500 },
];

export function GamificationSection() {
  const { points } = useProfile(); // Access points from ProfileContext
  const { entries } = useJournal(); // Access journal entries from context
  const currentLevelIndex = levels.findIndex((level) => points < level.xp); // Determine current level based on points
  const currentLevel =
    currentLevelIndex === -1 ? levels.length - 1 : currentLevelIndex; // Calculate current level
  const levelTitle = levels[currentLevel].title;
  const nextLevelPoints =
    currentLevel < levels.length - 1 ? levels[currentLevel].xp : null; // Fixed points for the next level

  const progress = (points / levels[currentLevel].xp) * 100; // If already at max level, fill progress bar to 100%

  const nextAchievement =
    currentLevel < levels.length - 1
      ? `Reach ${nextLevelPoints} points to achieve: ${levels[currentLevel + 1].title}`
      : "You have reached the maximum level!";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-400" />
          Your Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">
            Level {currentLevel + 1}: {levelTitle}
          </h3>
          <Progress value={progress} className="mt-2" />
          {nextLevelPoints && (
            <p className="mt-1 text-sm text-muted-foreground">
              {points}/{levels[currentLevel].xp} points to next level
            </p>
          )}
        </div>
        <div className="flex items-center">
          <Trophy className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{nextAchievement}</span>
        </div>
      </CardContent>
    </Card>
  );
}
