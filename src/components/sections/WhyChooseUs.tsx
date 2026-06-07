"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, ShieldCheck, HeartHandshake, Truck, Gift, Clock } from "lucide-react";

const features = [
  { icon: BadgeDollarSign, title: "Affordable Prices", desc: "Premium fashion that fits every family budget." },
  { icon: ShieldCheck, title: "Good Quality", desc: "Rigorous quality checks on all our products." },
  { icon: HeartHandshake, title: "Trusted Service", desc: "Thousands of happy customers across Kerala." },
  { icon: Gift, title: "Monthly Rewards", desc: "Our legendary Lucky Winner program." },
  { icon: Truck, title: "Fast Delivery", desc: "Quick and secure shipping to your doorstep." },
  { icon: Clock, title: "Fast Support", desc: "Dedicated customer service team ready to help." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6">Why Choose Bavas</h2>
          <p className="text-primary-foreground/80 text-lg">
            We are more than just a retail store. We are a part of your family&apos;s daily lifestyle, committed to bringing you the best value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mb-6 text-accent transform rotate-3 hover:rotate-6 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-primary-foreground/70">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
