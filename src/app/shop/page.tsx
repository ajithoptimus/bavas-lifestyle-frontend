import { ShopSidebar } from "@/components/sections/ShopSidebar";
import { ShopGrid } from "@/components/sections/ShopGrid";

export const metadata = {
  title: "Shop | Bavas Lifestyle",
  description: "Browse our entire collection of Men, Women, Kids, and Lifestyle products.",
};

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <ShopSidebar />
      <ShopGrid />
    </div>
  );
}
