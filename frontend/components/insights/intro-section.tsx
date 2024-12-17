import { Card, CardContent } from "@/components/ui/card"

export function IntroSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Welcome to Your Insights
        </h2>
        <p className="text-muted-foreground">
          Explore your journey through the lens of your words. Here, we've
          analyzed your journal entries to provide you with meaningful insights
          about your thoughts, emotions, and patterns over time.
        </p>
      </CardContent>
    </Card>
  )
}
