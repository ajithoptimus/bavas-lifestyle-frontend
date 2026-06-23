import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart } from 'lucide-react';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <Link href={`/shop/${product.slug}`} className={cn("group flex flex-col bg-card rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-border", className)}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-secondary/20 overflow-hidden">
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/40 text-muted-foreground text-xs uppercase tracking-widest font-bold">No Image</div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNewArrival && (
            <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black uppercase px-2 py-1 shadow-sm">New</span>
          )}
          {product.originalPrice && (
            <span className="bg-destructive/90 backdrop-blur-sm text-white text-[10px] font-black uppercase px-2 py-1 shadow-sm">Sale</span>
          )}
        </div>

        {/* Quick Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            // In a real app, this would toggle wishlist state and show a toast
          }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary hover:bg-white shadow-sm"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-1 bg-white flex-grow">
        <h3 className="font-bold text-foreground text-sm truncate">{product.category.toUpperCase()}</h3>
        <p className="text-sm text-muted-foreground truncate mb-1">{product.name}</p>
        <div className="mt-auto flex items-baseline gap-2">
          <span className="font-bold text-sm text-foreground">Rs. {product.price.toFixed(0)}</span>
          {product.originalPrice && (
            <>
              <span className="text-xs text-muted-foreground line-through">Rs. {product.originalPrice.toFixed(0)}</span>
              <span className="text-xs font-bold text-destructive">({discount}% OFF)</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
