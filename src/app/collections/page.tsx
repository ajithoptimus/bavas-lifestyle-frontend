import { ShopSidebar } from "@/components/sections/ShopSidebar";
import { ShopGrid } from "@/components/sections/ShopGrid";

export const metadata = {
  title: "Lifestyle Collections | Bavas Lifestyle",
  description: "Browse our premium Lifestyle collections.",
};

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <ShopSidebar />
      <ShopGrid collection="Lifestyle" />
    </div>
  );
}
