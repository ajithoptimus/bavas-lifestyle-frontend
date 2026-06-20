"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  product: Product;
  selectedSize: string;
}

export function AddToCartButton({ product, selectedSize }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert("Please select a size first!");
      return;
    }
    addToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Button 
      size="lg" 
      onClick={handleAdd}
      className={`flex-1 font-bold uppercase tracking-wider h-14 rounded-sm shadow-xl transition-all ${
        isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'
      } text-white`}
    >
      {isAdded ? "Added to Bag \u2713" : "Add to Bag"}
    </Button>
  );
}
