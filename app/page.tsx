"use client";

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import FoodCard from '@/components/FoodCard';
import CartButton from '@/components/CartButton';
import type { FoodItem } from '@/components/FoodCard';

// Sample food data
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop',
    description: 'Classic tomato sauce, fresh mozzarella, and basil'
  },
  {
    id: 2,
    name: 'Burger Deluxe',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
    description: 'Juicy beef patty with cheese, lettuce, and special sauce'
  },
  {
    id: 3,
    name: 'Caesar Salad',
    price: 8.49,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop',
    description: 'Fresh romaine, parmesan, croutons, and Caesar dressing'
  },
  {
    id: 4,
    name: 'Sushi Roll',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop',
    description: 'Assorted fresh sushi rolls with wasabi and ginger'
  },
  {
    id: 5,
    name: 'Pasta Carbonara',
    price: 13.49,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=400&fit=crop',
    description: 'Creamy pasta with bacon, egg, and parmesan'
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : foodItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < foodItems.length - 1 ? prev + 1 : 0));
  };

  const handleQuantityChange = (itemId: number, quantity: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: quantity
    }));
  };

  const totalCartItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  const handleCartClick = () => {
    console.log('Cart clicked', cartItems);
    alert(`Cart has ${totalCartItems} items`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Top Bar */}
      <TopBar />

      {/* Main Content Area with Invisible Navigation Zones */}
      <div className="pt-16 pb-20 flex items-center justify-center min-h-screen relative">
        {/* Left Navigation Zone - Invisible */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-16 bottom-20 w-1/4 z-10 cursor-pointer"
          aria-label="Previous item"
        >
          {/* Invisible clickable area */}
        </button>

        {/* Center Card Area */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="relative w-full max-w-sm">
            {/* Navigation Hints */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block">
              <svg 
                className="w-8 h-8 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </div>

            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block">
              <svg 
                className="w-8 h-8 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>

            {/* Food Card */}
            <FoodCard 
              item={foodItems[currentIndex]} 
              onQuantityChange={handleQuantityChange}
            />

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {foodItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-red-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Navigation Zone - Invisible */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-16 bottom-20 w-1/4 z-10 cursor-pointer"
          aria-label="Next item"
        >
          {/* Invisible clickable area */}
        </button>
      </div>

      {/* Floating Cart Button */}
      <CartButton itemCount={totalCartItems} onClick={handleCartClick} />
    </div>
  );
}
