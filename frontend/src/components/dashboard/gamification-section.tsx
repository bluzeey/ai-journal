import { Trophy } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function GamificationSection() {
  // These values would be fetched from the user's gamification data
  const level = 5
  const title = "Reflective Explorer"
  const points = 2500
  const nextLevelPoints = 3000
  const nextAchievement = "Consistent Journaler"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">
            Level {level}: {title}
          </h3>
          <Progress value={(points / nextLevelPoints) * 100} className="mt-2" />
          <p className="mt-1 text-sm text-muted-foreground">
            {points} / {nextLevelPoints} points to next level
          </p>
        </div>
        <div className="flex items-center">
          <Trophy className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Next Achievement: {nextAchievement}</span>
        </div>
      </CardContent>
    </Card>
  )
}
