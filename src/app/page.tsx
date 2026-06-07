import { Hero } from "@/components/sections/Hero";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { WorldCupDeals } from "@/components/sections/WorldCupDeals";
import { CouponPromotion } from "@/components/sections/CouponPromotion";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsGallery } from "@/components/sections/TestimonialsGallery";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedCategories />
      <WorldCupDeals />
      <CouponPromotion />
      <NewArrivals />
      <WhyChooseUs />
      <TestimonialsGallery />
    </div>
  );
}
