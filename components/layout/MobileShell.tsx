import type { ReactNode } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { FloatingBackButton } from "@/components/layout/FloatingBackButton";

type MobileShellProps = {
  children: ReactNode;
  withBottomNav?: boolean;
  withNav?: boolean;
  showBackButton?: boolean;
  className?: string;
};

export function MobileShell({ children, withBottomNav, withNav, showBackButton = true, className = "" }: MobileShellProps) {
  const hasBottomNav = withBottomNav ?? withNav ?? false;

  return (
    <main className={`app-canvas mx-auto min-h-screen w-full max-w-[430px] shadow-soft ${className}`}>
      {showBackButton ? <FloatingBackButton /> : null}
      <div className={`app-content min-h-screen ${hasBottomNav ? "pb-[calc(7rem+env(safe-area-inset-bottom))]" : ""}`}>
        {children}
      </div>
      {hasBottomNav ? <BottomNav /> : null}
    </main>
  );
}
