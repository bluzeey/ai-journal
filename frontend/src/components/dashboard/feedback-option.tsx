import { MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FeedbackOption() {
  return (
    <Button variant="outline" size="sm">
      <MessageSquare className="mr-2 h-4 w-4" />
      Give Feedback
    </Button>
  )
}
