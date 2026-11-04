export const languages = ["en", "zh"] as const;

export type Lang = (typeof languages)[number];

export type Dictionary = {
  nav: {
    home: string;
    products: string;
    oem: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  stats: {
    years: string;
    yearsLabel: string;
    gmp: string;
    gmpLabel: string;
    countries: string;
    countriesLabel: string;
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: { name: string; desc: string }[];
  };
  oem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    services: { name: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    person: string;
    personValue: string;
    email: string;
    emailValue: string;
    phone: string;
    phoneValue: string;
    address: string;
    addressValue: string;
  };
  footer: {
    copyright: string;
    domain: string;
  };
};

const dictionaries: Record<Lang, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((m) => m.default as Dictionary),
  zh: () => import("./zh.json").then((m) => m.default as Dictionary),
};

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

export async function getDictionary(lang: string): Promise<Dictionary> {
  return dictionaries[isLang(lang) ? lang : "en"]();
}
