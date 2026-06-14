"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "@/components/common/ProductCard";
import { productsService } from "@/services/products.service";
import { Product } from "@/types/product";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    productsService.getAllProducts().then(data => {
      setProducts(data.filter(p => p.isNewArrival).slice(0, 4));
    });
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-black text-2xl uppercase tracking-wide text-foreground mb-1">New Arrivals</h2>
            <p className="text-muted-foreground text-sm">Fresh styles just landed.</p>
          </div>
          <Link href="/shop" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
