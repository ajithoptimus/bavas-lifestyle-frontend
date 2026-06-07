import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif font-bold text-2xl text-primary">BAVAS LIFESTYLE</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/shop" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Collections
            </Link>
            <Link href="/lucky-winner" className="flex items-center text-sm font-medium text-accent hover:text-primary transition-colors">
              Lucky Winner
            </Link>
            <Link href="/offers" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Offers
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
