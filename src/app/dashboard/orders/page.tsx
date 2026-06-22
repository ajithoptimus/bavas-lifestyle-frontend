import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";

// Mock data for orders
const mockOrders = [
  {
    id: "BVS-849302",
    date: "12 June 2026",
    total: 2499,
    status: "Delivered",
    items: [
      { name: "Classic Men's Premium Oxford Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=800&q=80", size: "L" }
    ]
  },
  {
    id: "BVS-739104",
    date: "05 May 2026",
    total: 4598,
    status: "In Transit",
    items: [
      { name: "World Cup Edition Jersey Style Tee", image: "https://images.unsplash.com/photo-1508215885820-4585e56109c8?w=800&q=80", size: "M" },
      { name: "Women's Elegant Summer Dress", image: "https://images.unsplash.com/photo-1515347619362-7101e4ee4d3c?w=800&q=80", size: "S" }
    ]
  }
];

export default function OrdersPage() {
  return (
    <div className="bg-white border border-border p-6 md:p-8 rounded-sm shadow-sm">
      <h2 className="font-black text-xl uppercase mb-6 border-b border-border pb-4">Order History</h2>
      
      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div key={order.id} className="border border-border rounded-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Order Header */}
            <div className="bg-secondary/20 p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-border">
              <div className="flex gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Order Placed</p>
                  <p className="font-medium text-sm">{order.date}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Total</p>
                  <p className="font-medium text-sm">Rs. {order.total}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Order ID</p>
                  <p className="font-medium text-sm">{order.id}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="font-bold uppercase text-xs h-8">
                View Invoice
              </Button>
            </div>

            {/* Order Items & Status */}
            <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="flex-1 flex flex-col gap-4 w-full">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="relative w-16 h-20 bg-secondary/30 rounded-sm overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-start md:items-end gap-3 border-t md:border-t-0 border-border pt-4 md:pt-0">
                <div className="flex items-center gap-2">
                  {order.status === 'Delivered' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <Truck className="w-5 h-5 text-accent" />
                  )}
                  <span className={`font-bold uppercase tracking-widest text-sm ${order.status === 'Delivered' ? 'text-green-600' : 'text-accent'}`}>
                    {order.status}
                  </span>
                </div>
                <Button className="w-full md:w-auto font-bold uppercase tracking-widest text-xs h-10 shadow-sm">
                  Track Package
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
