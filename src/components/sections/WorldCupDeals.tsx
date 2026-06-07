"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/common/ProductCard";
import { productsService } from "@/services/products.service";
import { Product } from "@/types/product";
import { Timer } from "lucide-react";

export function WorldCupDeals() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    productsService.getProductsByCollection('World Cup').then(data => {
      // If none found for World Cup, fallback to all for visual purposes in this demo phase
      if (data.length === 0) {
        productsService.getAllProducts().then(setProducts);
      } else {
        setProducts(data);
      }
    });
  }, []);

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">World Cup Deals</h2>
            <p className="text-muted-foreground">Limited time offers on our premium lifestyle selection.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-3 bg-card px-6 py-3 rounded-full border shadow-sm">
            <Timer className="w-5 h-5 text-accent animate-pulse" />
            <div className="flex gap-2 text-foreground font-mono font-bold">
              <div className="flex flex-col items-center"><span className="text-xl">12</span><span className="text-[10px] text-muted-foreground uppercase">Days</span></div>:
              <div className="flex flex-col items-center"><span className="text-xl">08</span><span className="text-[10px] text-muted-foreground uppercase">Hrs</span></div>:
              <div className="flex flex-col items-center"><span className="text-xl">45</span><span className="text-[10px] text-muted-foreground uppercase">Mins</span></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
