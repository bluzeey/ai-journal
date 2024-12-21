"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProfile } from "@/providers/ProfileContext"; // Make sure you have a context to fetch points

// Define levels based on experience points for 10 levels
const levels = [
  { title: "Novice Journaler", xp: 0 },
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

export function UserLevelProgress() {
  const { points } = useProfile(); // Access the user's current points from ProfileContext

  // Determine the current level and progress
  const currentLevelIndex = levels.findIndex((level) => points < level.xp); // Find current level based on points
  const currentLevel =
    currentLevelIndex === -1 ? levels.length - 1 : currentLevelIndex; // Get the current level index
  const levelTitle = levels[currentLevel].title;
  const nextLevelPoints =
    currentLevel < levels.length - 1 ? levels[currentLevel + 1].xp : null; // Get points required for the next level

  // Calculate points within the current level
  const pointsInCurrentLevel =
    currentLevel > 0 ? points - levels[currentLevel - 1].xp : points; // Points relative to the current level

  // Calculate progress toward the next level
  const progress = (points / levels[currentLevel].xp) * 100; // If already at max level, fill progress bar to 100%

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Level {currentLevel + 1}: {levelTitle}{" "}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="w-full" />
        {nextLevelPoints && (
          <p className="mt-2 text-sm text-muted-foreground">
            {points}/{levels[currentLevel].xp} points to next level
          </p>
        )}
      </CardContent>
    </Card>
  );
}
