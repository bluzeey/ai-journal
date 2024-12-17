"use client"

import { useState } from "react"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ActivitySummary } from "./activity-summary"
import { AIInsights } from "./ai-insights"
import { ComparativeInsights } from "./comparaitive-insights"
import { IntroSection } from "./intro-section"
import { MoodAnalysis } from "./mood-analysis"
import { TopicTrends } from "./topic-trends"

export function InsightsPage() {
  const [timeRange, setTimeRange] = useState("month")

  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Insights</h1>
        <div className="flex items-center space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Insights
          </Button>
        </div>
      </div>

      <IntroSection />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Journaling Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivitySummary timeRange={timeRange} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mood Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <MoodAnalysis timeRange={timeRange} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Topic Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <TopicTrends timeRange={timeRange} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <AIInsights timeRange={timeRange} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comparative Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ComparativeInsights timeRange={timeRange} />
        </CardContent>
      </Card>
    </div>
  )
}
