"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Men's Wear",
    slug: "mens-wear",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    description: "Premium shirts, tees, and trousers.",
  },
  {
    name: "Women's Wear",
    slug: "womens-wear",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    description: "Elegant dresses and casual fashion.",
  },
  {
    name: "Kids Wear",
    slug: "kids-wear",
    image: "https://images.unsplash.com/photo-1519238263530-99bea0040865?w=800&q=80",
    description: "Comfortable and playful styles.",
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    description: "Accessories and daily essentials.",
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Shop By Category</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/collections/${category.slug}`} className="group block relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
