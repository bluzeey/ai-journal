"use client"

import { useState } from "react"
import { useCompletion } from "ai/react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DailyReminderToggle } from "@/components/dashboard/daily-reminder-toggle"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { FeedbackOption } from "@/components/dashboard/feedback-option"
import { GamificationSection } from "@/components/dashboard/gamification-section"
import { InsightsPreview } from "@/components/dashboard/insights-preview"
import { JournalingAccess } from "@/components/dashboard/journaling-access"
import { QuickStats } from "@/components/dashboard/quick-stats"
import { UpcomingPrompts } from "@/components/dashboard/upcoming-prompts"
import { WelcomeSection } from "@/components/dashboard/welcome-section"
import { PrimarySidebar } from "@/components/shared/sidebar" // Adjust the import path as necessary
import TextEditor from "@/components/texteditor/Index"

export default function Dashboard() {
  const [journalEntry, setJournalEntry] = useState("")
  const [content, setContent] = useState(null)
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/analyze",
  })

  const handleAnalyze = async () => {
    if (journalEntry.trim()) {
      await complete(journalEntry)
    }
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <PrimarySidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
        <DashboardLayout>
          <div className="space-y-6">
            <WelcomeSection />
            <div className="grid gap-6 md:grid-cols-2">
              <QuickStats />
              <JournalingAccess />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <GamificationSection />
              <InsightsPreview />
            </div>
            <UpcomingPrompts />
            <div className="flex items-center justify-between">
              <DailyReminderToggle />
              <FeedbackOption />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  )
}
