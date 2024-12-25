"use client";

import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";

interface InsightsProps {
  insights: string;
}

export default function AIInsights({ insights }: InsightsProps) {
  return (
    <Card className="mt-4 p-6">
      <h2 className="text-xl font-bold">AI Insights</h2>
      <ReactMarkdown className="mt-2 text-md">{insights}</ReactMarkdown>
    </Card>
  );
}
