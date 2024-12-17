"use client"

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const data = [
  { name: "Happy", value: 40 },
  { name: "Neutral", value: 30 },
  { name: "Sad", value: 20 },
  { name: "Angry", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function MoodAnalysis({ timeRange }: { timeRange: string }) {
  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-muted-foreground">
        Your mood distribution over the last {timeRange}. Happiness has been
        your predominant emotion.
      </p>
    </div>
  )
}
