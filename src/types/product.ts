export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'Men' | 'Women' | 'Kids' | 'Lifestyle';
  collection?: 'World Cup' | 'Festival' | 'Summer' | 'Winter';
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isNewArrival: boolean;
  rating: number;
  reviewsCount: number;
  createdAt: string;
}
