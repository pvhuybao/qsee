import type { ProductCategoryTab, ProductItem } from "@/types/product";

export const productCategories: ProductCategoryTab[] = [
  { id: "all", label: "TẤT CẢ SẢN PHẨM", icon: "grid" },
  { id: "frame", label: "HỆ KHUNG", icon: "frame" },
  { id: "panel", label: "TẤM PIN", icon: "panel" },
  { id: "inverter", label: "BIẾN TẦN", icon: "inverter" },
  { id: "electrical", label: "VẬT TƯ THIẾT BỊ ĐIỆN", icon: "cable" },
];

export const products: ProductItem[] = [
  {
    id: "helu-6",
    categoryId: "electrical",
    badge: "BEST SELLER",
    image: "/images/products/tam-nen.png",
    title: "Cáp điện năng lượng mặt trời Helukabel SolarFlex 6mm²",
    description:
      "Cáp DC chuyên dụng cho hệ thống PV, phù hợp kết nối tấm pin–biến tần, đạt tiêu chuẩn an toàn và chịu môi trường ngoài trời.",
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "helu-4",
    categoryId: "electrical",
    badge: "MỚI NHẤT",
    image: "/images/products/tam-nen.png",
    title: "Cáp điện năng lượng mặt trời Helukabel SolarFlex H1Z2Z2-K 4mm²",
    description:
      "Dây dẫn một lõi, vỏ chống tia UV và chịu nhiệt, dùng cho đường DC hệ quang điện dân dụng và thương mại.",
    featureIcon: "check",
    featureText: "Chống UV - Chịu nhiệt tốt",
    href: "#",
  },
  {
    id: "lapp-10",
    categoryId: "electrical",
    brandLogo: "/images/partners/jj-lapp.png",
    image: "/images/products/tam-nen.png",
    title: "Cáp điện DC năng lượng mặt trời LAPP 10mm²",
    description:
      "Giải pháp dẫn điện DC công suất lớn, tiếp điểm ổn định, phù hợp chuỗi dài và hệ thống yêu cầu tiết diện lớn.",
    featureIcon: "zap",
    featureText: "Dẫn điện ổn định - An toàn tối ưu",
    href: "#",
  },
  {
    id: "lapp-6",
    categoryId: "electrical",
    brandLogo: "/images/partners/jj-lapp.png",
    image: "/images/products/tam-nen.png",
    title: "Cáp điện DC năng lượng mặt trời LAPP 6.0",
    description:
      "Cáp DC đa dụng cho lắp đặt gọn, tối ưu chi phí vật tư mà vẫn đảm bảo hiệu suất và tuổi thọ hệ thống.",
    featureIcon: "spool",
    featureText: "Tiết kiệm - Hiệu quả cao",
    href: "#",
  },
  {
    id: "helu-61",
    categoryId: "frame",
    badge: "ĐẶT TRƯỚC",
    image: "/images/products/tam-nen.png",
    title: "Cáp điện năng lượng mặt trời Helukabel SolarFlex 6mm²",
    description:
      "Cáp DC chuyên dụng cho hệ thống PV, phù hợp kết nối tấm pin–biến tần, đạt tiêu chuẩn an toàn và chịu môi trường ngoài trời.",
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "helu-41",
    categoryId: "frame",
    badge: "BEST SELLER",
    image: "/images/products/tam-nen.png",
    title: "Cáp điện năng lượng mặt trời Helukabel SolarFlex H1Z2Z2-K 4mm²",
    description:
      "Dây dẫn một lõi, vỏ chống tia UV và chịu nhiệt, dùng cho đường DC hệ quang điện dân dụng và thương mại.",
    featureIcon: "check",
    featureText: "Chống UV - Chịu nhiệt tốt",
    href: "#",
  },
  {
    id: "lapp-101",
    categoryId: "frame",
    brandLogo: "/images/partners/jj-lapp.png",
    image: "/images/products/tam-nen.png",
    title: "Cáp điện DC năng lượng mặt trời LAPP 10mm²",
    description:
      "Giải pháp dẫn điện DC công suất lớn, tiếp điểm ổn định, phù hợp chuỗi dài và hệ thống yêu cầu tiết diện lớn.",
    featureIcon: "zap",
    featureText: "Dẫn điện ổn định - An toàn tối ưu",
    href: "#",
  },
];
