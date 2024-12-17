"use client"

import { useState } from "react"
import { TagCloud } from "react-tagcloud"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const wordCloudData = [
  { value: "work", count: 38 },
  { value: "family", count: 30 },
  { value: "health", count: 28 },
  { value: "friends", count: 25 },
  { value: "travel", count: 22 },
  { value: "hobbies", count: 20 },
  { value: "goals", count: 18 },
  { value: "learning", count: 15 },
  { value: "challenges", count: 12 },
  { value: "achievements", count: 10 },
]

const topicData = [
  { topic: "Work-Life Balance", entries: 15, sentiment: "Mixed" },
  { topic: "Personal Growth", entries: 12, sentiment: "Positive" },
  { topic: "Relationships", entries: 10, sentiment: "Mostly Positive" },
  { topic: "Health and Fitness", entries: 8, sentiment: "Neutral" },
  { topic: "Future Plans", entries: 6, sentiment: "Optimistic" },
]

export function TopicTrends({ timeRange }: { timeRange: string }) {
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
  )
}
