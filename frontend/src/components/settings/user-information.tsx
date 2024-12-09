import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserInformation() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">User Information</h2>
      <div className="flex items-center space-x-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <Button>Change Picture</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="johndoe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="john@example.com" />
        </div>
      </div>
      <Button>Change Password</Button>
    </section>
  )
}
