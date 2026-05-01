import { Blog } from "@/types/blog";

const solarCompanyData: Blog[] = [
  {
    id: "le-phan-gia",
    title:
      "Hệ Thống Điện Mặt Trời Áp Mái Nhà Máy Lê Phan Gia Công Suất 1336 kWp",
    company: "Công Ty TNHH Sản Xuất Lê Phan Gia",
    paragraph:
      "Địa Chỉ: Lô E15 & E16, Đường N4 & D1, Khu Công Nghiệp Nam Tân Uyên Mở Rộng, Phường Hội Nghĩa, Thị Xã Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    thumbnail: "/data/le-phan-gia/le-phan-gia-1.jpg",
    images: [
      "/data/le-phan-gia/le-phan-gia-1.jpg",
      "/data/le-phan-gia/le-phan-gia-2.jpg",
      "/data/le-phan-gia/le-phan-gia-3.jpg",
      "/data/le-phan-gia/le-phan-gia-4.jpg",
      "/data/le-phan-gia/le-phan-gia-5.jpg",
      "/data/le-phan-gia/le-phan-gia-6.jpg",
    ],
    capacity: 1336,
    type: "company",
    author: {
      name: "QSEE",
      image: "/images/blog/author-02.png",
      designation: "Bảo dưỡng công nghiệp",
    },
    publishDate: "2024",
  },
  {
    id: "soi-long-van",
    title:
      "Hệ Thống Điện Mặt Trời Áp Mái Nhà Máy Sợi Long Vân Công Suất 2700 kWp",
    company: "Công Ty TNHH Sợi Long Vân",
    paragraph:
      "Địa chỉ: Khu Công Nghiệp Châu Sơn, Phường Châu Sơn, Thành Phố Phủ Lý, Tỉnh Hà Nam, Việt Nam",
    thumbnail: "/data/soi-long-van/soi-long-van-1.jpg",
    images: [
      "/data/soi-long-van/soi-long-van-1.jpg",
      "/data/soi-long-van/soi-long-van-2.jpg",
      "/data/soi-long-van/soi-long-van-3.jpg",
      "/data/soi-long-van/soi-long-van-4.jpg",
      "/data/soi-long-van/soi-long-van-5.jpg",
    ],
    capacity: 2700,
    type: "company",
    author: {
      name: "QSEE",
      image: "/images/blog/author-03.png",
      designation: "Cơ - điện logistics",
    },
    publishDate: "2023",
  },
  {
    id: "nhua-pha-le",
    title: "Lắp đặt Hệ thống điện mặt trời áp mái Nhà Máy Nhựa - 1,557.36 kWp",
    company: "CÔNG TY CP SẢN XUẤT VÀ CÔNG NGHỆ NHỰA PHA LÊ",
    paragraph:
      "Địa Chỉ: Lô Đất CN4.3 KCN MP Đình Vũ, Khu Kinh tế Đình Vũ-Cát Hải - Phường Đông Hải 2 - Quận Hải An - TP. Hải Phòng",
    thumbnail: "/data/nhua-pha-le/nhua-pha-le-1.jpg",
    images: [
      "/data/nhua-pha-le/nhua-pha-le-1.jpg",
      "/data/nhua-pha-le/nhua-pha-le-2.jpg",
      "/data/nhua-pha-le/nhua-pha-le-3.jpg",
      "/data/nhua-pha-le/nhua-pha-le-4.jpg",
      "/data/nhua-pha-le/nhua-pha-le-5.jpg",
      "/data/nhua-pha-le/nhua-pha-le-6.jpg",
    ],
    capacity: 1557.36,
    type: "company",
    author: {
      name: "QSEE",
      image: "/images/blog/author-03.png",
      designation: "Cơ - điện logistics",
    },
    publishDate: "2023",
  },
  {
    id: "global-running",
    title: "Hệ Thống Điện Mặt Trời Áp Mái Global Running 2,137.59 kWp",
    company: "CÔNG TY TNHH GLOBAL RUNNING",
    paragraph:
      "Địa Chỉ: Cụm Công nghiệp Gia Thuận 1, Xã Gia Thuận, Huyện Gò Công Đông, Tỉnh Tiền Giang, Việt Nam.",
    thumbnail: "/data/global-running/global-running-1.jpg",
    images: [
      "/data/global-running/global-running-1.jpg",
      "/data/global-running/global-running-2.jpg",
      "/data/global-running/global-running-3.jpg",
      "/data/global-running/global-running-4.jpg",
      "/data/global-running/global-running-5.jpg",
      "/data/global-running/global-running-6.jpg",
    ],
    capacity: 2137.59,
    type: "company",
    author: {
      name: "QSEE",
      image: "/images/blog/author-01.png",
      designation: "Dự án M&E",
    },
    publishDate: "2024",
  },
];

const solarFamilyData: Blog[] = [
  {
    id: "vuon-thu-gian-nha-be",
    title:
      "Vườn Thư Giãn - Công suất 11.9kWp - 3 pha và lưu trữ 14.3 kWh tại Nhà Bè",
    company: "Chủ sỡ hữu: Bác Hải",
    paragraph: "Địa chỉ: Nhà Bè, TP.HCM",
    thumbnail: "/data/nha-be/nha-be-1.jpg",
    images: [
      "/data/nha-be/nha-be-1.jpg",
      "/data/nha-be/nha-be-2.jpg",
      "/data/nha-be/nha-be-3.jpg",
      "/data/nha-be/nha-be-4.jpg",
      "/data/nha-be/nha-be-5.jpg",
    ],
    capacity: 11.9,
    type: "personal",
    author: {
      name: "QSEE",
      image: "/images/blog/author-01.png",
      designation: "Dự án M&E",
    },
    publishDate: "2024",
  },
  {
    id: "ho-gia-dinh-vung-tau",
    title:
      "Hộ Gia đình Vũng Tàu - Công suất 14.28 kWp - 3 pha, kèm hệ BESS lưu trữ 10.24 kWh",
    company: "Chủ sỡ hữu: Mr. Bùi",
    paragraph: "Địa chỉ: Vũng Tàu, TP.HCM",
    thumbnail: "/data/vung-tau/vung-tau-1.jpg",
    images: [
      "/data/vung-tau/vung-tau-1.jpg",
      "/data/vung-tau/vung-tau-2.jpg",
      "/data/vung-tau/vung-tau-3.jpg",
    ],
    capacity: 14.28,
    type: "personal",
    author: {
      name: "QSEE",
      image: "/images/blog/author-02.png",
      designation: "Bảo dưỡng công nghiệp",
    },
    publishDate: "2024",
  },
  {
    id: "ho-gia-dinh-huynh-tinh-cua",
    title: "Hộ Gia đình Huỳnh Tịnh Của - 4.96 kWp, pin lưu trữ 5.12 kWh",
    company: "Hộ gia đình",
    paragraph: "Địa chỉ: Huỳnh Tịnh Của, TP.HCM",
    thumbnail: "/data/huynh-tinh-cua/huynh-tinh-cua-3.jpg",
    images: [
      "/data/huynh-tinh-cua/huynh-tinh-cua-3.jpg",
      "/data/huynh-tinh-cua/huynh-tinh-cua-4.jpg",
      "/data/huynh-tinh-cua/huynh-tinh-cua-5.jpg",
      "/data/huynh-tinh-cua/huynh-tinh-cua-1.jpg",
      "/data/huynh-tinh-cua/huynh-tinh-cua-2.jpg",
    ],
    capacity: 4.96,
    type: "personal",
    author: {
      name: "QSEE",
      image: "/images/blog/author-03.png",
      designation: "Cơ - điện logistics",
    },
    publishDate: "2023",
  },
  {
    id: "ho-gia-dinh-thong-nhat",
    title: "Hộ Gia đình Thống Nhất - 7.5 kWp, pin lưu trữ 16 kWh",
    company: "Chủ sỡ hữu: Anh Lưu",
    paragraph: "Địa chỉ: Thống Nhất, Tân Phú, TP.HCM",
    thumbnail: "/data/thong-nhat/thong-nhat-1.jpg",
    images: [
      "/data/thong-nhat/thong-nhat-1.jpg",
      "/data/thong-nhat/thong-nhat-2.jpg",
      "/data/thong-nhat/thong-nhat-3.jpg",
      "/data/thong-nhat/thong-nhat-4.jpg",
      "/data/thong-nhat/thong-nhat-5.jpg",
    ],
    capacity: 7.5,
    type: "personal",
    author: {
      name: "QSEE",
      image: "/images/blog/author-03.png",
      designation: "Cơ - điện logistics",
    },
    publishDate: "2023",
  },
];

const solarFeaturedData: Blog[] = [
  // {
  //   id: "global-running",
  //   title: "Hệ Thống Điện Mặt Trời Áp Mái Global Running 2,137.59 kWp",
  //   company: "CÔNG TY TNHH GLOBAL RUNNING",
  //   paragraph:
  //     "Địa Chỉ: Cụm Công nghiệp Gia Thuận 1, Xã Gia Thuận, Huyện Gò Công Đông, Tỉnh Tiền Giang, Việt Nam.",
  //   thumbnail:
  //     "https://qsee.com.vn/_assets/media/87e1fad419b140da8c372f9a0a41d786.png",
  //   images: [
  //     "https://qsee.com.vn/_assets/media/87e1fad419b140da8c372f9a0a41d786.png",
  //     "https://qsee.com.vn/_assets/media/e0fb33815040c321c8a7716e48c3e64e.png",
  //   ],
  //   capacity: 2137.59,
  //   author: {
  //     name: "QSEE",
  //     image: "/images/blog/author-01.png",
  //     designation: "Dự án M&E",
  //   },
  //   publishDate: "2024",
  // },
  // {
  //   id: "totalenergies-lpg",
  //   title: "Lắp đặt Hệ thống điện mặt trời áp mái TTE Lubricant",
  //   company: "CHI NHÁNH CÔNG TY TNHH TOTALENERGIES LPG VIỆT NAM TẠI ĐỒNG NAI",
  //   paragraph:
  //     "Địa Chỉ: KCN Gò Dầu, Xã Phước Thái, Huyện Long Thành, tỉnh Đồng Nai",
  //   thumbnail:
  //     "https://qsee.com.vn/_assets/media/2b3fdb952cdf924082989ce322167b5d.png",
  //   images: [
  //     "https://qsee.com.vn/_assets/media/c87eab6c20f3c17cd79f4cbfdabff75c.png",
  //     "https://qsee.com.vn/_assets/media/2b3fdb952cdf924082989ce322167b5d.png",
  //   ],
  //   capacity: 1557.36,
  //   author: {
  //     name: "QSEE",
  //     image: "/images/blog/author-02.png",
  //     designation: "Bảo dưỡng công nghiệp",
  //   },
  //   publishDate: "2024",
  // },
  // {
  //   id: "nhua-pha-le",
  //   title: "Lắp đặt Hệ thống điện mặt trời áp mái Nhà Máy Nhựa - 1,557.36 kWp",
  //   company: "CÔNG TY CP SẢN XUẤT VÀ CÔNG NGHỆ NHỰA PHA LÊ",
  //   paragraph:
  //     "Địa Chỉ: Lô Đất CN4.3 KCN MP Đình Vũ, Khu Kinh tế Đình Vũ-Cát Hải - Phường Đông Hải 2 - Quận Hải An - TP. Hải Phòng",
  //   thumbnail:
  //     "https://qsee.com.vn/_assets/media/3986815d87a151f6c0eaffb3dfbeb009.png",
  //   images: [
  //     "https://qsee.com.vn/_assets/media/3986815d87a151f6c0eaffb3dfbeb009.png",
  //     "https://qsee.com.vn/_assets/media/80eca2f5f1a587452dfa8e58b84f9410.png",
  //   ],
  //   capacity: 1557.36,
  //   author: {
  //     name: "QSEE",
  //     image: "/images/blog/author-03.png",
  //     designation: "Cơ - điện logistics",
  //   },
  //   publishDate: "2023",
  // },
  // {
  //   id: "green-i-park",
  //   title: "Hệ Thống Điện Mặt Trời Áp Mái Green I-Park Công Suất 100 kWp",
  //   company: "Công Ty Cổ Phần Green I-Park",
  //   paragraph:
  //     "Địa Chỉ: Khu Công Nghiệp Liên Hà Thái (GreeniP-1), Huyện Thái Thuỵ, Tỉnh Thái Bình, Việt Nam",
  //   thumbnail:
  //     "https://qsee.com.vn/_assets/media/bec7b256620829d310a9086af8b15c5c.png",
  //   images: [
  //     "https://qsee.com.vn/_assets/media/bec7b256620829d310a9086af8b15c5c.png",
  //   ],
  //   capacity: 100,
  //   author: {
  //     name: "QSEE",
  //     image: "/images/blog/author-01.png",
  //     designation: "Dự án M&E",
  //   },
  //   publishDate: "2024",
  // },
];

const blogData: Blog[] = [
  {
    id: "1",
    title: "Bảo trì định kỳ hệ thống ĐHKK trung tâm AHU và PAU",
    paragraph:
      "Dự án M&E: InterContinental Saigon (Kumho Asiana Plaza), 39 Lê Duẩn, Bến Nghé, Quận 1, TP. Hồ Chí Minh.",
    thumbnail:
      "https://qsee.com.vn/_assets/media/22adf7026bd45d6c832f8c477737732c.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-01.png",
      designation: "Dự án M&E",
    },
    publishDate: "2024",
  },
  {
    id: "2",
    title: "Bảo trì kho lạnh và hệ thống ĐHKK trung tâm",
    paragraph:
      "Công ty TNHH DKSH Việt Nam — Số 23 Đại Lộ Độc Lập, KCN VSIP.1, TX. Thuận An, Bình Dương.",
    thumbnail:
      "https://qsee.com.vn/_assets/media/084713f840681ed9e40a038a51b3c2eb.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-02.png",
      designation: "Bảo dưỡng công nghiệp",
    },
    publishDate: "2024",
  },
  {
    id: "3",
    title: "Hệ thống chữa cháy tự động và cải tạo điện kho",
    paragraph:
      "Kerry Integrated Logistics (Việt Nam) — Số 20 Đại Lộ Thống Nhất, KCN Sóng Thần 2, Dĩ An, Bình Dương.",
    thumbnail:
      "https://qsee.com.vn/_assets/media/e3bc08eb68b3f19fc40e72d576395213.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-03.png",
      designation: "Cơ - điện logistics",
    },
    publishDate: "2023",
  },
  // {
  //   id: 4,
  //   title: "Hệ thống điện mặt trời áp mái Green I-Park — 100 kWp",
  //   paragraph:
  //     "Công ty Cổ phần Green I-Park — KCN Liên Hà Thái, huyện Thái Thuỵ, Thái Bình.",
  //   image:
  //     "https://qsee.com.vn/_assets/media/bec7b256620829d310a9086af8b15c5c.png",
  //   author: {
  //     name: "QSEE",
  //     image: "/images/blog/author-01.png",
  //     designation: "Dự án solar",
  //   },
  //   publishDate: "2023",
  // },
  // {
  //   id: 5,
  //   title: "Hệ thống điện mặt trời nhà máy Lê Phan Gia — 1.336 kWp",
  //   paragraph:
  //     "Công ty TNHH Sản xuất Lê Phan Gia — KCN Nam Tân Uyên mở rộng, Bình Dương.",
  //   image:
  //     "https://qsee.com.vn/_assets/media/87e1fad419b140da8c372f9a0a41d786.png",
  //   author: {
  //     name: "QSEE",
  //     image: "/images/blog/author-02.png",
  //     designation: "Dự án solar",
  //   },
  //   publishDate: "2022",
  // },
  // {
  //   id: 6,
  //   title: "Hệ thống điện mặt trời nhà máy Sợi Long Vân — 2.700 kWp",
  //   paragraph:
  //     "Công ty TNHH Sợi Long Vân — KCN Châu Sơn, thành phố Phủ Lý, Hà Nam.",
  //   image:
  //     "https://qsee.com.vn/_assets/media/c87eab6c20f3c17cd79f4cbfdabff75c.png",
  //   author: {
  //     name: "QSEE",
  //     image: "/images/blog/author-03.png",
  //     designation: "Dự án solar",
  //   },
  //   publishDate: "2022",
  // },
];
export { blogData, solarCompanyData, solarFamilyData, solarFeaturedData };
