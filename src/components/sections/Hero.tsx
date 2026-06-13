import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full bg-secondary/20 pt-4 pb-8">
      <div className="container mx-auto px-4">
        <Link href="/offers" className="block relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden group">
          <Image 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80" 
            alt="End of Season Sale" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-10 md:px-20">
            <span className="text-accent font-bold tracking-widest uppercase mb-2">Crazy Deals</span>
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase mb-4 leading-tight">
              End of<br />Season Sale
            </h2>
            <p className="text-white/90 text-xl font-medium mb-8">Min 50% - 80% Off on Top Brands</p>
            <button className="bg-white text-foreground font-bold px-8 py-3 w-max hover:bg-primary hover:text-white transition-colors">
              Explore Now
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}
