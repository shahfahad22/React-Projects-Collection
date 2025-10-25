import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-start justify-between bg-gray-800 p-3 rounded-xl mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 gap-3">
      
      {/* Product Image - Optimized for mobile */}
      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-700 rounded-lg p-1">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-contain rounded"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
        {/* Title and Price */}
        <div className="flex-1">
          <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-2 leading-tight">
            {item.title}
          </h3>
          <p className="text-blue-400 font-bold mt-1 text-sm sm:text-base">
            ${item.price}
          </p>
          {/* Subtotal for mobile */}
          <p className="text-gray-400 text-xs sm:hidden mt-1">
            Subtotal: ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Quantity Controls & Delete */}
        <div className="flex items-center justify-between mt-3 gap-2">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg overflow-hidden bg-gray-700 border border-gray-600">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 transition-colors duration-150"
                aria-label="Decrease quantity"
                disabled={item.quantity <= 1}
              >
                <span className="text-white font-medium cursor-pointer" >−</span>
              </button>
              
              <span className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white text-sm font-medium">
                {item.quantity}
              </span>
              
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-600 active:bg-gray-500 transition-colors duration-150"
                aria-label="Increase quantity"
              >
                <span className="text-white font-medium">+</span>
              </button>
            </div>
          </div>

         
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 cursor-pointer hover:text-red-400 active:text-red-300 font-medium text-sm transition-colors duration-200 p-2 rounded-lg hover:bg-red-500/10 active:bg-red-500/20"
            aria-label="Remove item"
          >
            <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Subtotal for larger screens */}
      <div className="hidden sm:block flex-shrink-0 ml-2">
        <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;