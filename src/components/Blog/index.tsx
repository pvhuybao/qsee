import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { solarCompanyData, solarFamilyData } from "../../data/blogData";

const Blog = ({
  type,
  noBgColor,
}: {
  type?: "company" | "business" | string;
  noBgColor?: boolean;
}) => {
  let title = "Dự án Solar";
  let solarData = [];

  switch (type) {
    case "company":
      title = "Dự án Solar Công Nghiệp";
      solarData = solarCompanyData;
      break;
    case "family":
      title = "Dự án Solar Hộ gia đình";
      solarData = solarFamilyData;
      break;
    case "business":
      title = "Dự án cho doanh nghiệp";
      break;
  }

  return (
    <section
      id="projects"
      className={`${noBgColor ? "" : "bg-gray-light dark:bg-bg-color-dark"} py-10`}
    >
      <div className="container">
        <SectionTitle
          title={title}
          paragraph="Một số công trình cơ - điện - lạnh và năng lượng mặt trời mà QSEE triển khai tại khách sạn, logistics, bất động sản công nghiệp và hộ sử dụng điện kèm lưu trữ (BESS)."
          center
        />

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {solarData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
