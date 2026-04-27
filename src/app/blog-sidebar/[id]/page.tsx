import SharePost from "@/components/Blog/SharePost";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { solarCompanyData, solarFamilyData } from "@/data/blogData";
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
  const blogId = Number(id);
  const allBlogs = [...solarCompanyData, ...solarFamilyData];
  const blog = allBlogs.find((item) => item.id === blogId);

  if (!blog) {
    notFound();
  }

  const normalizedAddress = blog.paragraph.replace(/^địa chỉ:\s*/i, "");

  return (
    <>
      <section className="overflow-hidden pt-[130px] pb-[40px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-4 text-3xl leading-tight font-bold text-black sm:leading-tight dark:text-white">
                  {blog.title}
                </h1>

                <div>
                  <p className="text-body-color dark:text-body-color-dark mb-2 text-2xl leading-relaxed font-bold sm:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    {blog.company ?? ""}
                  </p>
                  <p className="text-body-color dark:text-body-color-dark mb-3 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    • Địa Chỉ: {normalizedAddress}
                  </p>
                  <div className="h-4"></div>
                  <div className="mb-10 flex w-full flex-col gap-8 overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src={blog.image}
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5 flex items-center">
                      <h5 className="text-body-color mb-3 text-sm font-medium">
                        Share this post :
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
              {/* <div className="shadow-three dark:bg-gray-dark mt-12 mb-10 rounded-xs bg-white p-6 lg:mt-0 dark:shadow-none">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary mr-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                  />
                  <button
                    aria-label="search button"
                    className="bg-primary flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xs text-white"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div> */}

              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Thông tin chi tiết
                </h3>
                <ul className="px-8 py-6">
                  <li className="mb-6">
                    <div className="mb-2 font-bold">Roof Owner:</div>
                    <div>CJ VINA AGRI CO., LTD - HA NAM BRANCH</div>
                  </li>
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
