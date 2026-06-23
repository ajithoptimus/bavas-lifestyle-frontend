import { ShopSidebar } from "@/components/sections/ShopSidebar";
import { ShopGrid } from "@/components/sections/ShopGrid";

export const metadata = {
  title: "Men's Fashion | Bavas Lifestyle",
  description: "Browse our collection of Men's clothing.",
};

export default function MensShopPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <ShopSidebar />
      <ShopGrid category="Men" />
    </div>
  );
}
