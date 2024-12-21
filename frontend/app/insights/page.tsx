import { InsightsPage } from "@/components/insights/insights-page";
import { PrimarySidebar } from "@/components/shared/sidebar";

export default function Insights() {
  return (
    <>
      <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
        <PrimarySidebar />
        <InsightsPage />
      </div>
    </>
  );
}
