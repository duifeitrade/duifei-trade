import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLang, type Lang } from "@/dictionaries";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "en";
  const dict = await getDictionary(lang);
  const p = dict.products;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
            {p.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight max-w-3xl">
            {p.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            {p.subtitle}
          </p>
        </section>

        <section className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 md:bg-transparent md:gap-8">
            {p.categories.map((c) => (
              <div
                key={c.name}
                className="bg-white py-8 md:py-0 md:border-l md:border-gray-100 md:pl-8 first:md:pl-0 first:md:border-l-0"
              >
                <h3 className="text-lg font-normal text-gray-900">{c.name}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
