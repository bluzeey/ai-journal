import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UserTagSystem() {
  const currentTag = "Journaling Enthusiast"
  const nextTag = "Master Reflector"
  const requirement = "Reach level 10 and earn 20 achievements"

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Tag</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Current Tag</h3>
            <Badge variant="secondary" className="text-lg">
              {currentTag}
            </Badge>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Next Tag</h3>
            <p className="text-sm">{nextTag}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Requirement: {requirement}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
