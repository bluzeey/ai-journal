import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function GamificationSettings() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Gamification</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="achievements-visibility">
            Achievements Visibility
          </Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="show">Show All</SelectItem>
              <SelectItem value="hide">Hide All</SelectItem>
              <SelectItem value="friends">Friends Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="personal-challenge" className="mb-2 block">
            Set Personal Challenge
          </Label>
          <div className="flex space-x-2">
            <Input
              id="personal-challenge"
              placeholder="e.g., Write for 30 days straight"
            />
            <Button>Set</Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="challenge-notifications" />
          <Label htmlFor="challenge-notifications">
            Challenge Notifications
          </Label>
        </div>
      </div>
    </section>
  )
}
