import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import {
  solarCompanyData,
  solarFamilyData,
  solarFeaturedData,
} from "../../data/blogData";

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
    case "fetured":
      title = "Dự án tiêu biểu";
      solarData = solarFeaturedData;
      break;
    case "family":
      title = "Dự án Solar Hộ gia đình";
      solarData = solarFamilyData;
      break;
  }

  return (
    <section
      id={type}
      className={`${noBgColor ? "" : "bg-gray-light dark:bg-bg-color-dark"} py-10`}
    >
      <div className="container">
        <SectionTitle
          title={title}
          paragraph="Một số công trình năng lượng mặt trời tiêu biểu mà QSEE đã triển khai cho khách hàng"
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
