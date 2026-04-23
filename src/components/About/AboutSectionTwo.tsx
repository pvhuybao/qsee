import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  GIỚI THIỆU
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Công Ty Cổ Phần Xây Dựng và Dịch Vụ Kỹ Thuật QSEE là doanh
                  nghiệp hàng đầu trong lĩnh vực Cơ - Điện - Lạnh - Cấp thoát
                  nước cho các tòa nhà cao tầng, nhà xưởng, và đặc biệt là cung
                  cấp giải pháp toàn diện cho hệ thống điện năng lượng mặt trời
                  (NLMT), bao gồm tài chính, tư vấn thiết kế, mua sắm và lắp
                  đặt.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị
                  hiện đại, QSEE JSC cam kết mang đến giải pháp thông minh, an
                  toàn, chất lượng cao, đáp ứng đa dạng nhu cầu của khách hàng.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Tiêu chí hoạt động
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Chúng tôi hoạt động dựa trên tiêu chí: Giải pháp đầu tư tiết
                  kiệm; sản phẩm chất lượng; thi công chuyên nghiệp; an toàn;
                  bảo hành - bảo trì dài hạn.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cam kết
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Sự tận tâm và chỉn chu trong từng dự án của QSEE JSC không chỉ
                  mang lại lợi ích bền vững mà còn đảm bảo sự hài lòng tuyệt
                  đối cho khách hàng. QSEE JSC - Đối tác đáng tin cậy cho mọi
                  công trình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
