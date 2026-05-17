import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type PageHeaderProps = {
  title: string;
  backHref?: string;
  action?: React.ReactNode;
};

export function PageHeader({ title, backHref, action }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-line/70 bg-paper/72 px-4 backdrop-blur-xl">
      <div className="flex min-w-0 items-center gap-2">
        {backHref ? (
          <Link
            aria-label="返回"
            className="grid size-10 place-items-center rounded-full border border-line/70 bg-paper/65 text-ink shadow-card backdrop-blur"
            href={backHref}
          >
            <ChevronLeft size={20} />
          </Link>
        ) : null}
        <h1 className="truncate text-base font-black tracking-[-0.01em]">{title}</h1>
      </div>
      {action}
    </header>
  );
}
