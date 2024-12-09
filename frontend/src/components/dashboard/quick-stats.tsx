import { BookOpen, Calendar, Smile } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QuickStats() {
  // These values would be fetched from the user's data
  const totalEntries = 42
  const currentStreak = 7
  const recentMood = "Happy"

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
  )
}
