export type ProductCategoryId =
  | "all"
  | "frame"
  | "panel"
  | "inverter"
  | "electrical";

export type ProductFeatureIcon = "check" | "zap" | "spool";

export interface ProductItem {
  id: string;
  categoryId: Exclude<ProductCategoryId, "all">;
  badge?: string;
  brandLogo?: string;
  image: string;
  images?: string[];
  title: string;
  description: string;
  summaryBullets: string[];
  details: string;
  featureIcon: ProductFeatureIcon;
  featureText: string;
  href: string;
}

export interface ProductCategoryTab {
  id: ProductCategoryId;
  label: string;
  icon: "grid" | "frame" | "panel" | "inverter" | "cable";
}
