import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, company, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative h-full overflow-hidden rounded-xs bg-white duration-300">
        <Link
          href="/blog-details"
          className="relative block aspect-37/22 w-full"
        >
          {/* <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
            {tags[0]}
          </span> */}
          <Image src={image} alt="image" fill className="object-cover" />
        </Link>

        <div className="p-6">
          <h3>
            <Link
              href="/blog-details"
              className="hover:text-primary dark:hover:text-primary text-body-color dark:text-body-color-dark mb-3 block text-xl font-bold"
            >
              {title}
            </Link>
          </h3>
          <h4 className="text-md mb-3 font-bold text-black dark:text-white">
            {company}
          </h4>
          <p className="border-body-color/10 text-body-color dark:text-body-color-dark border-t pt-3 text-base font-medium dark:border-white/10">
            {paragraph}
          </p>
          {/* <div className="flex items-center">
            <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-body-color text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                Date
              </h4>
              <p className="text-body-color text-xs">{publishDate}</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
