import ProductImageGallery from "@/components/Product/ProductImageGallery";
import ProductSocialShare from "@/components/Product/ProductSocialShare";
import { buildProductPageDetail } from "@/data/productsData";
import { products } from "@/data/productsData";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

async function absoluteUrl(path: string): Promise<string> {
  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}${path}`;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return { title: "Sản phẩm | QSEE" };
  }
  return {
    title: `${product.title} | QSEE`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const detail = buildProductPageDetail(product);
  const shareUrl = await absoluteUrl(`/san-pham/${product.id}`);

  return (
    <main className="border-b bg-white pt-[88px] pb-16 md:pt-[120px] dark:bg-black">
      <div className="container px-4">
        <nav className="text-body-color dark:text-body-color-dark mb-8 text-sm">
          <Link
            href="/"
            className="hover:text-[#0056b3] dark:hover:text-sky-400"
          >
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          {/* <Link
            href="/#products"
            className="hover:text-[#0056b3] dark:hover:text-sky-400"
          >
            Sản phẩm
          </Link>
          <span className="mx-2 text-gray-400">/</span> */}
          <span className="text-[#0a2540] dark:text-gray-200">
            {product.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <ProductImageGallery
              images={detail.galleryImages}
              productTitle={product.title}
            />
          </div>

          <div className="md:col-span-2">
            <h1 className="mb-6 text-2xl leading-tight font-bold text-[#0a2540] md:text-3xl dark:text-white">
              {product.title}
            </h1>
            <ul className="mb-8 list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {detail.summaryBullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <section aria-labelledby="product-details-heading">
              <div className="flex items-stretch border-t border-r border-gray-200 dark:border-gray-700">
                <h2
                  id="product-details-heading"
                  className="bg-primary inline-flex shrink-0 items-center px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] text-white uppercase md:text-xs"
                >
                  Thông tin chi tiết
                </h2>
              </div>

              <div className="mt-0 border border-t-0 border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-900/30">
                <div dangerouslySetInnerHTML={{ __html: detail.details }} />
              </div>

              {/* <div className="mt-0 border border-t-0 border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-900/30">
                <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {detail.detailIntro}
                </p>
                <p className="mb-4 text-lg font-bold text-[#0a2540] dark:text-white">
                  {detail.detailSubtitle}
                </p>
                {detail.detailCompliance ? (
                  <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {detail.detailCompliance}
                  </p>
                ) : null}
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {detail.detailBullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div> */}
            </section>
            <div>
              <p className="text-body-color dark:text-body-color-dark my-3 text-sm font-medium">
                Chia sẻ:
              </p>
              <ProductSocialShare shareUrl={shareUrl} title={product.title} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
