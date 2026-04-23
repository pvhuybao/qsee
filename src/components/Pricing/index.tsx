"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 pt-10">
      <div className="container">
        <SectionTitle
          title="Hợp tác cùng QSEE"
          paragraph="Báo giá linh hoạt theo công trình, phạm vi thi công và hình thức bảo trì. Vui lòng cung cấp thông tin công trình để QSEE tư vấn phương án tối ưu về tài chính và vận hành."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Tư vấn & mua sắm
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                ? "text-dark dark:text-white"
                : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Thi công & bảo trì
            </span>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Tư vấn, thiết kế"
            price="Liên hệ"
            duration="báo giá"
            subtitle={
              isMonthly
                ? "Khảo sát hiện trạng, tư vấn phương án tài chính và sơ bộ công năng công trình."
                : "Bản vẽ thi công chi tiết, kế hoạch an toàn và tối ưu vận hành theo từng công trình."
            }
          >
            <OfferList
              text="Tư vấn quy mô, phương án tài trợ"
              status="active"
            />
            <OfferList
              text="Hồ sơ thiết kế, phối cảnh kỹ thuật"
              status="active"
            />
            <OfferList text="Bóc tính, lập dự toán" status="active" />
            <OfferList
              text="Bàn giao hồ sơ, handover kỹ thuật"
              status="active"
            />
            <OfferList text="Giám sát tác giả" status="inactive" />
            <OfferList
              text="Bảo dưỡng theo hợp đồng dài hạn"
              status="inactive"
            />
          </PricingBox>
          <PricingBox
            packageName="Lắp đặt trọn gói"
            price="Liên hệ"
            duration="báo giá"
            subtitle={
              isMonthly
                ? "Mua sắm thiết bị, vận chuyển, lắp đặt, thử tải và bàn giao tài liệu bảo hành."
                : "Hạng mục cơ - điện - lạnh, cấp thoát nước và công tác bàn giao, nghiệm thu tại hiện trường."
            }
          >
            <OfferList
              text="Cung ứng thiết bị, vật tư theo bản vẽ trúng thầu"
              status="active"
            />
            <OfferList
              text="Thi công an toàn, bám tiến độ dự án"
              status="active"
            />
            <OfferList text="Chạy thử, hiệu chỉnh, kiểm định" status="active" />
            <OfferList text="Hồ sơ nghiệm thu, bảo hành" status="active" />
            <OfferList
              text="Đào tạo vận hành cho kỹ sư tại chỗ"
              status="active"
            />
            <OfferList text="Mở rộng, nâng công suất" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Bảo trì & vận hành"
            price="Liên hệ"
            duration="báo giá"
            subtitle={
              isMonthly
                ? "Bảo dưỡng ngăn hạn, kiểm tra theo hạng mục, phản hồi nhanh sự cố bất thường."
                : "Hợp đồng dài hạn 12–24 tháng, kế hoạch bảo dưỡng định kỳ, có báo cáo hiệu suất."
            }
          >
            <OfferList
              text="Vận hành, giám sát từ xa, kiểm tra tuần/ tháng"
              status="active"
            />
            <OfferList
              text="Bảo dưỡng hệ thống lạnh, AHU, PAU"
              status="active"
            />
            <OfferList text="Dọn tấm pin, cân chỉnh chiều" status="active" />
            <OfferList
              text="Thay thế, dự phòng linh kiện chính hãng"
              status="active"
            />
            <OfferList
              text="Báo cáo hiệu suất, đề xuất cải tạo"
              status="active"
            />
            <OfferList text="Ưu tiên ứng cứu sự cố" status="active" />
          </PricingBox>
        </div> */}
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
