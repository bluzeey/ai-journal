import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingPrompts() {
  const todayPrompt = "What's one thing you're grateful for today?"
  const challenge = "Write for 10 minutes every day this week"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prompts & Challenges</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="mb-2 font-semibold">Today's Prompt</h3>
          <p className="text-sm">{todayPrompt}</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Current Challenge</h3>
          <p className="text-sm">{challenge}</p>
        </div>
      </CardContent>
    </Card>
  )
}
