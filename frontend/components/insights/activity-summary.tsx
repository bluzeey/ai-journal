"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // Make sure the path is correct
import { JournalEntry } from "@/lib/definitions"; // Ensure this imports your Supabase client

export function ActivitySummary({ timeRange }: { timeRange: string }) {
  const [data, setData] = useState<{ date: string; count: number }[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("journal_entries")
        .select("id, title, date")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching entries:", error);
      } else {
        const formattedData = data.reduce((acc: any, entry: any) => {
          const date = new Date(entry.date).toISOString().split("T")[0];
          acc[date] = (acc[date] || 0) + 1; // Count entries per date
          return acc;
        }, {});

        // Transform the object into an array for the chart
        const chartData = Object.entries(formattedData).map(
          ([date, count]) => ({
            date,
            count,
          })
        );

        setData(chartData);
      }
    };

    fetchEntries();
  }, []); // Empty dependency array means this runs once on mount

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
  );
}
