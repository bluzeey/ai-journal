import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function NotificationSettings() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Notifications</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="daily-reminder">Daily Reminder</Label>
          <div className="flex items-center space-x-2">
            <Switch id="daily-reminder" />
            <Input type="time" className="w-24" defaultValue="20:00" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="insight-alerts" />
          <Label htmlFor="insight-alerts">Insight Alerts</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="app-updates" />
          <Label htmlFor="app-updates">App Updates</Label>
        </div>
      </div>
    </section>
  )
}
