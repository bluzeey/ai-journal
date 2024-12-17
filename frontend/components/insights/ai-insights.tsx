import { ScrollArea } from "@/components/ui/scroll-area"

const insights = [
  {
    title: "Increased Focus on Personal Growth",
    content:
      "Your recent entries show a growing interest in personal development and learning new skills. Consider setting specific goals to channel this energy.",
  },
  {
    title: "Improved Work-Life Balance",
    content:
      "Compared to earlier entries, you've been mentioning more activities outside of work. This balance seems to be having a positive effect on your overall mood.",
  },
  {
    title: "Consistent Exercise Routine",
    content:
      "Your mentions of exercise have become more frequent and regular. Keep up the good work! Regular physical activity is linked to improved mental health.",
  },
]

export function AIInsights({ timeRange }: { timeRange: string }) {
  return (
    <ScrollArea className="h-[300px] pr-4">
      <ul className="space-y-4">
        {insights.map((insight, index) => (
          <li key={index}>
            <h3 className="font-semibold">{insight.title}</h3>
            <p className="text-sm text-muted-foreground">{insight.content}</p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}
