import { Achievements } from "@/components/gamification/achievements"
import { GamificationLayout } from "@/components/gamification/gamification-layout"
import { Leaderboard } from "@/components/gamification/leaderboard"
import { PointsSystem } from "@/components/gamification/points-system"
import { TasksAndGoals } from "@/components/gamification/tasks-and-goals"
import { UserLevelProgress } from "@/components/gamification/user-level-progress"
import { UserTagSystem } from "@/components/gamification/user-tag-system"
import { PrimarySidebar } from "@/components/shared/sidebar" // Import PrimarySidebar

export default function GamificationPage() {
  return (
    <div className="flex h-screen w-full">
      <PrimarySidebar /> {/* Add the PrimarySidebar here */}
      <div className="flex h-screen flex-1 bg-gray-100">
        <GamificationLayout>
          <UserLevelProgress />
          <div className="grid gap-6 md:grid-cols-2">
            <PointsSystem />
            <TasksAndGoals />
          </div>
          <Achievements />
          <div className="grid gap-6 md:grid-cols-2">
            <UserTagSystem />
            <Leaderboard />
          </div>
        </GamificationLayout>
      </div>
    </div>
  )
}
