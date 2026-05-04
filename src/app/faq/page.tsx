import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp (FAQ) | QSEE JSC",
  description:
    "Giải đáp thắc mắc về điện năng lượng mặt trời, thành phần hệ thống, tiết kiệm điện và vận hành theo mùa.",
};

const FaqPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Câu hỏi thường gặp (FAQ)"
        description="QSEE sẽ giải đáp những câu hỏi thường gặp và cung cấp thêm thông tin về điện mặt trời cho khách hàng"
      />
      <FAQ />
    </>
  );
};

export default FaqPage;
