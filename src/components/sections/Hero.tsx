"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80",
    title: "SUMMER ESSENTIALS",
    subtitle: "New arrivals are here. Upgrade your wardrobe.",
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80",
    title: "PREMIUM LIFESTYLE",
    subtitle: "Discover the luxury of comfort and style.",
  },
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
    title: "THE DENIM EDIT",
    subtitle: "Classic cuts. Modern fits. Built to last.",
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] lg:h-[85vh] bg-secondary flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[currentSlide].image}
            alt="Hero Fashion"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div 
          key={`text-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl text-white"
        >
          <h1 className="font-black text-5xl md:text-7xl leading-[1.1] tracking-tight uppercase mb-6 drop-shadow-lg">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 text-zinc-100 drop-shadow-md">
            {heroSlides[currentSlide].subtitle}
          </p>
          <Link href="/shop">
            <Button size="lg" className="h-14 px-10 text-base font-black uppercase tracking-widest bg-white text-black hover:bg-zinc-200 shadow-xl hover:-translate-y-1 transition-transform">
              Shop Now
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {heroSlides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? "w-8 bg-white" : "w-3 bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
