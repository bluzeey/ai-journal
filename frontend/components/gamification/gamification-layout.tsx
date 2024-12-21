import { ReactNode } from "react";

export function GamificationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Path to Mastery</h1>
        <p className="text-muted-foreground">
          Track your progress and earn achievements!
        </p>
      </header>
      <div className="space-y-8">{children}</div>
    </div>
  );
}
