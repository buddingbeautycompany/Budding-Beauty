'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-bb-ivory to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-serif font-bold text-center mb-6 text-bb-emerald-700">
          Grow Your Glow
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
          Budding Beauty - Your luxury beauty discovery platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold mb-4 text-bb-emerald-600">Shop</h2>
            <p className="text-gray-700 dark:text-gray-300">Discover curated beauty products</p>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold mb-4 text-bb-blush-500">Deals</h2>
            <p className="text-gray-700 dark:text-gray-300">Find exclusive offers and discounts</p>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold mb-4 text-bb-gold-500">Brands</h2>
            <p className="text-gray-700 dark:text-gray-300">Explore trusted beauty brands</p>
          </div>
        </div>
      </div>
    </main>
  );
}
