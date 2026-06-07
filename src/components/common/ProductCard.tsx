import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn("group flex flex-col bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {product.isNewArrival && (
          <span className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
            NEW
          </span>
        )}
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10 text-muted-foreground hover:text-primary hover:bg-background/80 bg-background/50 backdrop-blur-sm rounded-full h-8 w-8">
          <Heart className="h-4 w-4" />
        </Button>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex justify-center">
          <Button className="w-full bg-primary/90 hover:bg-primary backdrop-blur-md shadow-lg gap-2">
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">{product.rating} ({product.reviewsCount})</span>
        </div>
        <Link href={`/shop/${product.slug}`} className="hover:text-primary transition-colors">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-1">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
        <div className="mt-auto flex items-center gap-2">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
