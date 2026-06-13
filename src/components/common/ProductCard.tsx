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
    <div className={cn("group flex flex-col bg-card hover:shadow-md transition-shadow duration-300 relative", className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30 mb-3">
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <button className="absolute top-2 right-2 z-10 bg-background/90 text-muted-foreground hover:text-destructive p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute bottom-2 left-2 z-10 bg-background/90 text-foreground text-xs font-bold px-1.5 py-0.5 flex items-center gap-1 rounded-sm shadow-sm">
          {product.rating} <Star className="h-3 w-3 fill-accent text-accent" /> | {product.reviewsCount}
        </div>
      </div>
      <div className="px-1 flex flex-col flex-grow">
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
    </div>
  );
}
