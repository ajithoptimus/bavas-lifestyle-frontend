"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate login
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-md w-full bg-white p-8 border border-border shadow-2xl rounded-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground">Welcome Back</h2>
          <p className="text-sm text-muted-foreground mt-2">Log in to manage your orders, wishlist, and profile.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Email or Mobile Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                required
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Enter your email or mobile"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold uppercase tracking-wider text-foreground">Password</label>
              <Link href="#" className="text-xs font-bold text-primary hover:underline uppercase tracking-wide">
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                required
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <Button type="submit" disabled={isProcessing} className="w-full h-12 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-md">
            {isProcessing ? "Authenticating..." : "Log In"}
          </Button>
        </form>

        <div className="mt-8 text-center border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            New to Bavas Lifestyle?{" "}
            <Link href="/register" className="font-bold text-primary hover:underline uppercase tracking-wide ml-1">
              Create an account
            </Link>
          </p>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground opacity-70">
          <ShieldCheck className="w-4 h-4" />
          <span>Secure Encrypted Login</span>
        </div>
      </div>
    </div>
  );
}
