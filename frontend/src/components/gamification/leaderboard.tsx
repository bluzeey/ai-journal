import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Leaderboard() {
  const topUsers = [
    { name: "Alice", points: 2500, avatar: "/avatars/alice.jpg" },
    { name: "Bob", points: 2300, avatar: "/avatars/bob.jpg" },
    { name: "Charlie", points: 2100, avatar: "/avatars/charlie.jpg" },
    { name: "Diana", points: 1900, avatar: "/avatars/diana.jpg" },
    { name: "Ethan", points: 1800, avatar: "/avatars/ethan.jpg" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Leaderboard
          <div className="flex items-center space-x-2">
            <Switch id="leaderboard-opt-in" />
            <Label htmlFor="leaderboard-opt-in">Opt-in</Label>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topUsers.map((user, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{index + 1}.</span>
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <span>{user.name}</span>
              </div>
              <span className="font-semibold">{user.points} pts</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
