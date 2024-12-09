"use client"

import { useState } from "react"
import {
  Bold,
  BrainCircuit,
  Image,
  Italic,
  List,
  Save,
  Smile,
  Tag,
  Trash2,
  Underline,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JournalSidebar } from "@/components/journal/sidebar"
import { PrimarySidebar } from "@/components/shared/sidebar"

export default function JournalEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [mood, setMood] = useState("")

  const handleSave = () => {
    // Implement save functionality
    console.log("Saving entry:", { title, content, tags, mood })
  }

  const handleDelete = () => {
    // Implement delete functionality with confirmation
    if (window.confirm("Are you sure you want to delete this entry?")) {
      console.log("Deleting entry")
    }
  }

  const handleAIInsights = () => {
    // Implement AI insights functionality
    console.log("Generating AI insights")
  }

  return (
    <div className="flex h-screen w-full">
      <PrimarySidebar />
      <div className="flex h-screen flex-1 bg-gray-100">
        <JournalSidebar />
        <div className="flex-1 overflow-auto p-6">
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <Input
                type="text"
                placeholder="Entry Title (optional)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-2/3 text-2xl font-bold"
              />
              <Input
                type="datetime-local"
                defaultValue={new Date().toISOString().slice(0, 16)}
                className="w-1/3"
              />
            </div>
            <div className="mb-4 flex space-x-2">
              <Button variant="outline" size="icon">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Underline className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Image className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              placeholder="Write your journal entry here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-4 min-h-[300px]"
            />
            <div className="mb-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setTags([...tags, ""])}
                >
                  <Tag className="mr-2 h-4 w-4" />
                  Add Tag
                </Button>
                <Button variant="outline">
                  <Smile className="mr-2 h-4 w-4" />
                  Set Mood
                </Button>
              </div>
              <span className="text-sm text-gray-500">
                Word Count: {content.split(/\s+/).filter(Boolean).length}
              </span>
            </div>
            <div className="flex justify-between">
              <div className="space-x-2">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" onClick={handleDelete}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
              <Button variant="secondary" onClick={handleAIInsights}>
                <BrainCircuit className="mr-2 h-4 w-4" />
                AI Insights
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
