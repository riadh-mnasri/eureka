import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { RobotMascot } from "./RobotMascot";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
      <Link
        href="/"
        className="font-heading text-2xl sm:text-3xl font-bold text-teal-dark flex items-center gap-2"
      >
        <RobotMascot mood="happy" className="h-9 w-9 sm:h-10 sm:w-10" />
        {t("appName")}
      </Link>
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/parents"
          className="text-sm sm:text-base font-semibold text-foreground/70 hover:text-foreground transition-colors"
        >
          {t("parents")}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
