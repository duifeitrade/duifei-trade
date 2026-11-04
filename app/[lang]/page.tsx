import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLang, type Lang } from "@/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "en";
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header lang={lang} dict={dict} />

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
            {dict.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 leading-tight max-w-3xl">
            {dict.hero.title1}
            <br />
            <span className="text-gray-400">{dict.hero.title2}</span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            {dict.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${lang}/products`}
              className="inline-block bg-gray-900 text-white text-sm px-8 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              {dict.hero.cta1}
            </Link>
            <Link
              href={`/${lang}/oem`}
              className="inline-block border border-gray-200 text-gray-600 text-sm px-8 py-3 rounded-full hover:border-gray-400 transition-colors duration-200"
            >
              {dict.hero.cta2}
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-4">
          <img
            src="/images/hero.png"
            alt="Duifei Trade facility"
            className="w-full rounded-2xl object-cover max-h-[480px]"
          />
        </section>

        <section className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-2xl font-light text-gray-900">
                {dict.stats.years}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {dict.stats.yearsLabel}
              </p>
            </div>
            <div>
              <p className="text-2xl font-light text-gray-900">{dict.stats.gmp}</p>
              <p className="text-sm text-gray-400 mt-1">
                {dict.stats.gmpLabel}
              </p>
            </div>
            <div>
              <p className="text-2xl font-light text-gray-900">
                {dict.stats.countries}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {dict.stats.countriesLabel}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} dict={dict} />
    </div>
  );
}
