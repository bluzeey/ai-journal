import Link from "next/link"
import { PenSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function JournalingAccess() {
  // This would be fetched from the user's recent entries
  const recentEntries = [
    { id: 1, title: "Reflections on a Productive Day", date: "2023-06-10" },
    { id: 2, title: "Overcoming Challenges", date: "2023-06-09" },
    { id: 3, title: "Gratitude Journal", date: "2023-06-08" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Journaling</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button asChild className="w-full">
          <Link href="/journal/new">
            <PenSquare className="mr-2 h-4 w-4" />
            Start Your Journal
          </Link>
        </Button>
        <div>
          <h3 className="mb-2 font-semibold">Recent Entries</h3>
          <ul className="space-y-2">
            {recentEntries.map((entry) => (
              <li key={entry.id}>
                <Link
                  href={`/journal/${entry.id}`}
                  className="text-sm hover:underline"
                >
                  {entry.title} - {entry.date}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
