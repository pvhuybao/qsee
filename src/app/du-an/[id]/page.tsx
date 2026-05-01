import SharePost from "@/components/Blog/SharePost";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import {
  solarCompanyData,
  solarFamilyData,
  solarFeaturedData,
} from "@/data/projectData";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

type BlogSidebarPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const BlogSidebarPage = async ({ params }: BlogSidebarPageProps) => {
  const { id } = await params;

  const allBlogs = [
    ...solarCompanyData,
    ...solarFamilyData,
    ...solarFeaturedData,
  ];
  const blog = allBlogs.find((item) => item.id === id);

  if (!blog) {
    notFound();
  }

  const normalizedAddress = blog.paragraph.replace(/^địa chỉ:\s*/i, "");

  return (
    <>
      <section className="dark:bg-bg-color-dark overflow-hidden bg-[#f7f8ff] pt-[80px] pb-[40px] md:pt-[130px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="text-body-color dark:text-body-color-dark mb-4 text-3xl leading-tight font-bold sm:leading-tight">
                  {blog.title}
                </h1>

                <div>
                  <p className="mb-2 text-2xl leading-relaxed font-bold text-black sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed dark:text-white">
                    {blog.company ?? ""}
                  </p>
                  <p className="text-body-color dark:text-body-color-dark mb-3 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    • Địa Chỉ: {normalizedAddress}
                  </p>
                  <div className="h-4"></div>
                  <div className="mb-6 flex w-full flex-col gap-4 overflow-hidden rounded-sm">
                    {blog.images?.map((image) => (
                      <div className="relative aspect-97/60 w-full">
                        <Image
                          src={image}
                          alt="image"
                          fill
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5 flex items-center md:mb-0">
                      <h5 className="text-body-color dark:text-body-color-dark mb-3 text-sm font-medium">
                        Chia sẻ:
                      </h5>
                      <div className="flex items-center">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-0 md:pr-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-xl font-bold text-black dark:border-white/10 dark:text-white">
                  Thông tin chi tiết
                </h3>
                <ul className="px-8 py-6">
                  {blog.company && (
                    <li className="mb-6">
                      <div className="mb-2 font-bold">Chủ sở hữu:</div>
                      <div>{blog.company}</div>
                    </li>
                  )}
                  <li className="mb-6">
                    <div className="mb-2 font-bold">Công suất:</div>
                    <div>{blog.capacity} KW</div>
                  </li>
                  <li>
                    <div className="mb-2 font-bold">Lợi ích:</div>
                    <div className="mb-1">
                      {(((blog.capacity * 2.6) / 1000) * 365).toFixed(2)}{" "}
                      MWh/Năm
                    </div>
                    <div className="mb-1">
                      {(((blog.capacity * 2.6) / 1000) * 30).toFixed(2)}{" "}
                      MWh/Tháng
                    </div>
                    <div>
                      {((blog.capacity * 2.6) / 1000).toFixed(2)} MWh/Ngày
                    </div>
                  </li>
                </ul>
              </div>
              {/* <NewsLatterBox /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
