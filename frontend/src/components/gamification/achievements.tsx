import { Calendar, Star, Trophy, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      label: "First Entry",
      description: "Completed your first journal entry",
      date: "2023-05-01",
    },
    {
      icon: Star,
      label: "Consistency Streak",
      description: "Journaled for 7 days in a row",
      date: "2023-05-10",
    },
    {
      icon: Calendar,
      label: "Monthly Milestone",
      description: "Completed 30 entries in a month",
      date: "2023-05-31",
    },
    {
      icon: Zap,
      label: "Insight Master",
      description: "Received 10 AI-generated insights",
      date: "2023-06-05",
    },
  ]

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
  )
}
