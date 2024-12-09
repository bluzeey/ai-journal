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

export function JournalSettings() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Journal Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="default-time">Default Journaling Time</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8:00 AM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (2:00 PM)</SelectItem>
              <SelectItem value="evening">Evening (8:00 PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="prompts" />
          <Label htmlFor="prompts">Enable Daily Prompts</Label>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="privacy">Privacy Settings</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select privacy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Only Me</SelectItem>
              <SelectItem value="contacts">Specific Contacts</SelectItem>
              <SelectItem value="public">Public</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="auto-save" />
          <Label htmlFor="auto-save">Auto-Save Entries</Label>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Export Entries</Button>
          <Button variant="outline">Import Entries</Button>
        </div>
      </div>
    </section>
  )
}
