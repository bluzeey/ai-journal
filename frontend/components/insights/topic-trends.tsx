"use client";

import { useEffect, useState } from "react";
import { TagCloud } from "react-tagcloud";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useJournal } from "@/providers/JournalContext"; // Use this context to get journal entries

export function TopicTrends({ timeRange }: { timeRange: string }) {
  const { entries } = useJournal(); // Access journal entries
  const [wordCloudData, setWordCloudData] = useState<
    { value: string; count: number }[]
  >([]); // State for word cloud data

  useEffect(() => {
    const generateWordCloudData = () => {
      const tagCount: Record<string, number> = {}; // To hold tag counts

      // Count occurrences of each tag
      entries.forEach((entry) => {
        entry.tags.forEach((tag) => {
          tagCount[tag] = (tagCount[tag] || 0) + 1; // Increment tag count
        });
      });

      // Transform to the format needed for the TagCloud
      const formattedData = Object.entries(tagCount).map(([value, count]) => ({
        value,
        count,
      }));

      // Set word cloud data state
      setWordCloudData(formattedData);
    };

    if (entries.length > 0) {
      generateWordCloudData(); // Generate data if there are entries
    }
  }, [entries]); // Re-run whenever entries change

  const topicData = [
    { topic: "Work-Life Balance", entries: 15, sentiment: "Mixed" },
    { topic: "Personal Growth", entries: 12, sentiment: "Positive" },
    { topic: "Relationships", entries: 10, sentiment: "Mostly Positive" },
    { topic: "Health and Fitness", entries: 8, sentiment: "Neutral" },
    { topic: "Future Plans", entries: 6, sentiment: "Optimistic" },
  ];

  return (
    <Tabs defaultValue="cloud">
      <TabsList>
        <TabsTrigger value="cloud">Word Cloud</TabsTrigger>
        <TabsTrigger value="list">Topic List</TabsTrigger>
      </TabsList>
      <TabsContent value="cloud" className="h-[300px]">
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={wordCloudData}
          className="flex h-full items-center justify-center"
        />
      </TabsContent>
      <TabsContent value="list">
        <ul className="space-y-2">
          {topicData.map((topic, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{topic.topic}</span>
              <span className="text-sm text-muted-foreground">
                {topic.entries} entries | {topic.sentiment}
              </span>
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
