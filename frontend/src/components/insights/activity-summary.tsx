"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { date: "2023-05-01", count: 3 },
  { date: "2023-05-02", count: 2 },
  { date: "2023-05-03", count: 1 },
  { date: "2023-05-04", count: 4 },
  { date: "2023-05-05", count: 3 },
  { date: "2023-05-06", count: 2 },
  { date: "2023-05-07", count: 5 },
]

export function ActivitySummary({ timeRange }: { timeRange: string }) {
  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-muted-foreground">
        Your journaling frequency over the last {timeRange}. You've been most
        consistent on weekends.
      </p>
    </div>
  )
}
