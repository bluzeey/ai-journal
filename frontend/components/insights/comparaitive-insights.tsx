"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { name: "Journaling Frequency", current: 5, past: 3 },
  { name: "Average Word Count", current: 250, past: 200 },
  { name: "Positive Sentiment", current: 70, past: 60 },
  { name: "Topics Covered", current: 8, past: 6 },
]

export function ComparativeInsights({ timeRange }: { timeRange: string }) {
  return (
    <div className="space-y-4">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#8884d8" name="Current Period" />
            <Bar dataKey="past" fill="#82ca9d" name="Previous Period" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-muted-foreground">
        Comparison between your current journaling habits and the previous{" "}
        {timeRange}. You've shown improvement in several areas!
      </p>
    </div>
  )
}
