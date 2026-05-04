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
    id: "cap-dien-lapp-6",
    categoryId: "electrical",
    badge: "",
    image: "/data/cap-dien-1/cap-dien-1.png",
    images: [
      "/data/cap-dien-1/cap-dien-1.png",
      "/data/cap-dien-1/cap-dien-2.png",
    ],
    title: "Cáp điện DC năng lượng mặt trời LAPP 6.0",
    description:
      "Cáp điện năng lượng mặt trời Lappkabel Olflex XLR-E (gọi tắt là cáp Lapp Kabel) dùng để kết nối các tấm pin năng lượng mặt trời. Sản phẩm được sản xuất bởi Lappkabel (Đức) – nhà sản xuất cáp hàng đầu thế giới.",
    summaryBullets: [
      "Hãng: Lapp",
      "Tên gọi: Cáp điện DC - ÖLFLEX® SOLAR H1 BUR",
      // "Cỡ cáp: 4 mm², 6 mm², 10 mm²",
      // "Màu cáp: Red - Đỏ (Cực dương+) và  Black - Đen (Cực âm-)",
      // "Loại cáp: Cu/XLPO/XLPO",
      // "Dải nhiệt độ hoạt động: Nhiệt độ hoạt động: -40°C to +90°C nhiệt độ tối đa tại dây dẫn +120°C",
      // "Điện áp cực đại: Điện áp cực đại: AC 1,0/1,0 kV – DC 1,5/1,5 kV",
      // "Điện áp làm việc: Điện áp DC tối đa cho phép: 1,8kV",
      // "Điện áp thử: Điện áp thử nghiệm: AC 6,5kV",
      // "Tiêu chuẩn áp dụng: TÜV Rheinland certificate with No. R 50598420, R 60176265, R 50462071 (62930 IEC 131). TÜV Rheinland certificate with No. R 5059841B, R 60176265, R 50345247 (H1Z2Z2-K)",
      // "Chứng nhận	Đầy đủ: CO, CQ",
      // "Tuổi thọ chất lượng cáp:	> 25 năm",
      // "Quy cách: 1km/cuộn nên ít bị hao hụt khi chia cắt cáp theo từng tổ",
      // "Kích thước cuộn:  40x33cm, trọng lượng 95kg",
      // "Nhiệt độ hoạt động: -40°C to +90°C nhiệt độ tối đa tại dây dẫn +120°C",
      // "Điện áp cực đại: AC 1,0/1,0 kV – DC 1,5/1,5 kV",
      // "Điện áp DC tối đa cho phép: 1,8kV",
      // "Điện áp thử nghiệm: AC 6,5kV",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Cỡ cáp: 4 mm², 6 mm², 10 mm²</li>
      <li>Màu cáp: Red - Đỏ (Cực dương+) và  Black - Đen (Cực âm-)</li>
      <li>Loại cáp: Cu/XLPO/XLPO</li>
      <li>Dải nhiệt độ hoạt động: Nhiệt độ hoạt động: -40°C to +90°C nhiệt độ tối đa tại dây dẫn +120°C</li>
      <li>Điện áp cực đại: Điện áp cực đại: AC 1,0/1,0 kV – DC 1,5/1,5 kV</li>
      <li>Điện áp làm việc: Điện áp DC tối đa cho phép: 1,8kV</li>
      <li>Điện áp thử: Điện áp thử nghiệm: AC 6,5kV</li>
      <li>Tiêu chuẩn áp dụng: TÜV Rheinland certificate with No. R 50598420, R 60176265, R 50462071 (62930 IEC 131). TÜV Rheinland certificate with No. R 5059841B, R 60176265, R 50345247 (H1Z2Z2-K)</li>
      <li>Chứng nhận	Đầy đủ: CO, CQ</li>
      <li>Tuổi thọ chất lượng cáp:	> 25 năm</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  // {
  //   id: "helu-4",
  //   categoryId: "electrical",
  //   badge: "MỚI NHẤT",
  //   image: "/images/products/tam-nen.png",
  //   title: "Cáp điện năng lượng mặt trời Helukabel SolarFlex H1Z2Z2-K 4mm²",
  //   description:
  //     "Dây dẫn một lõi, vỏ chống tia UV và chịu nhiệt, dùng cho đường DC hệ quang điện dân dụng và thương mại.",
  //   featureIcon: "check",
  //   featureText: "Chống UV - Chịu nhiệt tốt",
  //   href: "#",
  // },
  // {
  //   id: "lapp-10",
  //   categoryId: "electrical",
  //   brandLogo: "/images/partners/jj-lapp.png",
  //   image: "/images/products/tam-nen.png",
  //   title: "Cáp điện DC năng lượng mặt trời LAPP 10mm²",
  //   description:
  //     "Giải pháp dẫn điện DC công suất lớn, tiếp điểm ổn định, phù hợp chuỗi dài và hệ thống yêu cầu tiết diện lớn.",
  //   featureIcon: "zap",
  //   featureText: "Dẫn điện ổn định - An toàn tối ưu",
  //   href: "#",
  // },
  // {
  //   id: "lapp-6",
  //   categoryId: "electrical",
  //   brandLogo: "/images/partners/jj-lapp.png",
  //   image: "/images/products/tam-nen.png",
  //   title: "Cáp điện DC năng lượng mặt trời LAPP 6.0",
  //   description:
  //     "Cáp DC đa dụng cho lắp đặt gọn, tối ưu chi phí vật tư mà vẫn đảm bảo hiệu suất và tuổi thọ hệ thống.",
  //   featureIcon: "spool",
  //   featureText: "Tiết kiệm - Hiệu quả cao",
  //   href: "#",
  // },
  // {
  //   id: "lapp-4",
  //   categoryId: "electrical",
  //   brandLogo: "/images/partners/jj-lapp.png",
  //   image: "/images/products/tam-nen.png",
  //   title: "Cáp điện DC năng lượng mặt trời LAPP 4.0",
  //   description:
  //     "Cáp DC một lõi Lappkabel cho hệ PV, phù hợp nối tấm pin và biến tần, đạt chỉ tiêu điện áp thử và vận hành ngoài trời.",
  //   featureIcon: "check",
  //   featureText: "Tiêu chuẩn EU - Bền bỉ",
  //   href: "#",
  // },
  // {
  //   id: "helu-61",
  //   categoryId: "frame",
  //   badge: "ĐẶT TRƯỚC",
  //   image: "/images/products/tam-nen.png",
  //   title: "Cáp điện năng lượng mặt trời Helukabel SolarFlex 6mm²",
  //   description:
  //     "Cáp DC chuyên dụng cho hệ thống PV, phù hợp kết nối tấm pin–biến tần, đạt tiêu chuẩn an toàn và chịu môi trường ngoài trời.",
  //   featureIcon: "check",
  //   featureText: "Chất lượng cao - Độ bền vượt trội",
  //   href: "#",
  // },
  // {
  //   id: "helu-41",
  //   categoryId: "frame",
  //   badge: "BEST SELLER",
  //   image: "/images/products/tam-nen.png",
  //   title: "Cáp điện năng lượng mặt trời Helukabel SolarFlex H1Z2Z2-K 4mm²",
  //   description:
  //     "Dây dẫn một lõi, vỏ chống tia UV và chịu nhiệt, dùng cho đường DC hệ quang điện dân dụng và thương mại.",
  //   featureIcon: "check",
  //   featureText: "Chống UV - Chịu nhiệt tốt",
  //   href: "#",
  // },
  // {
  //   id: "lapp-101",
  //   categoryId: "frame",
  //   brandLogo: "/images/partners/jj-lapp.png",
  //   image: "/images/products/tam-nen.png",
  //   title: "Cáp điện DC năng lượng mặt trời LAPP 10mm²",
  //   description:
  //     "Giải pháp dẫn điện DC công suất lớn, tiếp điểm ổn định, phù hợp chuỗi dài và hệ thống yêu cầu tiết diện lớn.",
  //   featureIcon: "zap",
  //   featureText: "Dẫn điện ổn định - An toàn tối ưu",
  //   href: "#",
  // },
];

export type ProductPageDetail = {
  galleryImages: string[];
  summaryBullets: string[];
  detailIntro: string;
  detailSubtitle: string;
  details: string;
  detailCompliance?: string;
  detailBullets: string[];
};

export function buildProductPageDetail(
  product: ProductItem,
): ProductPageDetail {
  // const override = detailOverrides[product.id];
  // if (override) return override;

  return {
    galleryImages: product.images,
    summaryBullets: product.summaryBullets,
    detailIntro: `${product.description} Liên hệ QSEE để được báo giá và hỗ trợ kỹ thuật.`,
    detailSubtitle: product.title,
    detailBullets: [
      `Sản phẩm: ${product.title}`,
      `Đặc điểm: ${product.featureText}`,
      "Vui lòng liên hệ để cập nhật tồn kho và thời gian giao hàng.",
    ],
    details: product.details,
  };
}

const detailOverrides: Record<string, ProductPageDetail> = {
  "cap-dien-lapp-6": {
    galleryImages: [
      "/images/products/tam-nen.png",
      "/images/products/tam-nen.png",
    ],
    summaryBullets: [
      "Quy cách: 1km/cuộn nên ít bị hao hụt khi chia cắt cáp theo từng tổ",
      "Kích thước cuộn: 40×33cm, trọng lượng 60kg",
      "Nhiệt độ hoạt động: -40°C đến +90°C; nhiệt độ tối đa tại dây dẫn +120°C",
      "Điện áp cực đại: AC 1,0/1,0 kV – DC 1,5/1,5 kV",
      "Điện áp DC tối đa cho phép: 1,8kV",
      "Điện áp thử nghiệm: AC 6,5kV",
    ],
    detailIntro:
      "Cáp điện một lõi được sử dụng để kết nối các tấm pin mặt trời với nhau tạo thành các chuỗi pin và kết nối các chuỗi pin với biến tần. Cáp điện một lõi được sản xuất bởi hãng Lappkabel của Đức.",
    detailSubtitle: "Cáp điện năng lượng mặt trời Lappkabel Ölflex XLR-E 4mm²",
    detailCompliance:
      "Sản phẩm tuân thủ các yêu cầu của chỉ thị thiết bị điện áp thấp 2014/35/EU.",
    detailBullets: [
      "Mô tả sản phẩm: UNITRONIC® BUS EIB 2 × 2 × 0,8",
      "Xuất xứ: Đức",
      "Quy cách: Dây 4.0mm²",
      "Sẵn hàng kho HCM",
    ],
    details: "",
  },
};
