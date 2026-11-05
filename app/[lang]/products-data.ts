// 产品清单：加新产品时在这里加一行，页面自动显示
// category: "liquor" = 酒类 / "care" = 抗菌护理
// image: 图片文件名（放在 public/images/ 里）
// nameZh/nameEn: 产品名
// descZh/descEn: 产品描述
// specZh/specEn: 规格（酒精度、容量等）

export type Product = {
  image: string;
  category: "liquor" | "care";
  nameZh: string;
  nameEn: string;
  descZh: string;
  descEn: string;
  specZh: string;
  specEn: string;
};

export const categoryLabels: Record<"liquor" | "care", { zh: string; en: string }> = {
  liquor: { zh: "酒类", en: "Alcoholic Beverages" },
  care: { zh: "抗菌护理", en: "Antibacterial & Personal Care" },
};

export const products: Product[] = [
  {
    image: "product-1.jpg",
    category: "liquor",
    nameZh: "莫相忘花果酒",
    nameEn: "Mo Xiang Wang Fruit Rice Wine",
    descZh: "稻酒翁品牌，桃花米酒，低度微甜，木盒双瓶装礼品。",
    descEn: "Peach blossom rice wine, light and sweet, gift box with two bottles.",
    specZh: "26%vol · 180ml",
    specEn: "26%vol · 180ml",
  },
  {
    image: "product-2.jpg",
    category: "liquor",
    nameZh: "稻酒翁粤香型白酒",
    nameEn: "Dao Jiu Weng Cantonese Baijiu",
    descZh: "粤香型原浆白酒，蓝盒透明瓶，口感绵柔。",
    descEn: "Cantonese-aroma baijiu, smooth and mellow.",
    specZh: "50%vol · 500ml",
    specEn: "50%vol · 500ml",
  },
  {
    image: "product-3.jpg",
    category: "liquor",
    nameZh: "清夜无尘露酒",
    nameEn: "Qing Ye Wu Chen Herbal Liquor",
    descZh: "药食同源原料浸泡，清远豪久药业出品，三角瓶金色酒。",
    descEn: "Herbal infused liquor, food-medicine homologous ingredients.",
    specZh: "36%vol · 500ml",
    specEn: "36%vol · 500ml",
  },
  {
    image: "product-4.jpg",
    category: "liquor",
    nameZh: "江上粤原浆白酒",
    nameEn: "Jiang Shang Yue Original Baijiu",
    descZh: "古法酿造原浆白酒，牛皮纸箱整箱装。",
    descEn: "Traditionally brewed original baijiu, case of 6.",
    specZh: "50%vol · 500ml",
    specEn: "50%vol · 500ml",
  },
  {
    image: "product-5.jpg",
    category: "liquor",
    nameZh: "江上粤·粤香",
    nameEn: "Jiang Shang Yue · Yue Xiang",
    descZh: "粤香系列精品原浆白酒，蓝色渐变瓶身，绿色礼盒装。",
    descEn: "Premium baijiu with blue gradient bottle, gift box.",
    specZh: "50%vol · 500ml",
    specEn: "50%vol · 500ml",
  },
  {
    image: "product-7.jpg",
    category: "care",
    nameZh: "肤邦主抗菌喷剂",
    nameEn: "Fu Bang Zhu Anti-bacterial Spray",
    descZh: "豪久药业出品，国家发明专利，针对痤疮丙酸杆菌、金黄色葡萄球菌，湿疹皮炎瘙痒适用。",
    descEn: "National invention patent, effective against acne bacteria, eczema and dermatitis.",
    specZh: "30ml",
    specEn: "30ml",
  },
  {
    image: "product-8.jpg",
    category: "care",
    nameZh: "烫创清抗菌喷剂",
    nameEn: "Tang Chuang Qing Wound Spray",
    descZh: "豪久药业出品，皮肤创面消毒防感染，适用于烧烫伤、厨房小创口，无刺激。",
    descEn: "Wound disinfection and infection prevention for burns and minor cuts.",
    specZh: "30ml",
    specEn: "30ml",
  },
  {
    image: "product-9.jpg",
    category: "care",
    nameZh: "豪久抗菌液",
    nameEn: "Hao Jiu Anti-bacterial Liquid",
    descZh: "豪久药业出品，植物草本原料，杀灭细菌、真菌、病毒及肺炎支原体，99.9%有效杀菌。",
    descEn: "Herbal formula, kills bacteria, fungi, viruses and mycoplasma, 99.9% efficacy.",
    specZh: "50ml",
    specEn: "50ml",
  },
  {
    image: "product-10.jpg",
    category: "care",
    nameZh: "爱宝妈妈皮肤修护液",
    nameEn: "Ai Bao Mama Skin Repair Roll-on",
    descZh: "豪久药业出品，天然草本，不含激素防腐剂，孕婴适用，止痒消包、温和修护。",
    descEn: "Herbal roll-on for babies and pregnant moms, soothing and itch relief.",
    specZh: "10ml",
    specEn: "10ml",
  },
];
