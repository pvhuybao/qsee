import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="projects"
      className="bg-gray-light dark:bg-bg-color-dark py-10"
    >
      <div className="container">
        <SectionTitle
          title="Dự án tiêu biểu"
          paragraph="Một số công trình cơ - điện - lạnh và năng lượng mặt trời mà QSEE triển khai tại khách sạn, logistics, bất động sản công nghiệp và hộ sử dụng điện kèm lưu trữ (BESS)."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
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
