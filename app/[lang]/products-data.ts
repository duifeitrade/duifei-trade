// 产品清单：加新产品时在这里加一行，页面自动显示
// image: 图片文件名（放在 public/images/ 里）
// nameZh/nameEn: 产品名
// descZh/descEn: 产品描述
// specZh/specEn: 规格（酒精度、容量等）

export type Product = {
  image: string;
  nameZh: string;
  nameEn: string;
  descZh: string;
  descEn: string;
  specZh: string;
  specEn: string;
};

export const products: Product[] = [
  {
    image: "product-1.jpg",
    nameZh: "莫相忘花果酒",
    nameEn: "Mo Xiang Wang Fruit Rice Wine",
    descZh: "稻酒翁品牌，桃花米酒，低度微甜，木盒双瓶装礼品。",
    descEn: "Peach blossom rice wine, light and sweet, gift box with two bottles.",
    specZh: "26%vol · 180ml",
    specEn: "26%vol · 180ml",
  },
  {
    image: "product-2.jpg",
    nameZh: "稻酒翁粤香型白酒",
    nameEn: "Dao Jiu Weng Cantonese Baijiu",
    descZh: "粤香型原浆白酒，蓝盒透明瓶，口感绵柔。",
    descEn: "Cantonese-aroma baijiu, smooth and mellow.",
    specZh: "50%vol · 500ml",
    specEn: "50%vol · 500ml",
  },
  {
    image: "product-3.jpg",
    nameZh: "清夜无尘露酒",
    nameEn: "Qing Ye Wu Chen Herbal Liquor",
    descZh: "药食同源原料浸泡，清远豪久药业出品，三角瓶金色酒。",
    descEn: "Herbal infused liquor, food-medicine homologous ingredients.",
    specZh: "36%vol · 500ml",
    specEn: "36%vol · 500ml",
  },
  {
    image: "product-4.jpg",
    nameZh: "江上粤原浆白酒",
    nameEn: "Jiang Shang Yue Original Baijiu",
    descZh: "古法酿造原浆白酒，牛皮纸箱整箱装。",
    descEn: "Traditionally brewed original baijiu, case of 6.",
    specZh: "50%vol · 500ml",
    specEn: "50%vol · 500ml",
  },
  {
    image: "product-5.jpg",
    nameZh: "江上粤·粤香",
    nameEn: "Jiang Shang Yue · Yue Xiang",
    descZh: "粤香系列精品原浆白酒，蓝色渐变瓶身，绿色礼盒装。",
    descEn: "Premium baijiu with blue gradient bottle, gift box.",
    specZh: "50%vol · 500ml",
    specEn: "50%vol · 500ml",
  },
];
