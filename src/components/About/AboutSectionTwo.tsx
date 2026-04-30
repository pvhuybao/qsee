import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section id="about" className="bg-gray-light dark:bg-bg-color-dark py-10">
      <div className="container">
        <div className="-mx-4 flex flex-col-reverse flex-wrap lg:flex-row">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-77/100 max-w-[580px] text-center"
              data-wow-delay=".15s"
            >
              <Image
                // src="https://qsee.com.vn/_assets/media/81ebcd84ba3fdb5ade362608e7bdc716.jpg"
                src="/images/about/about-image.png"
                alt="about image"
                fill
                className="drop-shadow-three rounded-lg dark:hidden dark:drop-shadow-none"
              />
              <Image
                // src="https://qsee.com.vn/_assets/media/81ebcd84ba3fdb5ade362608e7bdc716.jpg"
                src="/images/about/about-image.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden rounded-lg dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  GIỚI THIỆU
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-3 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  QSEE JSC (tên đầy đủ: Công Ty Cổ Phần Xây Dựng và Dịch Vụ Kỹ
                  Thuật QSEE) là doanh nghiệp trong lĩnh vực tư vấn phát triển,
                  thiết kế, cung cấp và thi công hệ thống điện năng lượng mặt
                  trời.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Với đội ngũ nhân sự chất lượng, có nền tảng quản lý, kỹ thuật
                  vững chắc và bề dày kinh nghiệm khi đã tham gia phát triển và
                  triển khai nhiều dự án Điện mặt trời lớn cho những tệp khách
                  hàng đa dạng, từ những nhà xưởng sản xuẩt, tòa nhà, với các
                  yêu cầu khắc khe về chất lượng, an toàn và cam kết bền vững
                  theo tiêu chuẩn quốc tế, QSEE JSC đã khẳng định vị thế là đối
                  tác chiến lược tin cậy trong lĩnh vực năng lượng tái tạo, điển
                  hình là hệ thống Điện mặt trời.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Tiêu chí hoạt động
                </h3>
                <div className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Chúng tôi hoạt động dựa trên tiêu chí:
                  <ul className="ml-8 list-disc">
                    <li>
                      Giải pháp đầu tư <strong>HIỆU QUẢ</strong>
                    </li>
                    <li>
                      Sản phẩm <strong>CHẤT LƯỢNG</strong>
                    </li>
                    <li>
                      Quản lý Thi công <strong>CHUYÊN NGHIỆP</strong>
                    </li>
                    <li>
                      <strong>AN TOÀN</strong>
                    </li>
                    <li>
                      <strong>CAM KẾT</strong> và <strong>GẮN BÓ</strong> lâu
                      dài với khách hàng qua các dịch vụ Vận hành O&M chuyên
                      nghiệp
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Cam kết
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Năng lực, kinh nghiệm cùng sự tận tâm và chỉn chu trong mỗi
                  chi tiết của dự án là CAM KẾT của chúng tôi nhằm đảm bảo mang
                  lại HIỆU QUẢ tối đa và lợi ích LÂU DÀI, BÊN VỮNG cho khách
                  hàng. QSEE JSC- Đối tác đáng tin cậy cho mọi công trình!
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
