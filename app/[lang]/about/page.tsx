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
          <div className="max-w-6xl mx-auto px-6 py-16 max-w-2xl">
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
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
