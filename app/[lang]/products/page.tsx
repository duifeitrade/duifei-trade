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

  const categoryImages = [
    "/images/product-1.jpg",
    "/images/product-2.jpg",
    "/images/product-3.jpg",
  ];

  const galleryImages = Array.from(
    { length: 10 },
    (_, i) => `/images/product-${i + 1}.jpg`
  );

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
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {p.categories.map((c, i) => (
              <div key={c.name} className="group">
                <div className="overflow-hidden rounded-xl mb-4 aspect-square bg-gray-50">
                  <img
                    src={categoryImages[i]}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-normal text-gray-900">{c.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {galleryImages.map((src) => (
                <div
                  key={src}
                  className="aspect-square overflow-hidden rounded-lg bg-white"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
