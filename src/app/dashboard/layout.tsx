"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, Heart, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", icon: User, label: "Profile" },
    { href: "/dashboard/orders", icon: Package, label: "Orders" },
    { href: "/dashboard/wishlist", icon: Heart, label: "Wishlist" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-black uppercase mb-8">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm whitespace-nowrap transition-colors font-bold uppercase tracking-wider text-sm ${
                    isActive 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-secondary/30 text-foreground hover:bg-secondary/60 hover:text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
            
            <div className="md:mt-8 pt-0 md:pt-4 border-0 md:border-t border-border">
              <Link 
                href="/login"
                className="flex items-center gap-3 px-4 py-3 rounded-sm whitespace-nowrap transition-colors font-bold uppercase tracking-wider text-sm text-destructive hover:bg-destructive/10"
              >
                <LogOut className="w-5 h-5" />
                Log Out
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
