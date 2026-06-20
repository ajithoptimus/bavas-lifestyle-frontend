"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20 gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-black text-2xl tracking-tight text-primary">BAVAS <span className="text-foreground">LIFESTYLE</span></h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 font-bold text-sm text-foreground/80">
            <Link href="/shop/mens" className="hover:text-primary transition-colors uppercase tracking-wide">Men</Link>
            <Link href="/shop/womens" className="hover:text-primary transition-colors uppercase tracking-wide">Women</Link>
            <Link href="/shop/kids" className="hover:text-primary transition-colors uppercase tracking-wide">Kids</Link>
            <Link href="/collections" className="hover:text-primary transition-colors uppercase tracking-wide">Lifestyle</Link>
            <Link href="/offers" className="text-destructive hover:text-destructive/80 transition-colors uppercase tracking-wide">Offers</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-grow max-w-xl relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input 
              type="text" 
              placeholder="Search for products, brands and more" 
              className="w-full bg-secondary/50 text-sm border-none rounded-sm pl-10 pr-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-border transition-shadow"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 ml-auto">
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary group hidden sm:flex">
              <User className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-bold">Profile</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary group hidden sm:flex">
              <Heart className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-bold">Wishlist</span>
            </div>
            <Link href="/cart" className="flex flex-col items-center gap-1 cursor-pointer hover:text-primary group">
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-destructive text-destructive-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold hidden sm:block">Bag</span>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full bg-secondary/50 text-sm border-none rounded-sm pl-10 pr-4 py-2.5 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-4 font-bold text-sm">
            <Link href="/shop/mens" className="uppercase">Men</Link>
            <Link href="/shop/womens" className="uppercase">Women</Link>
            <Link href="/shop/kids" className="uppercase">Kids</Link>
            <Link href="/offers" className="text-destructive uppercase">Offers</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
