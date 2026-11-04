import { languages, isLang } from "@/dictionaries";
import HtmlLangSync from "@/components/HtmlLangSync";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : "en";

  return (
    <>
      <HtmlLangSync lang={lang} />
      {children}
    </>
  );
}
