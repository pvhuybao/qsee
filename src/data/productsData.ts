import type { ProductCategoryTab, ProductItem } from "@/types/product";

export const productCategories: ProductCategoryTab[] = [
  { id: "all", label: "TẤT CẢ SẢN PHẨM", icon: "grid" },
  { id: "frame", label: "PIN LƯU TRỮ", icon: "frame" },
  { id: "panel", label: "TẤM PIN", icon: "panel" },
  { id: "inverter", label: "BIẾN TẦN", icon: "inverter" },
  { id: "electrical", label: "VẬT TƯ THIẾT BỊ ĐIỆN", icon: "cable" },
];

export const products: ProductItem[] = [
  {
    id: "cap-dien-dc-lapp",
    categoryId: "electrical",
    badge: "",
    title: "Cáp điện DC - ÖLFLEX® SOLAR H1 BUR",
    description:
      "ÖLFLEX® SOLAR H1 BUR là dòng cáp điện một chiều (DC) chuyên dụng, cao cấp được sản xuất bởi tập đoàn Lapp Kabel (Đức), thiết kế đặc biệt để kết nối các tấm pin năng lượng mặt trời",
    image: "/data/cap-dien-1/cap-dien-2.png",
    images: [
      "/data/cap-dien-1/cap-dien-1.png",
      "/data/cap-dien-1/cap-dien-2.png",
    ],
    summaryBullets: [
      "Hãng: Lapp",
      "Tên gọi: Cáp điện DC - ÖLFLEX® SOLAR H1 BUR",
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
      <li>Chứng nhận: Đầy đủ CO, CQ</li>
      <li>Tuổi thọ chất lượng cáp: > 25 năm</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "cap-dien-dc-leader",
    categoryId: "electrical",
    badge: "",
    title: "Cáp điện DC - 1.5KV DC SOLAR CABLE H1Z2Z2-K",
    description:
      "Cáp điện DC H1Z2Z2-K (1.5kV DC Solar Cable) là loại dây cáp chuyên dụng cao cấp, đạt tiêu chuẩn châu Âu EN 50618, được thiết kế để kết nối các tấm pin quang điện trong hệ thống điện mặt trời 0.5.4. Cáp chịu được điện áp cao (1.5kV DC), kháng tia UV, chịu nhiệt tốt (\(>90^{\circ }\text{C}\)) và độ bền trên 25 năm, lý tưởng cho cả lắp đặt ngoài trời và trong nhà 0.5.3, 0.5.7",
    image: "/data/cap-dien-2/cap-dien-1.png",
    images: ["/data/cap-dien-2/cap-dien-1.png"],
    summaryBullets: [
      "Hãng: Leader",
      "Tên gọi: Cáp điện DC - 1.5KV DC SOLAR CABLE H1Z2Z2-K",
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
      <li>Tiêu chuẩn áp dụng: IEC62930/EN50618, TÜV Rheinland certificate</li>
      <li>Chứng nhận: Đầy đủ CO, CQ</li>
      <li>Tuổi thọ chất lượng cáp: > 25 năm</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "tam-pin-tcl-615",
    categoryId: "panel",
    badge: "",
    title: "Tấm pin năng lượng mặt trời TCL 615W 2 mặt kính",
    description:
      "Tấm pin năng lượng mặt trời TCL 615W là sản phẩm cao cấp đến từ TCL Solar – thương hiệu công nghệ toàn cầu với nền tảng sản xuất tiên tiến và tiêu chuẩn chất lượng quốc tế",
    image: "/data/tam-pin-tcl/tam-pin-tcl-1.png",
    images: ["/data/tam-pin-tcl/tam-pin-tcl-1.png"],
    summaryBullets: [
      "Hãng: TCL",
      "Tên gọi: Tấm pin năng lượng mặt trời TCL 615W 2 mặt kính",
      "Loại: N-type TOPCon",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Tấm pin năng lượng mặt trời TCL 615W là sản phẩm cao cấp đến từ TCL Solar – thương hiệu công nghệ toàn cầu với nền tảng sản xuất tiên tiến và tiêu chuẩn chất lượng quốc tế. Ứng dụng công nghệ Shingled Cell tiên tiến, sản phẩm mang lại hiệu suất vượt trội, thiết kế tinh tế và tính thẩm mỹ cao. Đây là lựa chọn tối ưu cho các công trình dân dụng, thương mại và dự án điện mặt trời quy mô lớn, nơi vừa cần hiệu năng cao vừa cần vẻ đẹp đồng bộ, sang trọng.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "bien-tan-goodwe-es-uniq-12kw",
    categoryId: "inverter",
    badge: "",
    title:
      "Hybrid Inverter GoodWe ES Uniq Series 12kW 1 Pha – Phiên bản có màn hình",
    description:
      "GoodWe Hybrid Inverter ES UniQ có màn hình công suất 12kW, được thiết kế chuyên biệt cho các hệ thống điện mặt trời dân dụng. Dòng sản phẩm này tương thích linh hoạt với cả hệ thống hòa lưới và off-grid (độc lập), đồng thời hỗ trợ kết nối song song tối đa 6 inverter để mở rộng hệ thống dễ dàng. Với màn hình cảm ứng LCD thân thiện, ES Uniq giúp người dùng vận hành và giám sát đơn giản, đồng thời có thể kết hợp với nhiều dòng pin lưu trữ, bao gồm cả Lynx A và Lynx U của GoodWe.",
    image: "/data/bien-tan-goodwe-es-12k/bien-tan-goodwe-es-12k-1.png",
    images: ["/data/bien-tan-goodwe-es-12k/bien-tan-goodwe-es-12k-1.png"],
    summaryBullets: [
      "Hãng: GOODWE",
      "Tên gọi: Hybrid Inverter GoodWe ES Uniq Series 12kW 1 Pha – Phiên bản có màn hình",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>GoodWe Hybrid Inverter ES UniQ có màn hình công suất 12kW, được thiết kế chuyên biệt cho các hệ thống điện mặt trời dân dụng. Dòng sản phẩm này tương thích linh hoạt với cả hệ thống hòa lưới và off-grid (độc lập), đồng thời hỗ trợ kết nối song song tối đa 6 inverter để mở rộng hệ thống dễ dàng. Với màn hình cảm ứng LCD thân thiện, ES Uniq giúp người dùng vận hành và giám sát đơn giản, đồng thời có thể kết hợp với nhiều dòng pin lưu trữ, bao gồm cả Lynx A và Lynx U của GoodWe.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "tam-pin-astronergy-550",
    categoryId: "panel",
    badge: "",
    title: "Tấm pin năng lượng mặt trời Astronergy 550W",
    description:
      "Tấm pin mặt trời Astronergy 550W được lắp ráp từ các tấm cell kích thước 182mm kèm công nghệ cell SuperPERC4.0, sản phẩm cung cấp công suất lên tới 550W và hiệu suất mô-đun là 21.3%. Công nghệ Multi-Busbar (MBB) và công nghệ Non-destructive cutting giúp cải thiện khả năng chịu tải của tấm pin, đảm bảo độ tin cậy cao.",
    image: "/data/tam-pin-astronergy/tam-pin-astronergy-1.png",
    images: ["/data/tam-pin-astronergy/tam-pin-astronergy-1.png"],
    summaryBullets: [
      "Hãng: Astronergy Solar",
      "Tên gọi: Tấm pin năng lượng mặt trời Astronergy 550W",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Tấm pin mặt trời Astronergy 550W được lắp ráp từ các tấm cell kích thước 182mm kèm công nghệ cell SuperPERC4.0, sản phẩm cung cấp công suất lên tới 550W và hiệu suất mô-đun là 21.3%. Công nghệ Multi-Busbar (MBB) và công nghệ Non-destructive cutting giúp cải thiện khả năng chịu tải của tấm pin, đảm bảo độ tin cậy cao.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "pin-luu-tru-lithium-valley-w16-5a",
    categoryId: "frame",
    badge: "",
    title: "Pin Lưu Trữ Điện Áp Thấp Lithium Valley W16-5A",
    description:
      "W16-5A là pin lưu trữ điện áp thấp dùng trong gia đình và các công trình dân dụng. Hệ thống Quản lý Pin (BMS) thông minh có thể theo dõi và tối ưu hóa hiệu suất pin theo thời gian thực, kéo dài tuổi thọ và cho phép điều khiển từ xa qua ứng dụng di động, giúp bạn dễ dàng theo dõi tình trạng năng lượng của ngôi nhà. Sản phẩm dễ dàng lắp đặt và thiết kế treo tường giúp tiết kiệm không gian. Trong trường hợp khẩn cấp, sản phẩm có thể hoạt động như một bộ sạc dự phòng để cung cấp năng lượng cho các thiết bị gia dụng, thích ứng với nhiều tình huống khác nhau.",
    image:
      "/data/pin-luu-tru-lithium-valley-w16-5a/pin-luu-tru-lithium-valley-w16-5a-1.png",
    images: [
      "/data/pin-luu-tru-lithium-valley-w16-5a/pin-luu-tru-lithium-valley-w16-5a-1.png",
    ],
    summaryBullets: [
      "Hãng: Lithium Valley",
      "Tên gọi: Pin Lưu Trữ Điện Áp Thấp Lithium Valley W16-5A",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>W16-5A là pin lưu trữ điện áp thấp dùng trong gia đình và các công trình dân dụng. Hệ thống Quản lý Pin (BMS) thông minh có thể theo dõi và tối ưu hóa hiệu suất pin theo thời gian thực, kéo dài tuổi thọ và cho phép điều khiển từ xa qua ứng dụng di động, giúp bạn dễ dàng theo dõi tình trạng năng lượng của ngôi nhà. Sản phẩm dễ dàng lắp đặt và thiết kế treo tường giúp tiết kiệm không gian. Trong trường hợp khẩn cấp, sản phẩm có thể hoạt động như một bộ sạc dự phòng để cung cấp năng lượng cho các thiết bị gia dụng, thích ứng với nhiều tình huống khác nhau.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "tam-pin-canadian-550",
    categoryId: "panel",
    badge: "",
    title: "Tấm pin năng lượng mặt trời Canadian 550W",
    description:
      "Tấm pin mono HiKu6 Canadian Solar 550W là dòng pin đơn tinh thể được sản xuất theo công nghệ làm mát Ku Modules, dựa trên nền tảng công nghệ Low Internal Current (LIC) Modules. Hiệu suất tấm pin đạt 21.5 %, giảm chi phí sản xuất điện LCOE đến 4.5%, giảm giá thành hệ thống lên đến 5.6%. Công nghệ giảm thiểu LID / LeTID toàn diện, mức độ suy giảm thấp hơn tới 50%. Tấm pin được trang bị nhiều công nghệ tối tân như: Half-cut cells, PERC, Multi Busbars…. giúp hệ thống điện mặt trời đạt hiệu suất và sản lượng cao, giảm mức độ ảnh hưởng của đổ bóng.",
    image: "/data/tam-pin-astronergy/tam-pin-astronergy-1.png",
    images: ["/data/tam-pin-astronergy/tam-pin-astronergy-1.png"],
    summaryBullets: [
      "Hãng: Canadian Solar",
      "Tên gọi: Tấm pin năng lượng mặt trời Canadian 550W",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Tấm pin mono HiKu6 Canadian Solar 550W là dòng pin đơn tinh thể được sản xuất theo công nghệ làm mát Ku Modules, dựa trên nền tảng công nghệ Low Internal Current (LIC) Modules. Hiệu suất tấm pin đạt 21.5 %, giảm chi phí sản xuất điện LCOE đến 4.5%, giảm giá thành hệ thống lên đến 5.6%. Công nghệ giảm thiểu LID / LeTID toàn diện, mức độ suy giảm thấp hơn tới 50%. Tấm pin được trang bị nhiều công nghệ tối tân như: Half-cut cells, PERC, Multi Busbars…. giúp hệ thống điện mặt trời đạt hiệu suất và sản lượng cao, giảm mức độ ảnh hưởng của đổ bóng.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "pin-luu-tru-goodwe-14.3kWh",
    categoryId: "frame",
    badge: "",
    title: "Pin lưu trữ điện áp thấp GoodWe BAT Series 14.3kWh",
    description:
      "Pin lưu trữ điện áp thấp GoodWe công suất 14.3kWh được thiết kế chuyên biệt dành cho các hệ thống dân dụng. Sản phẩm cho phép lưu trữ điện năng để sử dụng trong giờ cao điểm hoặc khi mất điện, giúp tăng khả năng tự chủ năng lượng và tối ưu hiệu quả đầu tư lâu dài. Đồng thời, pin tương thích hoàn hảo với các dòng Hybrid Inverter điện áp thấp của GoodWe, đảm bảo tích hợp liền mạch, vận hành an toàn và hiệu suất tối đa cho các hệ thống điện mặt trời hộ gia đình.",
    image: "/data/pin-luu-tru-goodwe/pin-luu-tru-goodwe-1.png",
    images: ["/data/pin-luu-tru-goodwe/pin-luu-tru-goodwe-1.png"],
    summaryBullets: [
      "Hãng: Goodwe",
      "Tên gọi: Pin lưu trữ điện áp thấp GoodWe BAT Series 14.3kWh",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Pin lưu trữ điện áp thấp GoodWe công suất 14.3kWh được thiết kế chuyên biệt dành cho các hệ thống dân dụng. Sản phẩm cho phép lưu trữ điện năng để sử dụng trong giờ cao điểm hoặc khi mất điện, giúp tăng khả năng tự chủ năng lượng và tối ưu hiệu quả đầu tư lâu dài. Đồng thời, pin tương thích hoàn hảo với các dòng Hybrid Inverter điện áp thấp của GoodWe, đảm bảo tích hợp liền mạch, vận hành an toàn và hiệu suất tối đa cho các hệ thống điện mặt trời hộ gia đình.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "pin-luu-tru-pylontech-16kWh",
    categoryId: "frame",
    badge: "",
    title: "Pin Lưu Trữ Áp Thấp Pylontech Fidus Plus 16kWh",
    description:
      "Pylontech Fidus Plus 16kWh là dòng pin lưu trữ áp thấp, hiệu suất cao dành cho gia đình và dự án nhỏ, nổi bật với khả năng dập cháy tự động trong 60 giây (test thực tế trong 10 giây) nhờ tích hợp công nghệ dập lửa (Aerosol). Sản phẩm được thiết kế với tiêu chuẩn chống ăn mòn C5-M, kết hợp BMS thông minh – công nghệ lõi đã làm nên uy tín toàn cầu của Pylontech, cho phép xả sâu đến 100% (100% DoD), bảo vệ an toàn đa lớp và bảo hành lên đến 10 năm. Fidus Plus 16kWh tương thích với nhiều dòng inverter hybrid phổ biến, sở hữu thiết kế treo tường (wall-mounted) hiện đại, mang đến giải pháp lưu trữ ổn định – an toàn – tối ưu hiệu quả vận hành cho hệ thống điện mặt trời dân dụng và thương mại quy mô nhỏ.",
    image: "/data/pin-luu-tru-pylontech/pin-luu-tru-pylontech-1.png",
    images: ["/data/pin-luu-tru-pylontech/pin-luu-tru-pylontech-1.png"],
    summaryBullets: [
      "Hãng: Pylontech",
      "Tên gọi: Pin Lưu Trữ Áp Thấp Pylontech Fidus Plus 16kWh",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Pylontech Fidus Plus 16kWh là dòng pin lưu trữ áp thấp, hiệu suất cao dành cho gia đình và dự án nhỏ, nổi bật với khả năng dập cháy tự động trong 60 giây (test thực tế trong 10 giây) nhờ tích hợp công nghệ dập lửa (Aerosol). Sản phẩm được thiết kế với tiêu chuẩn chống ăn mòn C5-M, kết hợp BMS thông minh – công nghệ lõi đã làm nên uy tín toàn cầu của Pylontech, cho phép xả sâu đến 100% (100% DoD), bảo vệ an toàn đa lớp và bảo hành lên đến 10 năm. Fidus Plus 16kWh tương thích với nhiều dòng inverter hybrid phổ biến, sở hữu thiết kế treo tường (wall-mounted) hiện đại, mang đến giải pháp lưu trữ ổn định – an toàn – tối ưu hiệu quả vận hành cho hệ thống điện mặt trời dân dụng và thương mại quy mô nhỏ.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "pin-luu-tru-lithium-valley-w15-5a",
    categoryId: "frame",
    badge: "",
    title: "Pin lưu trữ điện Lithium Valley W15-5A (14.336kWh)",
    description:
      "Lithium Valley W15-5A là dòng pin lưu trữ Lithium Iron Phosphate (LFP) với thiết kế nhỏ gọn, an toàn và có tuổi thọ cao. Sản phẩm phù hợp cho hệ thống điện dân dụng, thương mại, công nghiệp, điện mặt trời và độc lập.",
    image:
      "/data/pin-luu-tru-lithium-valley-w15-5a/pin-luu-tru-lithium-valley-w15-5a-1.png",
    images: [
      "/data/pin-luu-tru-lithium-valley-w15-5a/pin-luu-tru-lithium-valley-w15-5a-1.png",
    ],
    summaryBullets: [
      "Hãng: Lithium Valley",
      "Tên gọi: Pin lưu trữ điện Lithium Valley W15-5A (14.336kWh)",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Lithium Valley W15-5A là dòng pin lưu trữ Lithium Iron Phosphate (LFP) với thiết kế nhỏ gọn, an toàn và có tuổi thọ cao. Sản phẩm phù hợp cho hệ thống điện dân dụng, thương mại, công nghiệp, điện mặt trời và độc lập.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "bien-tan-sungrow-mg5rl",
    categoryId: "inverter",
    badge: "",
    title: "Inverter Hybrid Sungrow MG5RL 1 Pha",
    description:
      "Sungrow MG5RL là dòng inverter hybrid 1 pha công suất 5kW, được thiết kế tối ưu cho hệ thống điện mặt trời dân dụng có nhu cầu backup tải và lưu trữ điện. Sản phẩm hỗ trợ pin lithium, chuyển mạch dự phòng siêu nhanh <4ms, tích hợp sẵn bypass switch 40A, dễ dàng mở rộng khi cần thiết.",
    image: "/data/bien-tan-mg5rl/bien-tan-mg5rl-2.png",
    images: ["/data/bien-tan-mg5rl/bien-tan-mg5rl-2.png"],
    summaryBullets: [
      "Hãng: SUNGROW",
      "Tên gọi: Inverter Hybrid Sungrow MG5RL 1 Pha",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Sungrow MG5RL là dòng inverter hybrid 1 pha công suất 5kW, được thiết kế tối ưu cho hệ thống điện mặt trời dân dụng có nhu cầu backup tải và lưu trữ điện. Sản phẩm hỗ trợ pin lithium, chuyển mạch dự phòng siêu nhanh <4ms, tích hợp sẵn bypass switch 40A, dễ dàng mở rộng khi cần thiết.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "bien-tan-sungrow-mg6rl",
    categoryId: "inverter",
    badge: "",
    title: "Inverter Hybrid Sungrow MG6RL 1 Pha",
    description:
      "Sungrow MG6RL là dòng inverter hybrid 1 pha công suất 6kW, được thiết kế tối ưu cho hệ thống điện mặt trời dân dụng có nhu cầu backup tải và lưu trữ điện. Sản phẩm hỗ trợ pin lithium, chuyển mạch dự phòng siêu nhanh <4ms, tích hợp sẵn bypass switch 40A, dễ dàng mở rộng khi cần thiết.",
    image: "/data/bien-tan-mg6rl/bien-tan-mg6rl-1.png",
    images: ["/data/bien-tan-mg6rl/bien-tan-mg6rl-1.png"],
    summaryBullets: [
      "Hãng: SUNGROW",
      "Tên gọi: Inverter Hybrid Sungrow MG6RL 1 Pha",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Sungrow MG6RL là dòng inverter hybrid 1 pha công suất 6kW, được thiết kế tối ưu cho hệ thống điện mặt trời dân dụng có nhu cầu backup tải và lưu trữ điện. Sản phẩm hỗ trợ pin lithium, chuyển mạch dự phòng siêu nhanh <4ms, tích hợp sẵn bypass switch 40A, dễ dàng mở rộng khi cần thiết.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "bien-tan-goodwe-et-lv",
    categoryId: "inverter",
    badge: "",
    title: "Inverter Hybrid GoodWe ET LV Series 6-20kW 3 Pha",
    description:
      "Hybrid Inverter GoodWe ET LV Series (công suất 6-20kW) là giải pháp lý tưởng cho các hệ thống điện mặt trời dân dụng. Sản phẩm tích hợp liền mạch với pin điện áp thấp (48V) giúp tối ưu chi phí và tăng tính an toàn khi vận hành. Với thiết kế linh hoạt, GoodWe ET LV Series tương thích với nhiều loại pin lưu trữ khác nhau, bao gồm Lynx A G3, Lynx U G3 và BAT 14kWh của GoodWe. Điều này mang đến sự tiện lợi và dễ dàng mở rộng cho người dùng đang tìm kiếm giải pháp lưu trữ năng lượng đáng tin cậy và hiệu quả.",
    image: "/data/bien-tan-goodwe-et/bien-tan-goodwe-et-1.png",
    images: ["/data/bien-tan-goodwe-et/bien-tan-goodwe-et-1.png"],
    summaryBullets: [
      "Hãng: GOODWE",
      "Tên gọi: Inverter Hybrid GoodWe ET LV Series 6-20kW 3 Pha",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>Hybrid Inverter GoodWe ET LV Series (công suất 6-20kW) là giải pháp lý tưởng cho các hệ thống điện mặt trời dân dụng. Sản phẩm tích hợp liền mạch với pin điện áp thấp (48V) giúp tối ưu chi phí và tăng tính an toàn khi vận hành. Với thiết kế linh hoạt, GoodWe ET LV Series tương thích với nhiều loại pin lưu trữ khác nhau, bao gồm Lynx A G3, Lynx U G3 và BAT 14kWh của GoodWe. Điều này mang đến sự tiện lợi và dễ dàng mở rộng cho người dùng đang tìm kiếm giải pháp lưu trữ năng lượng đáng tin cậy và hiệu quả.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "bien-tan-8k-goodwe-es-uniq",
    categoryId: "inverter",
    badge: "",
    title: "Inverter 8kW GoodWe ES Uniq 1 Pha Có Màn Hình",
    description:
      "GoodWe Hybrid Inverter ES UniQ có màn hình công suất 8kW, được thiết kế chuyên biệt cho các hệ thống điện mặt trời dân dụng. Dòng sản phẩm này tương thích linh hoạt với cả hệ thống hòa lưới và off-grid (độc lập), đồng thời hỗ trợ kết nối song song tối đa 6 inverter để mở rộng hệ thống dễ dàng. Với màn hình cảm ứng LCD thân thiện, ES Uniq giúp người dùng vận hành và giám sát đơn giản, đồng thời có thể kết hợp với nhiều dòng pin lưu trữ, bao gồm cả Lynx A và Lynx U của GoodWe.",
    image: "/data/bien-tan-goodwe-es-8k/bien-tan-goodwe-es-8k-1.png",
    images: ["/data/bien-tan-goodwe-es-8k/bien-tan-goodwe-es-8k-1.png"],
    summaryBullets: [
      "Hãng: GOODWE",
      "Tên gọi: Inverter 8kW GoodWe ES Uniq 1 Pha Có Màn Hình",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>GoodWe Hybrid Inverter ES UniQ có màn hình công suất 8kW, được thiết kế chuyên biệt cho các hệ thống điện mặt trời dân dụng. Dòng sản phẩm này tương thích linh hoạt với cả hệ thống hòa lưới và off-grid (độc lập), đồng thời hỗ trợ kết nối song song tối đa 6 inverter để mở rộng hệ thống dễ dàng. Với màn hình cảm ứng LCD thân thiện, ES Uniq giúp người dùng vận hành và giám sát đơn giản, đồng thời có thể kết hợp với nhiều dòng pin lưu trữ, bao gồm cả Lynx A và Lynx U của GoodWe.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
  {
    id: "bien-tan-goodwe-es-uniq-10kw",
    categoryId: "inverter",
    badge: "",
    title: "Hybrid Inverter GoodWe ES Uniq Series 10kW 1 Pha – Có Màn Hình",
    description:
      "GoodWe Hybrid Inverter ES UniQ có màn hình công suất 10kW, được thiết kế chuyên biệt cho các hệ thống điện mặt trời dân dụng. Dòng sản phẩm này tương thích linh hoạt với cả hệ thống hòa lưới và off-grid (độc lập), đồng thời hỗ trợ kết nối song song tối đa 6 inverter để mở rộng hệ thống dễ dàng. Với màn hình cảm ứng LCD thân thiện, ES Uniq giúp người dùng vận hành và giám sát đơn giản, đồng thời có thể kết hợp với nhiều dòng pin lưu trữ, bao gồm cả Lynx A và Lynx U của GoodWe.",
    image: "/data/bien-tan-goodwe-es-10k/bien-tan-goodwe-es-10k-1.png",
    images: ["/data/bien-tan-goodwe-es-10k/bien-tan-goodwe-es-10k-1.png"],
    summaryBullets: [
      "Hãng: GOODWE",
      "Tên gọi: Hybrid Inverter GoodWe ES Uniq Series 10kW 1 Pha – Có Màn Hình",
    ],
    details: `
    <ul class="list-disc pl-4 space-y-1">
      <li>GoodWe Hybrid Inverter ES UniQ có màn hình công suất 10kW, được thiết kế chuyên biệt cho các hệ thống điện mặt trời dân dụng. Dòng sản phẩm này tương thích linh hoạt với cả hệ thống hòa lưới và off-grid (độc lập), đồng thời hỗ trợ kết nối song song tối đa 6 inverter để mở rộng hệ thống dễ dàng. Với màn hình cảm ứng LCD thân thiện, ES Uniq giúp người dùng vận hành và giám sát đơn giản, đồng thời có thể kết hợp với nhiều dòng pin lưu trữ, bao gồm cả Lynx A và Lynx U của GoodWe.</li>
    </ul>
    `,
    featureIcon: "check",
    featureText: "Chất lượng cao - Độ bền vượt trội",
    href: "#",
  },
];
