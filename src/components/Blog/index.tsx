import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { solarForCompanyData } from "../../data/blogData";

const Blog = ({ type }: { type?: "company" | "business" | string }) => {
  let title = "Dự án Solar";

  if (type == "company") {
    title = "Dự án Solar Công Nghiệp";
  }

  if (type == "business") {
    title = "Dự án cho doanh nghiệp";
  }

  return (
    <section
      id="projects"
      className="bg-gray-light dark:bg-bg-color-dark py-10"
    >
      <div className="container">
        <SectionTitle
          title={title}
          paragraph="Một số công trình cơ - điện - lạnh và năng lượng mặt trời mà QSEE triển khai tại khách sạn, logistics, bất động sản công nghiệp và hộ sử dụng điện kèm lưu trữ (BESS)."
          center
        />

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {solarForCompanyData.map((blog) => (
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
