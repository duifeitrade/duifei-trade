import type { Dictionary, Lang } from "@/dictionaries";

export default function Footer({
  lang: _lang,
  dict,
}: {
  lang: Lang;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400">
          {dict.footer.copyright.replace("{year}", String(year))}
        </p>
        <p className="text-xs text-gray-300">{dict.footer.domain}</p>
      </div>
    </footer>
  );
}
