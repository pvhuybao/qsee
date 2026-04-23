import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Bảo trì định kỳ hệ thống ĐHKK trung tâm AHU và PAU",
    paragraph:
      "Dự án M&E: InterContinental Saigon (Kumho Asiana Plaza), 39 Lê Duẩn, Bến Nghé, Quận 1, TP. Hồ Chí Minh.",
    image:
      "https://qsee.com.vn/_assets/media/22adf7026bd45d6c832f8c477737732c.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-01.png",
      designation: "Dự án M&E",
    },
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Bảo trì kho lạnh và hệ thống ĐHKK trung tâm",
    paragraph:
      "Công ty TNHH DKSH Việt Nam — Số 23 Đại Lộ Độc Lập, KCN VSIP.1, TX. Thuận An, Bình Dương.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-02.png",
      designation: "Bảo dưỡng công nghiệp",
    },
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Hệ thống chữa cháy tự động và cải tạo điện kho",
    paragraph:
      "Kerry Integrated Logistics (Việt Nam) — Số 20 Đại Lộ Thống Nhất, KCN Sóng Thần 2, Dĩ An, Bình Dương.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-03.png",
      designation: "Cơ - điện logistics",
    },
    publishDate: "2023",
  },
  {
    id: 4,
    title: "Hệ thống điện mặt trời áp mái Green I-Park — 100 kWp",
    paragraph:
      "Công ty Cổ phần Green I-Park — KCN Liên Hà Thái, huyện Thái Thuỵ, Thái Bình.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-01.png",
      designation: "Dự án solar",
    },
    publishDate: "2023",
  },
  {
    id: 5,
    title: "Hệ thống điện mặt trời áp mái nhà máy Lê Phan Gia — 1.336 kWp",
    paragraph:
      "Công ty TNHH Sản xuất Lê Phan Gia — KCN Nam Tân Uyên mở rộng, Bình Dương.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-02.png",
      designation: "Dự án solar",
    },
    publishDate: "2022",
  },
  {
    id: 6,
    title: "Hệ thống điện mặt trời áp mái nhà máy Sợi Long Vân — 2.700 kWp",
    paragraph:
      "Công ty TNHH Sợi Long Vân — KCN Châu Sơn, thành phố Phủ Lý, Hà Nam.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "QSEE",
      image: "/images/blog/author-03.png",
      designation: "Dự án solar",
    },
    publishDate: "2022",
  },
];
export default blogData;
