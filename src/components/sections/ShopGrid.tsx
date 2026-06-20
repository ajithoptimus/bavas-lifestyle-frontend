"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "@/components/common/ProductCard";
import { productsService } from "@/services/products.service";
import { Product } from "@/types/product";

export function ShopGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productsService.getAllProducts().then(data => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex-1 p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className="bg-secondary/30 aspect-[3/4] rounded-sm"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-lg text-foreground">Showing {products.length} Products</h2>
        <select className="bg-background border border-border text-sm rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest Arrivals</option>
        </select>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
