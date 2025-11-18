import React, { useState } from 'react';

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface FoodCardProps {
  item: FoodItem;
  onQuantityChange?: (itemId: number, quantity: number) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(item.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(item.id, newQuantity);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-sm w-full mx-auto">
      {/* Food Image */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Food Details */}
      <div className="p-6">
        {/* Name and Price */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h2>
          {item.description && (
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          )}
          <p className="text-3xl font-bold text-red-500">${item.price.toFixed(2)}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
          <button
            onClick={handleDecrement}
            disabled={quantity === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-colors ${
              quantity === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-red-500 text-white hover:bg-red-600 active:scale-95'
            }`}
          >
            -
          </button>

          <span className="text-2xl font-bold text-gray-900">{quantity}</span>

          <button
            onClick={handleIncrement}
            className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xl hover:bg-red-600 active:scale-95 transition-all"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
