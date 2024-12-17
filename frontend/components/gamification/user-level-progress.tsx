import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function UserLevelProgress() {
  const currentLevel = 5
  const levelTitle = "Adept Journaler"
  const currentPoints = 500
  const pointsToNextLevel = 1000

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Level {currentLevel}: {levelTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress
          value={(currentPoints / pointsToNextLevel) * 100}
          className="w-full"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          {currentPoints}/{pointsToNextLevel} points to next level
        </p>
      </CardContent>
    </Card>
  )
}
