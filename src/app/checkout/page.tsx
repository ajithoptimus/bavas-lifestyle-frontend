"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h1 className="text-3xl font-black uppercase mb-4 text-green-600">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Thank you for shopping at Bavas Lifestyle. Your order #BVS-{Math.floor(Math.random() * 100000)} has been placed successfully.
        </p>
        <Link href="/shop">
          <Button size="lg" className="font-bold uppercase tracking-widest px-8">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-2xl font-black uppercase mb-4">Nothing to Checkout</h1>
        <p className="text-muted-foreground mb-8">Your bag is empty.</p>
        <Link href="/shop">
          <Button size="lg" className="font-bold uppercase tracking-widest px-8">Go to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-black uppercase mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <form onSubmit={handleCheckout} className="space-y-8">
            {/* Delivery Address */}
            <div className="border border-border p-6 rounded-sm shadow-sm bg-white">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Delivery Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name" className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <input required type="text" placeholder="Last Name" className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <input required type="tel" placeholder="Mobile Number" className="w-full md:col-span-2 bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <input required type="text" placeholder="Pin Code" className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <input required type="text" placeholder="City / District" className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <textarea required placeholder="Address (House No, Building, Street, Area)" rows={3} className="w-full md:col-span-2 bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border border-border p-6 rounded-sm shadow-sm bg-white">
              <h2 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border border-border rounded-sm cursor-pointer hover:bg-secondary/20 transition-colors">
                  <input type="radio" name="payment" value="upi" className="w-4 h-4 accent-primary" defaultChecked />
                  <span className="font-medium text-sm">UPI (GPay, PhonePe, Paytm)</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-border rounded-sm cursor-pointer hover:bg-secondary/20 transition-colors">
                  <input type="radio" name="payment" value="card" className="w-4 h-4 accent-primary" />
                  <span className="font-medium text-sm">Credit / Debit Card</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-border rounded-sm cursor-pointer hover:bg-secondary/20 transition-colors">
                  <input type="radio" name="payment" value="cod" className="w-4 h-4 accent-primary" />
                  <span className="font-medium text-sm">Cash on Delivery (COD)</span>
                </label>
              </div>
            </div>

            <Button type="submit" disabled={isProcessing} size="lg" className="w-full h-14 font-black uppercase tracking-wider bg-primary hover:bg-primary/90 text-white shadow-xl">
              {isProcessing ? "Processing Securely..." : `Pay Rs. ${cartTotal + 20}`}
            </Button>
          </form>
        </div>

        {/* Mini Order Summary */}
        <div className="lg:w-1/3">
          <div className="border border-border rounded-sm bg-white p-6 sticky top-24 shadow-sm">
            <h2 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Items in Order ({items.length})</h2>
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {items.map(item => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="relative w-16 aspect-[3/4] bg-secondary/20 rounded-sm overflow-hidden flex-shrink-0">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-bold text-sm line-clamp-1">{item.product.name}</span>
                    <span className="text-xs text-muted-foreground">Qty: {item.quantity} {item.size && `| Size: ${item.size}`}</span>
                    <span className="font-bold text-sm">Rs. {item.product.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 flex justify-between items-end">
              <span className="font-bold uppercase text-sm">Total to Pay</span>
              <span className="font-black text-2xl">Rs. {cartTotal + 20}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
