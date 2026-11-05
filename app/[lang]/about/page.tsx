import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLang, type Lang } from "@/dictionaries";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "en";
  const dict = await getDictionary(lang);
  const a = dict.about;

  const factoryImages = Array.from(
    { length: 8 },
    (_, i) => `/images/factory-${i + 1}.jpg`
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
            {a.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight max-w-3xl">
            {a.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            {a.subtitle}
          </p>
        </section>

        <section className="border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-6 py-16">
            {a.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mt-6 first:mt-0 text-base text-gray-600 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {factoryImages.map((src) => (
                <div
                  key={src}
                  className="aspect-video overflow-hidden rounded-lg bg-white"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
              <div className="aspect-video overflow-hidden rounded-lg bg-white flex items-center justify-center p-4">
                <img
                  src="/images/certificate.jpg"
                  alt="GMP Certificate"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
