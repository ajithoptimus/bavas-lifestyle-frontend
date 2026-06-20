"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartSubtotal, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-black uppercase mb-4">Your Bag is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven&apos;t added anything to your bag yet.</p>
        <Link href="/shop">
          <Button size="lg" className="font-bold uppercase tracking-widest px-8">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  const discount = cartSubtotal - cartTotal;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-black uppercase mb-8">Shopping Bag <span className="text-muted-foreground text-xl">({items.length} items)</span></h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}`} className="flex gap-6 border border-border p-4 rounded-sm bg-white shadow-sm">
              <div className="relative w-24 sm:w-32 aspect-[3/4] bg-secondary/20 rounded-sm overflow-hidden flex-shrink-0">
                <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
              </div>
              
              <div className="flex flex-col flex-grow justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-foreground line-clamp-2 pr-4">{item.product.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{item.product.category}</p>
                  
                  {item.size && (
                    <div className="bg-secondary/30 inline-block px-2 py-1 rounded-sm text-xs font-bold text-muted-foreground mb-4">
                      Size: {item.size}
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-border rounded-sm">
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                      className="w-8 h-8 flex items-center justify-center font-bold hover:bg-secondary/20 transition-colors"
                    >-</button>
                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                      className="w-8 h-8 flex items-center justify-center font-bold hover:bg-secondary/20 transition-colors"
                    >+</button>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-black text-lg">Rs. {item.product.price}</div>
                    {item.product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">Rs. {item.product.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="border border-border rounded-sm bg-white p-6 sticky top-24 shadow-sm">
            <h2 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6 border-b border-border pb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">Rs. {cartSubtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount on MRP</span>
                  <span className="font-bold">- Rs. {discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platform Fee</span>
                <span className="font-medium">Rs. 20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping Fee</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="font-bold uppercase text-sm">Total Amount</span>
              <span className="font-black text-2xl">Rs. {cartTotal + 20}</span>
            </div>

            <Link href="/checkout">
              <Button size="lg" className="w-full h-14 font-black uppercase tracking-wider bg-primary hover:bg-primary/90 text-white shadow-xl flex items-center justify-center gap-2">
                Checkout <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Safe and Secure Payments. 100% Authentic products.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
