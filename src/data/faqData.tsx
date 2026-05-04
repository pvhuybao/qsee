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
    description:
      "Khái niệm, thành phần hệ thống và lợi ích sử dụng điện mặt trời.",
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
    description:
      "Hỏi đáp nhanh về tấm pin năng lượng mặt trời (PV Module) và một số khái niệm.",
    items: [
      {
        id: "tam-pin-0",
        question: "Tấm pin năng lượng mặt trời là gì ?",
        answer:
          "Tấm pin năng lượng mặt trời (solar panel) đang là giải pháp tiết kiệm điện tối ưu, thân thiện môi trường cho hộ gia đình và doanh nghiệp tại Việt Nam. Với hiệu suất cao từ 15-22%, pin mặt trời chuyển đổi ánh sáng thành điện sạch, giảm hóa đơn tiền điện hàng tháng và góp phần phát triển năng lượng bền vững. Pin năng lượng mặt trời phổ biến hiện nay gồm loại Mono (hiệu suất cao, tiết kiệm diện tích) và Poly (giá rẻ, phù hợp dự án lớn). Thương hiệu hàng đầu như Astronergy Solar, Canadian Solar đảm bảo bảo hành 12-25 năm, hiệu suất duy trì trên 80% sau 25 năm. Mua tấm pin năng lượng mặt trời chính hãng tại QSEE JSC để nhận ưu đãi, khảo sát lắp đặt tận nơi và hỗ trợ kỹ thuật chuyên sâu.",
      },
      {
        id: "tam-pin-1",
        question: "Tấm pin Mono và Poly khác nhau như thế nào?",
        answer:
          "Mono (đơn tinh thể) có hiệu suất cao hơn, diện tích lắp nhỏ hơn, phù hợp mái hạn chế diện tích — đang là công nghệ chủ đạo hiện nay. Poly (đa tinh thể) hiệu suất thấp hơn, giá rẻ hơn nhưng gần như không còn được sản xuất phổ biến. Với dự án cao cấp, QSEE ưu tiên Mono PERC hoặc TOPCon thế hệ mới.",
      },
      {
        id: "tam-pin-2",
        question: "Tấm pin TOPCon là gì — có đáng nâng cấp không?",
        answer:
          "TOPCon là công nghệ thế hệ mới, hiệu suất lên đến 22–24%, vượt trội so với PERC truyền thống (19–21%). Hoạt động tốt hơn trong điều kiện ánh sáng yếu và nhiệt độ cao — phù hợp với khí hậu miền Nam Việt Nam. Chi phí chênh lệch không lớn so với lợi ích sản lượng dài hạn.",
      },
      {
        id: "tam-pin-3",
        question: "Tấm pin bị bóng che một phần có ảnh hưởng nhiều không?",
        answer:
          "Ảnh hưởng đáng kể nếu không có bypass diode hoặc optimizer. Một ô bị che có thể kéo giảm sản lượng cả chuỗi. QSEE khảo sát hướng mái và điểm che khuất trước khi thiết kế — có thể đề xuất thêm optimizer hoặc microinverter nếu cần.",
      },
      {
        id: "tam-pin-4",
        question: "Tấm pin chịu được mưa đá và thời tiết khắc nghiệt không?",
        answer:
          "Tấm pin đạt chuẩn IEC 61215 được kiểm tra chịu tải gió, mưa đá, nhiệt độ cực đoan. Các thương hiệu uy tín như JA Solar, LONGi, Jinko Solar đều vượt qua bài kiểm tra va đập hạt đá 25mm. QSEE cung cấp đầy đủ hồ sơ kiểm định theo yêu cầu.",
      },
      {
        id: "tam-pin-5",
        question: "Tấm pin bảo hành bao lâu — sau 25 năm còn dùng được không?",
        answer:
          "Thường có hai loại bảo hành: bảo hành sản phẩm 10–15 năm và bảo hành sản lượng 25–30 năm (cam kết còn ≥80% công suất ban đầu). Sau 25 năm, tấm pin vẫn hoạt động được, chỉ giảm nhẹ hiệu suất — không phải thay mới hoàn toàn.",
      },
      {
        id: "tam-pin-6",
        question: "Tấm pin bao nhiêu Wp là đủ cho một dự án?",
        answer:
          "Phụ thuộc vào diện tích mái, nhu cầu điện và hướng lắp. Tấm pin thương mại phổ biến hiện nay là 550–710 Wp/tấm. QSEE tính toán số lượng tấm tối ưu dựa trên khảo sát thực tế — không đề xuất lắp nhiều hơn mức cần thiết.",
      },
      {
        id: "tam-pin-7",
        question: "Tấm pin có cần vệ sinh định kỳ không?",
        answer:
          "Có. Bụi bẩn, phân chim, rêu mốc bám trên bề mặt có thể làm giảm 5–15% sản lượng. Khuyến nghị vệ sinh 2–4 lần/năm tùy khu vực. QSEE hỗ trợ gói bảo trì định kỳ kết hợp kiểm tra toàn bộ hệ thống.",
      },
    ],
  },
  {
    id: "pin-luu-tru",
    title: "Pin lưu trữ năng lượng",
    description:
      "Khái niệm, công nghệ, nhu cầu sử dụng và độ an toàn của pin lưu trữ (BESS).",
    items: [
      {
        id: "pin-luu-tru-1",
        question: "Pin lưu trữ năng lượng mặt trời là gì?",
        answer:
          "Pin lưu trữ năng lượng mặt trời, hay BESS (Battery Energy Storage System), là hệ thống sử dụng pin sạc lớn để lưu trữ điện dư từ tấm pin hoặc từ lưới điện và cung cấp lại khi cần. Ban ngày hệ thống nạp điện dư vào pin, ban đêm hoặc khi mất điện sẽ xả ra để sử dụng.",
      },
      {
        id: "pin-luu-tru-2",
        question:
          "Pin lưu trữ có thực sự cần thiết cho hệ thống điện mặt trời không?",
        answer:
          "Không bắt buộc, nhưng rất đáng đầu tư nếu bạn muốn dùng điện ban đêm, chủ động khi mất điện hoặc tối ưu chi phí điện. Với nhà ở cao cấp hoặc cơ sở sản xuất cần điện liên tục, pin lưu trữ là giải pháp quan trọng.",
      },
      {
        id: "pin-luu-tru-3",
        question:
          "Pin lưu trữ hiện nay dùng công nghệ gì — có khác pin cũ không?",
        answer:
          "Công nghệ chủ đạo hiện nay là Lithium-ion, phổ biến nhất là LFP (LiFePO4) với độ an toàn cao, tuổi thọ 10–15 năm và chu kỳ sạc/xả 4.000–6.000 lần. So với ắc quy chì-axit truyền thống, pin mới bền hơn, hiệu suất cao hơn và an toàn hơn.",
      },
      {
        id: "pin-luu-tru-4",
        question: "Cần bao nhiêu kWh pin để đủ dùng qua đêm?",
        answer:
          "Một hộ gia đình tiêu thụ trung bình khoảng 10–20 kWh mỗi đêm. Dung lượng phù hợp phụ thuộc vào nhu cầu sử dụng thực tế và thiết bị điện, cần tính toán kỹ để tránh lãng phí đầu tư.",
      },
      {
        id: "pin-luu-tru-5",
        question: "Pin lưu trữ có nguy cơ cháy nổ không?",
        answer:
          "Pin LFP chất lượng cao có cấu trúc ổn định và ít nguy cơ cháy nổ. Rủi ro thường đến từ pin kém chất lượng hoặc lắp đặt sai kỹ thuật, vì vậy cần chọn thiết bị đạt chuẩn và thi công đúng quy trình an toàn.",
      },
      {
        id: "pin-luu-tru-6",
        question: "Pin lưu trữ bảo hành bao lâu và sau bảo hành thì sao?",
        answer:
          "Các hãng uy tín thường bảo hành 5–10 năm hoặc theo số chu kỳ sạc (khoảng 4.000+). Sau thời gian này, pin vẫn có thể hoạt động với dung lượng còn khoảng 70–80%, tùy mức độ sử dụng.",
      },
      {
        id: "pin-luu-tru-7",
        question: "Có thể theo dõi trạng thái pin từ xa không?",
        answer:
          "Có. Hệ thống pin hiện đại tích hợp ứng dụng theo dõi, cho phép xem mức sạc, nhiệt độ, chu kỳ và lịch sử hoạt động theo thời gian thực.",
      },
      {
        id: "pin-luu-tru-8",
        question: "Pin lưu trữ lắp thêm vào hệ thống cũ có được không?",
        answer:
          "Có thể, nếu inverter hiện tại hỗ trợ kết nối pin (loại hybrid hoặc có cổng mở rộng). Nếu dùng inverter on-grid thuần túy, cần nâng cấp lên hybrid inverter để tích hợp pin lưu trữ.",
      },
    ],
  },
  {
    id: "inverter",
    title: "Inverter năng lượng mặt trời",
    description:
      "Khái niệm, vai trò, phân loại và cách lựa chọn inverter trong hệ thống điện mặt trời.",
    items: [
      {
        id: "inverter-1",
        question: "Bộ inverter năng lượng mặt trời là gì?",
        answer:
          "Inverter (biến tần điện mặt trời) là thiết bị chuyển đổi dòng điện một chiều (DC) từ tấm pin thành điện xoay chiều (AC) để sử dụng trong gia đình hoặc hòa lưới. Đây là “bộ não” của hệ thống, quyết định hiệu suất, độ ổn định và tuổi thọ toàn bộ hệ thống điện mặt trời.",
      },
      {
        id: "inverter-2",
        question: "Inverter hybrid có thực sự cần thiết không?",
        answer:
          "Không bắt buộc. Nếu điện lưới ổn định, inverter hòa lưới (on-grid) là lựa chọn tối ưu vì chi phí thấp và vận hành đơn giản. Inverter hybrid chỉ cần thiết khi bạn muốn dự phòng điện hoặc kết hợp pin lưu trữ để dùng ban đêm.",
      },
      {
        id: "inverter-3",
        question: "Sungrow hay SMA — nên chọn loại nào?",
        answer:
          "Sungrow phù hợp khi cần hiệu suất cao với chi phí hợp lý và triển khai nhanh. SMA là lựa chọn cao cấp khi yêu cầu độ bền, độ ổn định dài hạn và tiêu chuẩn kỹ thuật cao, đặc biệt trong môi trường công nghiệp.",
      },
      {
        id: "inverter-4",
        question: "Làm sao biết inverter đạt chuẩn quốc tế?",
        answer:
          "Cần kiểm tra các chứng nhận kỹ thuật đi kèm sản phẩm (ví dụ tiêu chuẩn an toàn, chất lượng) và giấy kiểm định từ nhà cung cấp. Nên chọn thiết bị có nguồn gốc rõ ràng và đầy đủ hồ sơ chứng nhận.",
      },
      {
        id: "inverter-5",
        question: "Bao lâu cần bảo dưỡng inverter một lần?",
        answer:
          "Nên kiểm tra và vệ sinh định kỳ mỗi 6–12 tháng để đảm bảo hiệu suất và kéo dài tuổi thọ thiết bị. Ngoài ra có thể theo dõi tình trạng hoạt động qua hệ thống giám sát từ xa.",
      },
      {
        id: "inverter-6",
        question: "Inverter bao nhiêu kW là đủ cho nhà ở?",
        answer:
          "Phụ thuộc vào nhu cầu sử dụng điện và diện tích mái lắp đặt. Thông thường nhà ở có diện tích 300–500m² sẽ phù hợp với hệ thống khoảng 10–20 kWp, tuy nhiên cần khảo sát thực tế để tính toán chính xác.",
      },
      {
        id: "inverter-7",
        question: "Có thể theo dõi inverter từ điện thoại không?",
        answer:
          "Có. Hầu hết inverter hiện đại đều tích hợp ứng dụng giám sát, cho phép theo dõi sản lượng điện, mức tiêu thụ và cảnh báo lỗi theo thời gian thực trên điện thoại.",
      },
      {
        id: "inverter-8",
        question: "Inverter có hoạt động khi trời nhiều mây không?",
        answer:
          "Vẫn hoạt động nhưng công suất sẽ giảm theo mức bức xạ mặt trời. Inverter chất lượng cao có khả năng tối ưu MPPT tốt hơn, giúp duy trì hiệu suất trong điều kiện ánh sáng yếu.",
      },
    ],
  },
];
