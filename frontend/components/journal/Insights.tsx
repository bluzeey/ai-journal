"use client";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";
import { useCompletion } from "ai/react";
import { Loader2 } from "lucide-react";

interface AIInsightsProps {
  entryId: string;
  userId: string;
}

export default function AIInsights({ entryId, userId }: AIInsightsProps) {
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/insights",
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    if (entryId && userId) {
      complete({
        entryId,
        userId,
      });
    }
  }, [entryId, userId, complete]);

  return (
    <Card className="mt-4 p-6">
      <h2 className="text-xl font-bold mb-4">AI Insights</h2>
      {isLoading && (
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p>Generating insights...</p>¯
        </div>
      )}

      {completion && (
        <ReactMarkdown className="prose dark:prose-invert max-w-none">
          {completion}
        </ReactMarkdown>
      )}
    </Card>
  );
}
