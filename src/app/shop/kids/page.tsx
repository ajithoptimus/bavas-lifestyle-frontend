import { ShopSidebar } from "@/components/sections/ShopSidebar";
import { ShopGrid } from "@/components/sections/ShopGrid";

export const metadata = {
  title: "Kids Fashion | Bavas Lifestyle",
  description: "Browse our collection of Kids clothing.",
};

export default function KidsShopPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <ShopSidebar />
      <ShopGrid category="Kids" />
    </div>
  );
}
