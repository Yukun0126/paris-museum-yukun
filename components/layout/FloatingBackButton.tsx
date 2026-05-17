"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type FloatingBackButtonProps = {
  fallbackHref?: string;
};

export function FloatingBackButton({ fallbackHref = "/museum" }: FloatingBackButtonProps) {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-[430px] px-4 pt-[calc(1rem+env(safe-area-inset-top))]">
      <div className="flex justify-end">
        <button
          aria-label="返回上一页"
          className="pointer-events-auto grid size-10 place-items-center rounded-full border border-line/80 bg-paper/78 text-ink shadow-card backdrop-blur-xl transition active:scale-95"
          onClick={goBack}
          type="button"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
    </div>
  );
}
