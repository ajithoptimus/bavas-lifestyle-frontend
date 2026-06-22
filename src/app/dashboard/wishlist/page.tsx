"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Mock initial wishlist
const initialWishlist = [
  {
    id: "prod_2",
    name: "World Cup Edition Jersey Style Tee",
    price: 19.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1508215885820-4585e56109c8?w=800&q=80",
    category: "Men",
    productObj: { // Mock full product object for cart
      id: "prod_2",
      name: "World Cup Edition Jersey Style Tee",
      price: 19.99,
      category: "Men",
      images: ["https://images.unsplash.com/photo-1508215885820-4585e56109c8?w=800&q=80"],
      sizes: ["M", "L", "XL"]
    }
  }
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const { addToCart } = useCart();

  const handleRemove = (id: string) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const handleMoveToBag = (item: any) => {
    // Add default size (usually user selects it, but keeping it simple for mock)
    // @ts-ignore
    addToCart(item.productObj, item.productObj.sizes[0]);
    handleRemove(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="bg-white border border-border p-12 rounded-sm shadow-sm flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-muted-foreground" />
        </div>
        <h2 className="font-black text-xl uppercase mb-2">Wishlist is Empty</h2>
        <p className="text-muted-foreground mb-6">Save items you love and buy them later.</p>
        <Link href="/shop">
          <Button className="font-bold uppercase tracking-widest px-8 shadow-md">Explore Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border p-6 md:p-8 rounded-sm shadow-sm">
      <h2 className="font-black text-xl uppercase mb-6 border-b border-border pb-4">My Wishlist <span className="text-muted-foreground text-base">({wishlist.length})</span></h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="group border border-border rounded-sm overflow-hidden flex flex-col">
            <div className="relative aspect-[3/4] bg-secondary/20 w-full overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <button 
                onClick={() => handleRemove(item.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-white transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-sm line-clamp-2 mb-2">{item.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-black text-foreground">Rs. {item.price}</span>
                {item.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">Rs. {item.originalPrice}</span>
                )}
              </div>
              
              <Button 
                onClick={() => handleMoveToBag(item)}
                className="w-full mt-auto font-bold uppercase tracking-wider text-xs border-primary text-primary hover:bg-primary hover:text-white transition-colors" 
                variant="outline"
              >
                <ShoppingBag className="w-4 h-4 mr-2" /> Move to Bag
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Temporary inline import since we used it in the empty state
import { Heart } from "lucide-react";
