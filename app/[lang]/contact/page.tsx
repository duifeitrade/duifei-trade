import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLang, type Lang } from "@/dictionaries";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "en";
  const dict = await getDictionary(lang);
  const c = dict.contact;

  const items = [
    { label: c.person, value: c.personValue, href: undefined },
    { label: c.email, value: c.emailValue, href: `mailto:${c.emailValue}` },
    { label: c.phone, value: c.phoneValue, href: `tel:${c.phoneValue.replace(/\s/g, "")}` },
    { label: c.address, value: c.addressValue, href: undefined },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
            {c.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight max-w-3xl">
            {c.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            {c.subtitle}
          </p>
        </section>

        <section className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {items.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-base text-gray-900 hover:text-gray-500 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base text-gray-900">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
