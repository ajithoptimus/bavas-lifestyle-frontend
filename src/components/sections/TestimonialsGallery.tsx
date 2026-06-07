"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  { name: "Rahul S.", review: "Bavas Lifestyle has completely changed how I shop for my family. The World Cup collection is absolutely premium yet so affordable!", rating: 5 },
  { name: "Aisha M.", review: "I won the Lucky Draw last month! The golden coupon system is genuine and exciting. Highly recommend shopping here.", rating: 5 },
  { name: "Thomas K.", review: "Great quality clothes. The customer service is fast and they really treat you like family.", rating: 4 },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80",
  "https://images.unsplash.com/photo-1485230895905-eb56b6c0bcbb?w=400&q=80",
];

export function TestimonialsGallery() {
  return (
    <section className="py-24 bg-muted border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">What Our Family Says</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-accent' : 'fill-muted/30'}`} />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">&quot;{t.review}&quot;</p>
                <p className="font-bold text-foreground mt-auto">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">@BavasLifestyle</h2>
            <p className="text-muted-foreground">Follow us on Instagram for daily inspiration.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={img}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">Shop Look</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
