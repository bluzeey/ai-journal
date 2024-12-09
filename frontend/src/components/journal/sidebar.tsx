"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type JournalEntry = {
  id: string
  title: string
  date: string
  snippet: string
  tags: string[]
}

const dummyEntries: JournalEntry[] = [
  {
    id: "1",
    title: "My first entry",
    date: "2023-05-01",
    snippet: "Today was a great day...",
    tags: ["happy", "productive"],
  },
  {
    id: "2",
    title: "Reflections",
    date: "2023-05-02",
    snippet: "Ive been thinking about...",
    tags: ["thoughtful"],
  },
  // Add more dummy entries here
]

export function JournalSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEntries = dummyEntries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  )

  return (
    <div
      className={`border-r bg-white transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <div className="flex items-center justify-between border-b p-4">
        {!isCollapsed && (
          <Input
            type="text"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2 w-full"
          />
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="cursor-pointer border-b p-4 hover:bg-gray-100"
          >
            {!isCollapsed && (
              <>
                <h3 className="truncate font-semibold">{entry.title}</h3>
                <p className="text-sm text-gray-500">{entry.date}</p>
                <p className="truncate text-sm">{entry.snippet}</p>
                <div className="mt-2 flex flex-wrap">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mb-1 mr-1 rounded-full bg-gray-200 px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
            {isCollapsed && (
              <div className="flex justify-center">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
