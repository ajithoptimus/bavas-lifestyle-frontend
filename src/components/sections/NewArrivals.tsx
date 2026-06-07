"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/common/ProductCard";
import { productsService } from "@/services/products.service";
import { Product } from "@/types/product";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    productsService.getAllProducts().then(data => {
      // Filter for new arrivals and slice
      setProducts(data.filter(p => p.isNewArrival).slice(0, 4));
    });
  }, []);

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">New Arrivals</h2>
            <p className="text-muted-foreground">The latest additions to our premium family collections.</p>
          </div>
          <Button asChild variant="ghost" className="mt-4 sm:mt-0 text-primary hover:text-primary hover:bg-primary/10 group">
            <Link href="/shop" className="flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
