import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-10">
        <div className="container">
          <SectionTitle
            title="LĨNH VỰC KINH DOANH"
            paragraph="Công Ty Cổ Phần Xây Dựng và Dịch Vụ Kỹ Thuật QSEE là doanh nghiệp hàng đầu trong lĩnh vực Cơ - Điện - Lạnh - Cấp thoát nước cho các tòa nhà cao tầng, nhà xưởng, và đặc biệt là cung cấp giải pháp toàn diện cho hệ thống điện năng lượng mặt trời (NLMT), bao gồm tài chính, tư vấn thiết kế, mua sắm và lắp đặt."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
