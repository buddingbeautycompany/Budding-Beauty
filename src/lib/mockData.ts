// Mock data for development
import { Product, Brand, BlogPost, Review } from '@/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hydrating Face Serum',
    brand: 'Glow & Radiance',
    category: 'skincare',
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop',
    description: 'Luxurious hydrating serum with hyaluronic acid and plant extracts',
    isNew: true,
    isSale: true,
    discount: 25,
    tags: ['hydrating', 'anti-aging', 'natural'],
  },
  {
    id: '2',
    name: 'Botanical Lip Gloss',
    brand: 'Bloom Beauty',
    category: 'makeup',
    price: 28,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1631214174585-fe5582592c1c?w=500&h=500&fit=crop',
    description: 'Shimmering lip gloss with botanical extracts',
    isNew: false,
    isSale: false,
    tags: ['glossy', 'botanical', 'cruelty-free'],
  },
  {
    id: '3',
    name: 'Silk Hair Mask',
    brand: 'Luxe Locks',
    category: 'haircare',
    price: 35,
    originalPrice: 50,
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    description: 'Deep conditioning silk mask for all hair types',
    isNew: false,
    isSale: true,
    discount: 30,
    tags: ['conditioning', 'silk', 'natural'],
  },
];

export const MOCK_BRANDS: Brand[] = [
  {
    id: 'b1',
    name: 'Glow & Radiance',
    logo: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd0b45f?w=200&h=200&fit=crop',
    description: 'Premium skincare brand focusing on natural ingredients',
    website: 'https://glowandradiance.com',
    featured: true,
    category: 'skincare',
  },
  {
    id: 'b2',
    name: 'Bloom Beauty',
    logo: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd0b45f?w=200&h=200&fit=crop',
    description: 'Luxe makeup brand with botanical formulations',
    website: 'https://bloombeauty.com',
    featured: true,
    category: 'makeup',
  },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Skincare Routines',
    slug: 'ultimate-guide-skincare-routines',
    excerpt: 'Learn the essential steps to build a skincare routine that works for your skin type',
    content: 'Full article content here...',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=400&fit=crop',
    publishedAt: '2024-01-15',
    category: 'skincare',
    tags: ['skincare', 'routine', 'tips'],
    readTime: 8,
  },
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    productId: '1',
    author: 'Emma Wilson',
    rating: 5,
    content: 'This serum is absolutely amazing! My skin feels so hydrated and glowing.',
    verified: true,
    date: '2024-01-10',
    helpful: 24,
  },
  {
    id: '2',
    productId: '1',
    author: 'Jessica Lee',
    rating: 4,
    content: 'Great product, though a little pricey. Results show after consistent use.',
    verified: true,
    date: '2024-01-08',
    helpful: 18,
  },
];
