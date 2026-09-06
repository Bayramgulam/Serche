import type { MenuItem } from "@/types/menu";
// DEMONSTRATION ONLY. Insert owner-verified menu here and change isDemo to false.
// Null prices prevent demonstration values being mistaken for actual prices.
export const isDemo = true;
export const categories = [
  { id: "qehve", name: "Qəhvə", note: "İsti bir fasilə" },
  { id: "soyuq-ickiler", name: "Soyuq içkilər", note: "Bir az sərinlik" },
  { id: "seher-yemeyi", name: "Səhər yeməyi", note: "Günə yavaş başla" },
  { id: "sendvicler", name: "Sendviçlər", note: "İki dilim arasında" },
  { id: "salatlar", name: "Salatlar", note: "Yüngül bir seçim" },
  { id: "pasta", name: "Pasta", note: "Süfrədə bir az rahatlıq" },
  { id: "desertler", name: "Desertlər", note: "Söhbətin şirin yeri" },
];
const item = (
  id: string,
  name: string,
  description: string,
  category: string,
  extras: Partial<MenuItem> = {},
): MenuItem => ({
  id,
  name,
  description,
  category,
  price: null,
  currency: "AZN",
  featured: false,
  available: true,
  tags: [],
  allergens: [],
  variants: [],
  ...extras,
});
export const menu: MenuItem[] = [
  item("espresso", "Espresso", "Kiçik fincanda qəhvənin öz dadı.", "qehve", {
    variants: [
      { name: "Tək", price: null },
      { name: "İkiqat", price: null },
    ],
  }),
  item(
    "cappuccino",
    "Kapuçino",
    "Espresso, isti süd və yumşaq süd köpüyü.",
    "qehve",
    { featured: true, image: "/images/coffee-detail.jpg", allergens: ["Süd"] },
  ),
  item(
    "filter",
    "Filtr qəhvə",
    "Uzun söhbətə yoldaş olan sadə qəhvə.",
    "qehve",
  ),
  item(
    "iced-latte",
    "Buzlu latte",
    "Espresso, soyuq süd və buz.",
    "soyuq-ickiler",
    { allergens: ["Süd"] },
  ),
  item(
    "limonad",
    "Limonad",
    "Limonun yüngül, təravətli dadı.",
    "soyuq-ickiler",
    { available: false },
  ),
  item(
    "tost",
    "Avokadolu tost",
    "Qızarmış çörək üzərində avokado.",
    "seher-yemeyi",
    { tags: ["Vegetarian"], allergens: ["Qlüten"] },
  ),
  item(
    "sendvic",
    "Pendirli sendviç",
    "Çörək, pendir və göyərti.",
    "sendvicler",
    { allergens: ["Süd", "Qlüten"] },
  ),
  item(
    "salat",
    "Yaşıl salat",
    "Mövsüm göyərtiləri və limonlu sous.",
    "salatlar",
    { tags: ["Vegetarian"] },
  ),
  item("pasta", "Pomidorlu pasta", "Pomidor sousu və reyhanla.", "pasta", {
    allergens: ["Qlüten"],
    tags: ["Vegetarian"],
  }),
  item("keks", "Limonlu keks", "Qəhvənin yanında bir dilim.", "desertler", {
    allergens: ["Qlüten", "Yumurta", "Süd"],
  }),
];
export function normalizeSearch(value: string) {
  return value
    .toLocaleLowerCase("az")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ə/g, "e")
    .replace(/ı/g, "i");
}
export function formatPrice(price: number | null) {
  return price === null
    ? "Qiymət gözlənilir"
    : `${new Intl.NumberFormat("az-AZ", { maximumFractionDigits: 2 }).format(price)} ₼`;
}
