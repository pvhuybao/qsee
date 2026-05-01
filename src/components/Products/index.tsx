"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { productCategories, products } from "@/data/productsData";
import type { ProductCategoryId } from "@/types/product";

const primary = "#0056b3";

function TabIcon({
  name,
}: {
  name: (typeof productCategories)[number]["icon"];
}) {
  const className = "h-[18px] w-[18px] shrink-0";
  switch (name) {
    case "grid":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "frame":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7h16v10H4z" />
          <path d="M8 7v10M16 7v10" />
        </svg>
      );
    case "panel":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="4" width="20" height="14" rx="1" />
          <path d="M6 8h4M14 8h4M6 12h12M6 16h8" />
        </svg>
      );
    case "inverter":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="6" width="16" height="12" rx="1" />
          <path d="M9 10h6M9 14h4" />
        </svg>
      );
    case "cable":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 12c2-4 6-4 8 0s6 4 8 0" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      );
    default:
      return null;
  }
}

function FeatureIcon({ type }: { type: "check" | "zap" | "spool" }) {
  const className = "h-5 w-5 shrink-0";
  const stroke = primary;
  if (type === "check") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="2.2"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    );
  }
  if (type === "zap") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      >
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
    >
      <ellipse cx="12" cy="12" rx="8" ry="5" />
      <path d="M8 12h8" />
    </svg>
  );
}

const Products = () => {
  const [active, setActive] = useState<ProductCategoryId>("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.categoryId === active);
  }, [active]);

  return (
    <section id="products" className="dark:bg-gray-dark bg-white py-10">
      <div className="container">
        <header className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-wide text-[#0a2540] md:text-3xl dark:text-white">
            SẢN PHẨM
          </h2>
        </header>

        <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {productCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold transition md:px-4 md:text-sm ${
                  isActive
                    ? "border-transparent text-white shadow-sm"
                    : "text-body-color border-stroke-stroke dark:border-stroke-dark dark:bg-gray-dark dark:text-body-color-dark bg-white hover:border-gray-300 dark:hover:border-gray-600"
                }`}
                style={
                  isActive
                    ? { backgroundColor: primary, borderColor: primary }
                    : undefined
                }
              >
                <TabIcon name={cat.icon} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-body-color dark:text-body-color-dark text-center text-base">
            Danh mục này đang được cập nhật. Vui lòng liên hệ để được tư vấn.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="border-stroke-stroke dark:border-stroke-dark shadow-one dark:bg-gray-dark flex flex-col overflow-hidden rounded-xl border bg-white"
              >
                <div className="border-stroke-stroke dark:border-stroke-dark relative aspect-[4/3] w-full border-b bg-gray-50 dark:bg-gray-800/50">
                  {item.badge ? (
                    <span className="absolute top-3 left-3 z-10 max-w-[70%] rounded-md bg-red-600 px-2 py-1 text-[10px] font-semibold text-white md:text-xs">
                      {item.badge}
                    </span>
                  ) : null}
                  {/* {item.brandLogo ? (
                    <div className="absolute top-3 right-3 z-10 shadow-sm">
                      <Image
                        src={item.brandLogo}
                        alt="Thương hiệu"
                        width={88}
                        height={28}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                  ) : null} */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-base leading-snug font-bold text-[#0a2540] md:text-lg dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div
                    className="mb-4 flex items-center gap-2 text-sm font-semibold"
                    style={{ color: primary }}
                  >
                    <FeatureIcon type={item.featureIcon} />
                    <span>{item.featureText}</span>
                  </div>
                  <Link
                    href={`/san-pham/${item.id}`}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                    style={{ backgroundColor: primary }}
                  >
                    XEM THÊM
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
