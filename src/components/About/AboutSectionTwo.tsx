import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-77/100 max-w-[580px] text-center"
              data-wow-delay=".15s"
            >
              <Image
                src="https://qsee.com.vn/_assets/media/81ebcd84ba3fdb5ade362608e7bdc716.jpg"
                alt="about image"
                fill
                className="drop-shadow-three rounded-lg dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="https://qsee.com.vn/_assets/media/81ebcd84ba3fdb5ade362608e7bdc716.jpg"
                alt="about image"
                fill
                className="drop-shadow-three hidden rounded-lg dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  GIỚI THIỆU
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-3 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Công Ty Cổ Phần Xây Dựng và Dịch Vụ Kỹ Thuật QSEE là doanh
                  nghiệp hàng đầu trong lĩnh vực Cơ - Điện - Lạnh - Cấp thoát
                  nước cho các tòa nhà cao tầng, nhà xưởng, và đặc biệt là cung
                  cấp giải pháp toàn diện cho hệ thống điện năng lượng mặt trời
                  (NLMT), bao gồm tài chính, tư vấn thiết kế, mua sắm và lắp
                  đặt.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị
                  hiện đại, QSEE JSC cam kết mang đến giải pháp thông minh, an
                  toàn, chất lượng cao, đáp ứng đa dạng nhu cầu của khách hàng.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Tiêu chí hoạt động
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Chúng tôi hoạt động dựa trên tiêu chí:
                  <ul className="ml-8 list-disc">
                    <li>Giải pháp đầu tư tiết kiệm</li>
                    <li>Sản phẩm chất lượng</li>
                    <li>Thi công chuyên nghiệp, an toàn</li>
                    <li>Bảo hành - bảo trì dài hạn</li>
                  </ul>
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Cam kết
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Sự tận tâm và chỉn chu trong từng dự án của QSEE JSC không chỉ
                  mang lại lợi ích bền vững mà còn đảm bảo sự hài lòng tuyệt đối
                  cho khách hàng. QSEE JSC - Đối tác đáng tin cậy cho mọi công
                  trình.
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
