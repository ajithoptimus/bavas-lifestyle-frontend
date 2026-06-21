"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock, Phone } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API registration
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-md w-full bg-white p-8 border border-border shadow-2xl rounded-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground">Create Account</h2>
          <p className="text-sm text-muted-foreground mt-2">Join us to track orders, save wishlists, and win big!</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                required
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                required
                type="email"
                className="block w-full pl-10 pr-3 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Mobile Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                required
                type="tel"
                className="block w-full pl-10 pr-3 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="10-digit number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Create Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                required
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Minimum 6 characters"
                minLength={6}
              />
            </div>
          </div>

          <Button type="submit" disabled={isProcessing} className="w-full h-12 mt-2 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-md">
            {isProcessing ? "Creating Account..." : "Sign Up"}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            By creating an account, you agree to our <Link href="#" className="text-primary hover:underline">Terms of Use</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </form>

        <div className="mt-8 text-center border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-primary hover:underline uppercase tracking-wide ml-1">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
