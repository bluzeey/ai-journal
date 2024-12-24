import { AIInsights } from "@/components/settings/ai-insights";
import { AppearanceSettings } from "@/components/settings/appearance-settings";
import { GamificationSettings } from "@/components/settings/gamification-settings";
import { JournalSettings } from "@/components/settings/journal-settings";
import { LegalAndSupport } from "@/components/settings/legal-and-support";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { SettingsLayout } from "@/components/settings/settings-layout";
import { UserInformation } from "@/components/settings/user-information";
import { PrimarySidebar } from "@/components/shared/sidebar"; // Import PrimarySidebar

export default function SettingsPage() {
  return (
    <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-800">
      <PrimarySidebar /> {/* Add the PrimarySidebar here */}
      <div className="flex h-screen flex-1 bg-gray-100 dark:bg-gray-800">
        <SettingsLayout>
          <UserInformation />
          {/* <JournalSettings /> */}
          {/* <AIInsights /> */}
          {/* <NotificationSettings /> */}
          <AppearanceSettings />
          {/* <GamificationSettings /> */}
          <LegalAndSupport />
        </SettingsLayout>
      </div>
    </div>
  );
}
