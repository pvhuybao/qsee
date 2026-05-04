export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    id: "co-ban",
    title: "Thông tin cơ bản",
    description: "Khái niệm, thành phần hệ thống và lợi ích sử dụng điện mặt trời.",
    items: [
      {
        id: "co-ban-1",
        question: "Điện năng lượng mặt trời là gì?",
        answer: "Là điện tạo ra từ ánh sáng mặt trời qua tấm pin.",
      },
      {
        id: "co-ban-2",
        question: "Hệ thống điện mặt trời gồm những gì?",
        answer:
          "Một hệ thống tiêu chuẩn gồm tấm pin, inverter, khung giá đỡ, dây dẫn và thiết bị bảo vệ.",
      },
      {
        id: "co-ban-3",
        question: "Có mấy loại hệ thống điện mặt trời?",
        answer:
          "Phổ biến có 3 loại: hòa lưới, độc lập và hybrid. Tùy nhu cầu tải và ngân sách để chọn giải pháp phù hợp.",
      },
      {
        id: "co-ban-4",
        question: "Lắp điện mặt trời có tiết kiệm tiền điện không?",
        answer:
          "Có. Hệ thống giúp giảm sản lượng điện mua từ lưới, đặc biệt hiệu quả với hộ dùng điện ban ngày nhiều.",
      },
      {
        id: "co-ban-5",
        question: "Hệ thống có hoạt động vào mùa đông không?",
        answer:
          "Có. Pin mặt trời vẫn tạo điện khi có bức xạ; công suất có thể giảm theo thời tiết nhưng hệ thống vẫn vận hành ổn định.",
      },
    ],
  },
  {
    id: "tam-pin",
    title: "Tấm pin mặt trời",
    description: "Cách hoạt động, loại tấm, hiệu suất và bảo quản tấm pin.",
    items: [
      {
        id: "tam-pin-1",
        question: "Tấm pin mặt trời hoạt động như thế nào?",
        answer:
          "Tấm pin (cell quang điện) hấp thụ photon từ ánh sáng mặt trời, tạo dòng điện một chiều (DC). Inverter chuyển thành điện xoay chiều (AC) để dùng trong nhà hoặc hòa lưới.",
      },
      {
        id: "tam-pin-2",
        question: "Tấm Mono và Poly khác nhau ra sao?",
        answer:
          "Mono (monocrystalline) dùng tinh thể silicon đơn, thường đẹp và hiệu suất cao hơn trong cùng diện tích. Poly (polycrystalline) có nhiều tinh thể, giá thường thấp hơn, hiệu suất có thể thấp hơn một chút so với Mono cùng thế hệ.",
      },
      {
        id: "tam-pin-3",
        question: "Tuổi thọ và bảo hành tấm pin thường là bao lâu?",
        answer:
          "Nhiều tấm pin thương mại có tuổi thọ vận hành 25–30 năm trở lên. Bảo hành sản phẩm thường 10–12 năm, bảo hành hiệu suất dài hơn (ví dụ 25 năm) tùy hãng — nên đọc điều khoản cụ thể trên hợp đồng và tem nhãn.",
      },
      {
        id: "tam-pin-4",
        question: "Công suất tấm phụ thuộc vào những yếu tố nào?",
        answer:
          "Phụ thuộc diện tích và hiệu suất cell, góc và hướng lắp, bóng râm, nhiệt độ (nắng nóng có thể làm giảm nhẹ công suất so với điều kiện chuẩn), và chất lượng dây nối/inverter.",
      },
      {
        id: "tam-pin-5",
        question: "Tấm pin có cần vệ sinh thường xuyên không?",
        answer:
          "Mưa thường giúp rửa bụi nhẹ. Khi bụi, lá cây, phân chim tích tụ nhiều, nên vệ sinh theo hướng dẫn an toàn (thường dùng nước sạch, tránh chà mạnh hoặc hóa chất không phù hợp) để duy trì hiệu suất.",
      },
    ],
  },
];
