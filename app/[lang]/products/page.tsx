import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLang, type Lang } from "@/dictionaries";
import { products, categoryLabels, type Product } from "../products-data";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "en";
  const dict = await getDictionary(lang);
  const p = dict.products;

  const categories: ("liquor" | "care")[] = ["liquor", "care"];

  const renderProduct = (prod: Product) => (
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
  );

  const navItems = categories
    .map((cat) => ({ cat, items: products.filter((prod) => prod.category === cat) }))
    .filter((g) => g.items.length > 0);

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

          {/* 分类导航 */}
          <nav className="mt-10 flex flex-wrap gap-3">
            {navItems.map(({ cat, items }) => {
              const label = lang === "zh" ? categoryLabels[cat].zh : categoryLabels[cat].en;
              return (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="px-4 py-2 text-sm border border-gray-200 rounded-full text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
                >
                  {label}
                  <span className="ml-2 text-gray-400">({items.length})</span>
                </a>
              );
            })}
          </nav>
        </section>

        {navItems.map(({ cat, items }) => {
          const label = lang === "zh" ? categoryLabels[cat].zh : categoryLabels[cat].en;
          return (
            <section key={cat} id={cat} className="border-t border-gray-100 scroll-mt-20">
              <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-xl font-normal text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-px h-5 bg-gray-300" />
                  {label}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map(renderProduct)}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
