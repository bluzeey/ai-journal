import { Star } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PointsSystem() {
  const totalPoints = 1500
  const recentActivities = [
    {
      activity: "Completed daily journal",
      points: 10,
      timestamp: "2023-05-15 09:30 AM",
    },
    {
      activity: "Achieved weekly streak",
      points: 50,
      timestamp: "2023-05-14 11:45 PM",
    },
    {
      activity: "Added mood entry",
      points: 5,
      timestamp: "2023-05-14 08:15 PM",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Star className="mr-2 h-6 w-6 text-yellow-400" />
          Points: {totalPoints}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="mb-2 font-semibold">Recent Activities</h3>
        <ul className="space-y-2">
          {recentActivities.map((activity, index) => (
            <li key={index} className="text-sm">
              <span className="font-medium">{activity.activity}</span> - +
              {activity.points} points
              <br />
              <span className="text-xs text-muted-foreground">
                {activity.timestamp}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
