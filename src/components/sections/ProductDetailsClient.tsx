"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { AddToCartButton } from "@/components/common/AddToCartButton";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function ProductDetailsClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <>
      {/* Select Size */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-3">
          <h3 className="font-bold uppercase text-sm">Select Size</h3>
          <span className="text-primary font-bold text-xs uppercase cursor-pointer hover:underline">Size Chart</span>
        </div>
        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <button 
              key={size} 
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold transition-colors ${
                selectedSize === size 
                  ? 'border-primary text-primary bg-primary/10' 
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <AddToCartButton product={product} selectedSize={selectedSize} />
        <Button size="lg" variant="outline" className="flex-none w-14 h-14 rounded-sm border-border hover:bg-secondary/20">
          <Heart className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
}
