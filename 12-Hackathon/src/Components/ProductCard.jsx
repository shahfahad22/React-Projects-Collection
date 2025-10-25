import React from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const addToCart = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return toast.error("Please login first!");

    const cartKey = `cart_${currentUser.email}`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      toast("Item already in cart!", { icon: "⚠️" });
      return;
    }

    const newCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem(cartKey, JSON.stringify(newCart));

    toast.success(`${product.title.slice(0, 30)}... added to cart!`);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] h-full min-h-[280px] sm:min-h-[320px]">
      
      {/* Product Image - Consistent with cart */}
      <div className="flex-shrink-0 w-full h-32 sm:h-36 md:h-40 flex items-center justify-center bg-gray-700 rounded-lg p-2 mb-3">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain rounded"
          loading="lazy"
        />
      </div>

      {/* Product Info - Consistent with cart */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-2 leading-tight mb-2 min-h-[40px]">
            {product.title}
          </h3>
          
          {/* Price - Same styling as cart */}
          <p className="text-blue-400 font-bold text-sm sm:text-base mb-3">
            ${product.price}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={addToCart}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 sm:py-2.5 px-4 rounded-lg w-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;