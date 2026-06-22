import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold text-2xl text-primary-foreground mb-4">BAVAS LIFESTYLE</h3>
            <p className="text-gray-400 mb-4">Fashion For Every Family. Premium lifestyle products at affordable prices.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm hover:text-accent font-medium text-gray-400 transition-colors">Facebook</Link>
              <Link href="#" className="text-sm hover:text-accent font-medium text-gray-400 transition-colors">Instagram</Link>
              <Link href="#" className="text-sm hover:text-accent font-medium text-gray-400 transition-colors">Twitter</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="/shop" className="hover:text-primary-foreground">Shop</Link></li>
              <li><Link href="/lucky-winner" className="hover:text-accent">Lucky Winner Program</Link></li>
              <li><Link href="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/shipping" className="hover:text-primary-foreground">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-primary-foreground">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="hover:text-primary-foreground">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-primary-foreground">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Kerala, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>support@bavaslifestyle.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bavas Lifestyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
