import SectionTitle from "../Common/SectionTitle";
import ScrollRevealStagger from "../Common/ScrollRevealStagger";
import SingleBlog from "./SingleBlog";
import {
  solarCompanyData,
  solarFamilyData,
  solarFeaturedData,
} from "../../data/projectData";

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
      <ScrollRevealStagger className="container">
        <div className="reveal-item w-full" style={{ transitionDelay: "0ms" }}>
          <SectionTitle
            title={title}
            paragraph="Một số công trình năng lượng mặt trời tiêu biểu mà QSEE đã triển khai cho khách hàng"
            center
          />
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
          {solarData.map((blog, i) => (
            <div
              key={blog.id}
              className="reveal-item w-full"
              style={{ transitionDelay: `${80 + i * 90}ms` }}
            >
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </ScrollRevealStagger>
    </section>
  );
};

export default Blog;
