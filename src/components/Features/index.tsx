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
            paragraph="Tư vấn, thi công, bảo dưỡng và thương mại thiết bị: trọn bộ hành trình từ thiết kế, lắp đặt đến vận hành lâu dài cho hệ thống điện mặt trời và cơ - điện - lạnh."
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
