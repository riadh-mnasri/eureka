"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 rounded-lg bg-card border-2 border-foreground/20 p-1">
      {routing.locales.map((candidate) => (
        <button
          key={candidate}
          type="button"
          onClick={() => router.replace(pathname, { locale: candidate })}
          className={`px-2.5 py-1 rounded-md text-xs sm:text-sm font-bold uppercase transition-colors cursor-pointer ${
            candidate === locale
              ? "bg-amber text-white"
              : "text-foreground/50 hover:text-foreground"
          }`}
          aria-current={candidate === locale}
        >
          {candidate}
        </button>
      ))}
    </div>
  );
}
