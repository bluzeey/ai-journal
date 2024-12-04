"use client"

import { useState } from "react"
import { useCompletion } from "ai/react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import TextEditor from "@/components/texteditor/Index"

export default function AIJournal() {
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
    <div className="mx-auto max-w-4xl p-4">
      <h2>AI Journal</h2>
      <TextEditor />
      <Button onClick={handleAnalyze}>Analyze Entry</Button>
    </div>
  )
}
