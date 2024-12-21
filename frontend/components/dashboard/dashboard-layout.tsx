import { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {" "}
      {/* Background for light and dark modes */}
      <main className="flex-1 overflow-y-auto p-6 bg-white dark:bg-gray-800">
        {" "}
        {/* Main content background */}
        <div className="container mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
