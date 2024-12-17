import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AppearanceSettings() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Appearance</h2>
      <div className="space-y-4">
        <div>
          <Label className="mb-2 block">Theme</Label>
          <RadioGroup defaultValue="light" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <Label htmlFor="light">Light</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label htmlFor="dark">Dark</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="system" />
              <Label htmlFor="system">System</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="font-size">Font Size</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="color-scheme">Color Scheme</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select scheme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="nature">Nature</SelectItem>
              <SelectItem value="ocean">Ocean</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  )
}
