import { ShopSidebar } from "@/components/sections/ShopSidebar";
import { ShopGrid } from "@/components/sections/ShopGrid";

export const metadata = {
  title: "Women's Fashion | Bavas Lifestyle",
  description: "Browse our collection of Women's clothing.",
};

export default function WomensShopPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <ShopSidebar />
      <ShopGrid category="Women" />
    </div>
  );
}
