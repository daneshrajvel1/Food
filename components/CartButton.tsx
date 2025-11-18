import React from 'react';

interface CartButtonProps {
  itemCount?: number;
  onClick?: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ itemCount = 0, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition-all active:scale-95"
    >
      {/* Cart Icon */}
      <svg 
        className="w-8 h-8" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        />
      </svg>

      {/* Badge */}
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 font-bold text-sm rounded-full w-7 h-7 flex items-center justify-center shadow-md">
          {itemCount > 99 ? '99+' : itemCount}
        </div>
      )}
    </button>
  );
};

export default CartButton;
