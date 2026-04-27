import SharePost from "@/components/Blog/SharePost";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import {
  solarCompanyData,
  solarFamilyData,
  solarFeaturedData,
} from "@/data/blogData";
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
      <section className="dark:bg-bg-color-dark overflow-hidden bg-[#f4f6ff] pt-[80px] pb-[40px] md:pt-[130px]">
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
                  <div className="mb-6 flex w-full flex-col gap-8 overflow-hidden rounded-sm">
                    {blog.images?.map((image) => (
                      <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                        <Image
                          src={image}
                          alt="image"
                          fill
                          className="h-full w-full object-cover object-center"
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
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Thông tin chi tiết
                </h3>
                <ul className="px-8 py-6">
                  {blog.company && (
                    <li className="mb-6">
                      <div className="mb-2 font-bold">Roof Owner:</div>
                      <div>{blog.company}</div>
                    </li>
                  )}
                  <li className="mb-6">
                    <div className="mb-2 font-bold">Capacity:</div>
                    <div>1949.2 KW</div>
                  </li>
                  <li>
                    <div className="mb-2 font-bold">Benefit:</div>
                    <div className="mb-1">1,849.8 MWh/Year</div>
                    <div className="mb-1">154.15 MWh/Month</div>
                    <div>5.1 MWh/Day</div>
                  </li>
                </ul>
              </div>
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
