import Image from "next/image";
import { productsService } from "@/services/products.service";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Star, Truck, ShieldCheck, Heart } from "lucide-react";
import { ProductDetailsClient } from "@/components/sections/ProductDetailsClient";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = await productsService.getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Image Gallery */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="relative aspect-[3/4] w-full bg-secondary/20 rounded-sm overflow-hidden">
            <Image 
              src={product.images[0]} 
              alt={product.name} 
              fill 
              className="object-cover" 
            />
          </div>
          {/* Thumbnails if multiple images exist */}
          <div className="grid grid-cols-4 gap-2">
             {product.images.map((img, i) => (
               <div key={i} className="relative aspect-square bg-secondary/20 rounded-sm overflow-hidden border border-border cursor-pointer">
                 <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
               </div>
             ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 flex flex-col">
          <div className="mb-6">
            <h1 className="font-black text-3xl md:text-4xl text-foreground mb-2">{product.name}</h1>
            <h2 className="font-bold text-muted-foreground uppercase tracking-widest text-sm mb-4">{product.category}</h2>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex bg-secondary/50 px-2 py-1 rounded-sm items-center gap-1">
                <span className="font-bold text-sm">{product.rating}</span>
                <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              </div>
              <span className="text-muted-foreground text-sm border-l border-border pl-2">{product.reviewsCount} Ratings</span>
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-black text-3xl text-foreground">Rs. {product.price.toFixed(0)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">Rs. {product.originalPrice.toFixed(0)}</span>
                  <span className="font-bold text-destructive text-lg">({discount}% OFF)</span>
                </>
              )}
            </div>
            <p className="text-sm text-green-600 font-bold mb-6">inclusive of all taxes</p>

            <ProductDetailsClient product={product} />

            {/* Product Details & Trust */}
            <div className="border-t border-border pt-6">
              <h3 className="font-bold uppercase text-sm mb-3 flex items-center gap-2">
                Product Details
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-medium">100% Original</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
