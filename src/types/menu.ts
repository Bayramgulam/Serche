export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  currency: "AZN";
  category: string;
  image?: string;
  featured: boolean;
  available: boolean;
  tags: string[];
  allergens: string[];
  variants: { name: string; price: number | null }[];
};
