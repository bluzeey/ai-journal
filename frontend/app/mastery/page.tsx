import { Achievements } from "@/components/gamification/achievements";
import { GamificationLayout } from "@/components/gamification/gamification-layout";
import { Leaderboard } from "@/components/gamification/leaderboard";
import { PointsSystem } from "@/components/gamification/points-system";
import { TasksAndGoals } from "@/components/gamification/tasks-and-goals";
import { UserLevelProgress } from "@/components/gamification/user-level-progress";
import { UserTagSystem } from "@/components/gamification/user-tag-system";
import { PrimarySidebar } from "@/components/shared/sidebar"; // Import PrimarySidebar

export default function GamificationPage() {
  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
      {" "}
      {/* Background color for light and dark modes */}
      <PrimarySidebar /> {/* Add the PrimarySidebar here */}
      <div className="flex h-screen flex-1 bg-gray-100 dark:bg-gray-900">
        <GamificationLayout>
          <UserLevelProgress />
          <div className="grid gap-6 md:grid-cols-2">
            <PointsSystem />
            <UserTagSystem />
            {/* 
            Add Tasks and the points functionality here. 
            <TasksAndGoals /> 
            */}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Achievements />
            <Leaderboard />
          </div>
        </GamificationLayout>
      </div>
    </div>
  );
}
