import { Card, CardContent } from "@/components/ui/card"

export function WelcomeSection() {
  const userName = "John" // This would be fetched from user data
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const quote = "The only way to do great work is to love what you do." // This could be fetched from an API or a list of quotes

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="mb-2 text-2xl font-bold">Welcome back, {userName}!</h2>
        <p className="mb-4 text-muted-foreground">{today}</p>
        <p className="italic">&ldquo;{quote}&rdquo;</p>
      </CardContent>
    </Card>
  )
}
