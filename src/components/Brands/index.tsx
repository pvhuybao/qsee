import { Brand } from "@/types/brand";
import brandsData from "../../data/brandsData";

const Brands = () => {
  const loopItems = [...brandsData, ...brandsData];

  return (
    <section>
      <div className="bg-gray-light dark:bg-gray-dark w-full py-8">
        <h3 className="mb-8 text-center text-3xl leading-tight! font-bold text-black dark:text-white">
          Các đối tác của QSEE
        </h3>
        <div className="w-full overflow-hidden rounded-xs">
          <div className="brands-marquee-track">
            {loopItems.map((brand, index) => (
              <SingleBrand key={`${brand.id}-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="inline-flex shrink-0 items-center transition hover:opacity-85"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="w-autoobject-contain block h-20"
      />
    </a>
  );
};
