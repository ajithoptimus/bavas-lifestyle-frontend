"use client";

import { motion } from "framer-motion";
import { Ticket, ShoppingBag, Gift, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: ShoppingBag,
    title: "Step 1: Shop",
    description: "Purchase any item from our Bavas Lifestyle collections.",
  },
  {
    icon: Ticket,
    title: "Step 2: Receive Coupon",
    description: "Get an exclusive golden coupon with your purchase.",
  },
  {
    icon: ShieldCheck,
    title: "Step 3: Register",
    description: "Register your unique coupon code securely on our platform.",
  },
  {
    icon: Gift,
    title: "Step 4: Win",
    description: "Enter our monthly draw for a chance to win exciting premium gifts!",
  },
];

export function CouponPromotion() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Visuals */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-full max-w-md aspect-[3/4] bg-primary rounded-2xl p-8 shadow-2xl overflow-hidden border-4 border-secondary flex flex-col items-center justify-center text-primary-foreground"
              initial={{ rotate: -5, opacity: 0, scale: 0.9 }}
              whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
              
              <Ticket className="w-24 h-24 text-accent mb-6" />
              <h3 className="font-serif text-3xl font-bold mb-2 text-center">GOLDEN TICKET</h3>
              <p className="text-secondary tracking-widest uppercase text-sm font-semibold mb-8">Monthly Lucky Draw</p>
              
              <div className="w-full bg-primary-foreground/10 p-4 rounded-lg border border-secondary/30 mb-8 backdrop-blur-sm">
                <p className="text-center font-mono text-xl tracking-[0.2em] text-accent">BVS-XXXX-XXXX</p>
              </div>

              <p className="text-sm text-primary-foreground/80 text-center">Register this code online to enter the next draw!</p>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Turn Your Shopping Into <span className="text-primary">Winning</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                At Bavas Lifestyle, we believe in rewarding our family. Every purchase brings you closer to exciting premium gifts through our legendary Monthly Lucky Winner Program.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  );
                })}
              </div>

              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm">
                <Link href="/lucky-winner" className="flex items-center gap-2">
                  Register Your Coupon <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
