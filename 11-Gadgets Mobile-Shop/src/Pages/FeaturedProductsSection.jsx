import React, { useState } from "react";
import { Star } from "lucide-react";
import { useCart } from "../Pages/useCart";

import AirPods from "../assets/AirPods.jpg";
import AirTag from "../assets/AirTag.jpg";
import AppleWatch from "../assets/AppleWatchSeries6.jpg";
import Htc from "../assets/HTC.webp";
import Razer from "../assets/Razer.webp";
import Samsung from "../assets/Samsung.webp";

const products = [
  { id: 1, name: "Apple AirPods", price: 199, image: AirPods, rating: 5 },
  { id: 2, name: "Apple AirTag", price: 29, image: AirTag, rating: 4 },
  { id: 3, name: "Apple Watch Series 6", price: 399, image: AppleWatch, rating: 5 },
  { id: 4, name: "HTC Vive Pro 2", price: 699, image: Htc, rating: 5 },
  { id: 5, name: "Razer Blackshark", price: 159, image: Razer, rating: 4 },
  { id: 6, name: "Samsung Galaxy S21", price: 799, image: Samsung, rating: 5 },
];

const FeaturedProductsSection = () => {
  const [toast, setToast] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userCartKey = currentUser ? `cart_${currentUser.email}` : "cart";

  const { cart, getCartItem, addToCart, updateQuantity } = useCart(userCartKey);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleAdd = (product) => {
    if (!currentUser) {
      showToast("Please login first!");
      return;
    }
    if (getCartItem(product.id)) {
      showToast("Already in cart!");
      return;
    }
    addToCart(product);
    showToast(`${product.name} added ✅`);
  };

  return (
    <section className="bg-[#111518] text-white py-16 px-6 relative">
      {toast && <div className="fixed top-20 right-1 bg-green-600 px-6 py-4 rounded shadow-lg z-50 text-sm font-medium animate-slide-down">{toast}</div>}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => {
          const cartItem = getCartItem(product.id);

          return (
            <div key={product.id} className="bg-white/5 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition shadow-lg relative group">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-4" />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-300 mb-4">${product.price.toFixed(2)}</p>
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 mr-1 ${i < product.rating ? "text-yellow-400 fill-yellow-400 stroke-yellow-400" : "text-gray-500"}`} />
                ))}
              </div>

              {cartItem ? (
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(product.id, "dec")} className="bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600">-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, "inc")} className="bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600">+</button>
                  </div>
                  <span className="text-sm font-medium">${(cartItem.quantity * product.price).toFixed(2)}</span>
                </div>
              ) : (
                <button onClick={() => handleAdd(product)} className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full w-full cursor-pointer">Add to Cart</button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
