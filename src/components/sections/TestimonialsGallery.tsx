import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80",
  "https://images.unsplash.com/photo-1485230895905-eb56b6c0bcbb?w=400&q=80",
];

export function TestimonialsGallery() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-black text-2xl uppercase tracking-wide text-foreground mb-2">Shop The Look</h2>
          <p className="text-muted-foreground text-sm">Follow @BavasLifestyle on Instagram</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src={img}
                alt="Instagram look"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase text-sm border-2 border-white px-4 py-2">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
