"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Home, Map, ScanLine } from "lucide-react";
import { usePathname } from "next/navigation";

type BottomNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  activePaths?: string[];
};

type BottomNavProps = {
  items?: BottomNavItem[];
};

const defaultItems: BottomNavItem[] = [
  { href: "/museum", label: "首页", icon: Home, activePaths: ["/museum", "/louvre", "/preview", "/preferences", "/routes"] },
  { href: "/explore", label: "探索", icon: Map, activePaths: ["/explore", "/artworks", "/map"] },
  { href: "/scan", label: "识别", icon: ScanLine },
  { href: "/profile", label: "我的", icon: BadgeCheck }
];

export function BottomNav({ items = defaultItems }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[430px] px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-2">
      <div className="grid grid-cols-4 gap-1 rounded-[26px] border border-line bg-paper p-2 shadow-soft">
        {items.map((item) => {
          const Icon = item.icon;
          const activeRoots = item.activePaths ?? [item.href];
          const active = activeRoots.some((root) => pathname === root || pathname.startsWith(`${root}/`));
          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={`flex h-12 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-bold transition ${
                active ? "bg-ink text-paper shadow-button" : "text-muted"
              }`}
              href={item.href}
              key={item.href}
            >
              <Icon size={18} strokeWidth={1.8} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
