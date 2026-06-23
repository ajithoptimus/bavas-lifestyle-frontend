import { ShopSidebar } from "@/components/sections/ShopSidebar";
import { ShopGrid } from "@/components/sections/ShopGrid";

export const metadata = {
  title: "Special Offers | Bavas Lifestyle",
  description: "Browse discounted products and special offers.",
};

export default function OffersPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <ShopSidebar />
      {/* We don't have an offers filter in mock data yet, so we just show all products for now */}
      <ShopGrid />
    </div>
  );
}
