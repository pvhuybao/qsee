"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import * as React from "react";

type ProductImageGalleryProps = {
  images: string[];
  productTitle: string;
};

export default function ProductImageGallery({
  images,
  productTitle,
}: ProductImageGalleryProps) {
  const list = images.length > 0 ? images : ["/images/products/tam-nen.png"];
  const [api, setApi] = React.useState<CarouselApi>();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setActive(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => api?.scrollTo(index);
  const showNav = list.length > 1;

  return (
    <div className="space-y-4">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: showNav }}
        className="w-full"
      >
        <div className="relative aspect-80/60 w-full overflow-hidden rounded border border-gray-200 dark:border-gray-700">
          <div className="absolute inset-0 min-h-0 [&_[data-slot=carousel-content]]:h-full [&_[data-slot=carousel-content]>div]:h-full">
            <CarouselContent className="-ml-0 h-full">
              {list.map((src, i) => (
                <CarouselItem
                  key={`${src}-${i}`}
                  className="h-full basis-full pl-0"
                >
                  <div className="relative h-full min-h-0 w-full">
                    <Image
                      src={src}
                      alt={`${productTitle} — ảnh ${i + 1}`}
                      fill
                      className="object-contain"
                      priority={i === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          {showNav ? (
            <>
              <CarouselPrevious
                variant="outline"
                className="top-1/2 left-3 size-9 -translate-y-1/2 touch-manipulation rounded-full border-gray-200 bg-white/90 shadow-sm hover:bg-white dark:border-gray-600 dark:bg-gray-900/90 dark:hover:bg-gray-900"
              />
              <CarouselNext
                variant="outline"
                className="top-1/2 right-3 size-9 -translate-y-1/2 touch-manipulation rounded-full border-gray-200 bg-white/90 shadow-sm hover:bg-white dark:border-gray-600 dark:bg-gray-900/90 dark:hover:bg-gray-900"
              />
            </>
          ) : null}
        </div>
      </Carousel>
      <div className="flex flex-wrap gap-2">
        {list.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => scrollTo(i)}
            className={`relative h-16 w-16 shrink-0 overflow-hidden rounded border bg-[#f9fafb] transition dark:bg-gray-800/40 ${
              i === active
                ? "border-gray-500 ring-1 ring-gray-500 dark:border-gray-400"
                : "border-gray-200 hover:border-gray-300 dark:border-gray-600"
            }`}
            aria-label={`Ảnh ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
