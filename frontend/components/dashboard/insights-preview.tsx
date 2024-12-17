import Link from "next/link"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would be fetched from the user's mood data
const moodData = [
  { date: "06/05", mood: 3 },
  { date: "06/06", mood: 4 },
  { date: "06/07", mood: 3 },
  { date: "06/08", mood: 5 },
  { date: "06/09", mood: 4 },
  { date: "06/10", mood: 4 },
  { date: "06/11", mood: 5 },
]

export function InsightsPreview() {
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
  )
}
