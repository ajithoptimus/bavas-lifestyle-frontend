"use client";

import { useState } from "react";

export function ShopSidebar() {
  const [priceRange, setPriceRange] = useState(5000);

  return (
    <aside className="w-full md:w-64 flex-shrink-0 bg-background border-r border-border p-6 hidden md:block">
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Categories</h3>
        <div className="space-y-3">
          {['Men', 'Women', 'Kids', 'Lifestyle'].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <input type="checkbox" id={`cat-${category}`} className="w-4 h-4 accent-primary rounded-sm border-border cursor-pointer" />
              <label htmlFor={`cat-${category}`} className="text-sm font-medium leading-none cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Collections</h3>
        <div className="space-y-3">
          {['World Cup', 'Summer', 'Winter', 'Festival'].map((collection) => (
            <div key={collection} className="flex items-center space-x-2">
              <input type="checkbox" id={`col-${collection}`} className="w-4 h-4 accent-primary rounded-sm border-border cursor-pointer" />
              <label htmlFor={`col-${collection}`} className="text-sm font-medium leading-none cursor-pointer">
                {collection}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Max Price</h3>
        <input
          type="range"
          min={0}
          max={10000}
          step={100}
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full mb-4 accent-primary"
        />
        <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>Rs. 0</span>
          <span>Rs. {priceRange}</span>
        </div>
      </div>
    </aside>
  );
}
