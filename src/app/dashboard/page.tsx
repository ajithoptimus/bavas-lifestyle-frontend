"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="bg-white border border-border p-6 md:p-8 rounded-sm shadow-sm">
      <h2 className="font-black text-xl uppercase mb-6 border-b border-border pb-4">Profile Details</h2>
      
      <form onSubmit={handleSave} className="space-y-6 max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">First Name</label>
            <input
              type="text"
              defaultValue="John"
              className="block w-full px-4 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="block w-full px-4 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Email Address</label>
          <input
            type="email"
            defaultValue="john.doe@example.com"
            disabled
            className="block w-full px-4 py-3 border border-border rounded-sm bg-secondary/10 text-sm text-muted-foreground cursor-not-allowed"
          />
          <p className="text-xs text-muted-foreground mt-1 font-medium">Email cannot be changed once registered.</p>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Mobile Number</label>
          <input
            type="tel"
            defaultValue="+91 9876543210"
            className="block w-full px-4 py-3 border border-border rounded-sm bg-secondary/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="pt-4 flex items-center gap-4">
          <Button type="submit" size="lg" className="h-12 px-8 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-md">
            Save Details
          </Button>
          
          {isSaved && (
            <span className="flex items-center gap-2 text-green-600 font-bold text-sm animate-in fade-in">
              <CheckCircle2 className="w-5 h-5" /> Profile Updated
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
