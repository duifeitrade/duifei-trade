import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLang, type Lang } from "@/dictionaries";

export default async function OemPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "en";
  const dict = await getDictionary(lang);
  const o = dict.oem;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
            {o.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight max-w-3xl">
            {o.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            {o.subtitle}
          </p>
        </section>

        <section className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {o.services.map((s, i) => (
              <div key={s.name} className="flex gap-6">
                <span className="text-sm text-gray-300 font-light tabular-nums">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-normal text-gray-900">{s.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
