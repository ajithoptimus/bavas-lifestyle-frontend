import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Men", slug: "mens-wear", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80" },
  { name: "Women", slug: "womens-wear", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
  { name: "Kids", slug: "kids-wear", image: "https://images.unsplash.com/photo-1519238263530-99bea0040865?w=400&q=80" },
  { name: "Beauty", slug: "beauty", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=80" },
  { name: "Home", slug: "home", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { name: "Footwear", slug: "footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
];

export function FeaturedCategories() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-black text-2xl uppercase tracking-wide mb-8 text-foreground">Shop By Category</h2>
        <div className="flex overflow-x-auto pb-4 gap-6 md:gap-10 justify-start lg:justify-center" style={{ scrollbarWidth: 'none' }}>
          {categories.map((cat, i) => (
            <Link key={i} href={`/collections/${cat.slug}`} className="flex flex-col items-center gap-3 group min-w-[80px]">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors uppercase">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
