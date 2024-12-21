"use client";

import { Card } from "@/components/ui/card";

interface InsightsProps {
  insights: string;
}

export default function AIInsights({ insights }: InsightsProps) {
  return (
    <Card className="mt-4 p-6">
      <h2 className="text-xl font-bold">AI Insights</h2>
      <p className="mt-2 text-xl">{insights}</p>
    </Card>
  );
}
