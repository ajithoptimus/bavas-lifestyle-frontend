import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Recycle, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80" 
          alt="Bavas Lifestyle Store" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            Redefining premium fashion by making it accessible to everyone. We believe that looking good shouldn't break the bank.
          </p>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-20 px-4 container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-black uppercase mb-8">The Bavas Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Founded with a simple yet powerful idea: high-quality lifestyle products should be available to everyone, regardless of their budget. At Bavas Lifestyle, we meticulously design and source fashion that empowers you to express your true self. We skip the middleman to pass the savings directly to you.
        </p>
      </section>

      {/* Core Values */}
      <section className="bg-secondary/20 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-black uppercase mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-border rounded-sm shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-bold uppercase tracking-wider mb-3">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Every thread, button, and zipper is rigorously tested to ensure it meets our strict quality standards.</p>
            </div>
            
            <div className="bg-white p-8 border border-border rounded-sm shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold uppercase tracking-wider mb-3">100% Authentic</h3>
              <p className="text-sm text-muted-foreground">We guarantee the authenticity of every product we sell. No knock-offs, no compromises.</p>
            </div>
            
            <div className="bg-white p-8 border border-border rounded-sm shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="font-bold uppercase tracking-wider mb-3">Sustainable</h3>
              <p className="text-sm text-muted-foreground">We are committed to reducing our carbon footprint through eco-friendly packaging and ethical sourcing.</p>
            </div>
            
            <div className="bg-white p-8 border border-border rounded-sm shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-bold uppercase tracking-wider mb-3">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Our optimized logistics network ensures your new favorite outfit arrives at your doorstep in record time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Ready to upgrade your wardrobe?</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of happy customers who have already discovered the Bavas Lifestyle difference.
        </p>
        <Link href="/shop">
          <Button size="lg" className="h-14 px-10 font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-xl">
            Start Shopping Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
