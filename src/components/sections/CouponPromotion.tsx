import Link from "next/link";
import { Gift, ShoppingBag, Trophy } from "lucide-react";

export function CouponPromotion() {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#F4C542] to-[#F9A826] rounded-xl p-8 md:p-12 shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 md:w-1/2 text-center md:text-left">
            <span className="bg-white text-black text-xs font-black uppercase px-3 py-1 rounded-sm mb-4 inline-block tracking-widest shadow-sm">
              Rewards Program
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 leading-tight">
              Win Big Every<br/>Month!
            </h2>
            <p className="text-white/90 text-lg mb-8 font-medium">
              Shop with us and enter the Lucky Draw to win massive rewards, exclusive discounts, and free apparel!
            </p>
            <Link href="/lucky-winner" className="inline-block bg-white text-black font-bold uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-black hover:text-white transition-colors shadow-lg">
              Unlock Rewards
            </Link>
          </div>

          <div className="relative z-10 w-full md:w-1/3 bg-white rounded-lg p-6 shadow-xl">
            <h3 className="font-bold text-center mb-6 uppercase text-sm text-muted-foreground">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-accent">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Shop</h4>
                  <p className="text-xs text-muted-foreground">Make a purchase at any store.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-accent">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Get Coupon</h4>
                  <p className="text-xs text-muted-foreground">Receive your lucky ticket.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-accent">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Win Prizes</h4>
                  <p className="text-xs text-muted-foreground">Join the monthly mega draw.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
