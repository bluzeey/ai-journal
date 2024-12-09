import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function AIInsights() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">AI & Insights</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="ai-analysis" />
          <Label htmlFor="ai-analysis">Enable AI Analysis</Label>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="insight-frequency">Insight Frequency</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="mb-2 text-sm text-gray-600">
            Your data is used to generate personalized insights. We never share
            your data with third parties.
          </p>
          <Button variant="outline">Manage Data Usage</Button>
        </div>
      </div>
    </section>
  )
}
