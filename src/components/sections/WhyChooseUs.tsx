import { ShieldCheck, Truck, Clock } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "100% Original", desc: "Guaranteed authentic products" },
  { icon: Truck, title: "Free Delivery", desc: "On orders over Rs. 999" },
  { icon: Clock, title: "Easy Returns", desc: "15-day return policy" },
];

export function WhyChooseUs() {
  return (
    <section className="py-8 bg-secondary/10 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <Icon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-bold text-sm uppercase">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
