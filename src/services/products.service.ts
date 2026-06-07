import { Product } from '../types/product';
import productsData from './mock-data/products.json';

class ProductsService {
  private products: Product[] = productsData as Product[];

  async getAllProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.products;
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.products.find(p => p.slug === slug);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.products.filter(p => p.category === category);
  }

  async getProductsByCollection(collection: string): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.products.filter(p => p.collection === collection);
  }
}

export const productsService = new ProductsService();
