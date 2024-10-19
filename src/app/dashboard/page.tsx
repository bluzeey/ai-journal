"use client"

import { useState } from "react"
import { useCompletion } from "ai/react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import RichTextEditor from "@/components/textEditor"

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
      <RichTextEditor
        initialContent="<p>Start writing your thoughts...</p>"
        onChange={setJournalEntry}
      />
      <Button onClick={handleAnalyze}>Analyze Entry</Button>
    </div>
  )
}
