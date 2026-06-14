"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "@/components/common/ProductCard";
import { productsService } from "@/services/products.service";
import { Product } from "@/types/product";
import { Timer } from "lucide-react";

export function WorldCupDeals() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    productsService.getProductsByCollection('World Cup').then(data => {
      if (data.length === 0) {
        productsService.getAllProducts().then(setProducts);
      } else {
        setProducts(data);
      }
    });
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="font-black text-2xl uppercase tracking-wide text-foreground mb-2">Deal of the Day</h2>
            <p className="text-muted-foreground text-sm">Special World Cup Edition Offers</p>
          </div>
          <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-sm font-bold">
            <Timer className="w-4 h-4 animate-pulse" />
            <span>Ends in: 12h 08m 45s</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
