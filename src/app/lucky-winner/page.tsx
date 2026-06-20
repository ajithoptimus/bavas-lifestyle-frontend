"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuckyWinnerPage() {
  const [ticket, setTicket] = useState("");
  const [status, setStatus] = useState<'idle' | 'checking' | 'won' | 'lost'>('idle');

  const checkTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticket) return;
    
    setStatus('checking');
    setTimeout(() => {
      // Simulate 1 in 3 chance of winning for demo
      const didWin = Math.random() > 0.6;
      setStatus(didWin ? 'won' : 'lost');
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] bg-secondary/10 py-12 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-border">
          
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-10 h-10 text-primary" />
          </div>

          <h1 className="font-black text-3xl md:text-4xl uppercase tracking-tight text-foreground mb-4">
            Scratch & Win
          </h1>
          <p className="text-muted-foreground mb-8">
            Enter the 8-digit lucky code printed on your physical receipt to see if you&apos;ve won our monthly mega prize!
          </p>

          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={checkTicket} 
                className="space-y-4"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Ticket className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter Ticket Code (e.g. BVS-1234)" 
                    value={ticket}
                    onChange={(e) => setTicket(e.target.value.toUpperCase())}
                    className="w-full bg-secondary/30 text-lg font-bold tracking-widest text-center border border-border rounded-lg pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary uppercase transition-shadow"
                    maxLength={10}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg font-black uppercase tracking-wider shadow-lg bg-gradient-to-r from-primary to-primary/80 text-white">
                  Reveal Prize
                </Button>
              </motion.form>
            )}

            {status === 'checking' && (
              <motion.div 
                key="checking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
                <p className="font-bold text-lg animate-pulse uppercase tracking-widest">Scratching Ticket...</p>
              </motion.div>
            )}

            {status === 'won' && (
              <motion.div 
                key="won"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-br from-accent to-[#F9A826] p-8 rounded-xl text-white shadow-xl relative overflow-hidden"
              >
                <Sparkles className="absolute top-4 left-4 w-8 h-8 opacity-50 animate-pulse" />
                <Sparkles className="absolute bottom-4 right-4 w-8 h-8 opacity-50 animate-pulse" />
                
                <h2 className="font-black text-4xl uppercase mb-2 drop-shadow-md">You Won!</h2>
                <p className="font-bold text-lg mb-6 text-white/90">Rs. 5000 Shopping Voucher</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 font-mono font-black text-2xl tracking-widest border border-white/40 mb-6">
                  {ticket}
                </div>
                <p className="text-sm font-medium">Show this screen at the billing counter to claim your prize.</p>
                <Button variant="outline" className="mt-6 w-full font-bold uppercase text-accent border-white hover:bg-white/10" onClick={() => setStatus('idle')}>
                  Play Again
                </Button>
              </motion.div>
            )}

            {status === 'lost' && (
              <motion.div 
                key="lost"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/50 p-8 rounded-xl"
              >
                <h2 className="font-black text-2xl text-foreground uppercase mb-2">Better Luck Next Time</h2>
                <p className="text-muted-foreground mb-6">This ticket code didn&apos;t win today, but keep shopping for more chances!</p>
                <Button variant="outline" className="w-full font-bold uppercase" onClick={() => setStatus('idle')}>
                  Try Another Code
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
