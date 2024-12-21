"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useJournal } from "@/providers/JournalContext"; // Assuming the context is available

export function MoodAnalysis({ timeRange }: { timeRange: string }) {
  const { entries } = useJournal(); // Retrieve journal entries from the context

  // Prepare data for the pie chart
  const moodData = [
    { name: "Happy", value: 0 },
    { name: "Neutral", value: 0 },
    { name: "Sad", value: 0 },
    { name: "Angry", value: 0 },
  ];

  // Count moods from the entries
  entries.forEach((entry) => {
    if (entry.mood) {
      switch (entry.mood.toLowerCase()) {
        case "happy":
          moodData[0].value++;
          break;
        case "neutral":
          moodData[1].value++;
          break;
        case "sad":
          moodData[2].value++;
          break;
        case "angry":
          moodData[3].value++;
          break;
      }
    }
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={moodData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {moodData.map((entry, index) => (
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
        Your mood distribution over the last {timeRange}.
        {moodData.reduce((acc, curr) => acc + curr.value, 0) > 0
          ? " Happiness has been your predominant emotion."
          : " No moods recorded."}
      </p>
    </div>
  );
}
