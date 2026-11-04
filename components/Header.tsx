import Link from "next/link";
import type { Dictionary, Lang } from "@/dictionaries";

export default function Header({
  lang,
  dict,
}: {
  lang: Lang;
  dict: Dictionary;
}) {
  const otherLang: Lang = lang === "en" ? "zh" : "en";

  const navItems = [
    { label: dict.nav.home, href: `/${lang}` },
    { label: dict.nav.products, href: `/${lang}/products` },
    { label: dict.nav.oem, href: `/${lang}/oem` },
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="text-lg font-medium tracking-tight text-gray-900"
        >
          DUIFEI <span className="text-gray-400 font-light">TRADE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={`/${otherLang}`}
          className="text-sm border border-gray-200 rounded-full px-4 py-1.5 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all duration-200"
          aria-label="Switch language"
        >
          {lang === "en" ? "中文" : "EN"}
        </Link>
      </div>
    </header>
  );
}
