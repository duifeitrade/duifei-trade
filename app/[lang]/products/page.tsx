import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLang, type Lang } from "@/dictionaries";
import { products } from "../products-data";

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
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div key={prod.image} className="group">
                <div className="overflow-hidden rounded-xl aspect-square bg-gray-50 mb-4">
                  <img
                    src={`/images/${prod.image}`}
                    alt={lang === "zh" ? prod.nameZh : prod.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-normal text-gray-900">
                  {lang === "zh" ? prod.nameZh : prod.nameEn}
                </h3>
                <p className="mt-1 text-xs text-gray-400 tracking-wider">
                  {lang === "zh" ? prod.specZh : prod.specEn}
                </p>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {lang === "zh" ? prod.descZh : prod.descEn}
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
