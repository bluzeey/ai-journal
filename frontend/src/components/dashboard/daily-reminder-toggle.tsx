import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function DailyReminderToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="daily-reminder" />
      <Label htmlFor="daily-reminder">Daily Reminder</Label>
    </div>
  )
}
