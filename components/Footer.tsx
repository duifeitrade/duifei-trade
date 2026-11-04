import type { Dictionary, Lang } from "@/dictionaries";

export default function Footer({
  lang,
  dict,
}: {
  lang: Lang;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  const c = dict.contact;

  return (
    <footer className="border-t border-gray-100 mt-auto bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-sm">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              {c.person}
            </p>
            <p className="text-gray-700">{c.personValue}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              {c.phone}
            </p>
            <a href={`tel:${c.phoneValue.replace(/\s/g, "")}`} className="text-gray-700 hover:text-gray-900">
              {c.phoneValue}
            </a>
            <p className="mt-2">
              <a href={`mailto:${c.emailValue}`} className="text-gray-700 hover:text-gray-900">
                {c.emailValue}
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              {c.address}
            </p>
            <p className="text-gray-700 leading-relaxed">{c.addressValue}</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            {dict.footer.copyright.replace("{year}", String(year))}
          </p>
          <p className="text-xs text-gray-300">{dict.footer.domain}</p>
        </div>
      </div>
    </footer>
  );
}
