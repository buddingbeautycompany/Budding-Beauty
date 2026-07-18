// Global type definitions

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'nails' | 'lashes' | 'fragrance' | 'wellness';
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  isNew: boolean;
  isSale: boolean;
  discount?: number;
  tags: string[];
}

export interface Deal {
  id: string;
  productId: string;
  discount: number;
  expiryDate: string;
  code?: string;
  isActive: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  featured: boolean;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  content: string;
  verified: boolean;
  date: string;
  helpful: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  favorites: string[];
  subscribed: boolean;
}

export interface NavigationLink {
  label: string;
  href: string;
  submenu?: NavigationLink[];
}
