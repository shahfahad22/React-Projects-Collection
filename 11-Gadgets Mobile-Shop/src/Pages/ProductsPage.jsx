import React, { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../Pages/useCart";

import AirPods from "../assets/AirPods.jpg";
import AirTag from "../assets/AirTag.jpg";
import AppleWatch from "../assets/AppleWatchSeries6.jpg";
import Htc from "../assets/HTC.webp";
import Razer from "../assets/Razer.webp";
import Samsung from "../assets/Samsung.webp";
import ValveIndex from "../assets/Valveindex.webp";
import XboxElite from "../assets/xboxelite.webp";
import XboxSeriesX from "../assets/xboxseries.webp";

const products = [
  { id: 1, name: "AirPods Pro", price: 249, category: "Gadgets", rating: 4, image: AirPods },
  { id: 2, name: "AirTag", price: 29, category: "Gadgets", rating: 5, image: AirTag },
  { id: 3, name: "Apple Watch Series 6", price: 399, category: "Gadgets", rating: 4, image: AppleWatch },
  { id: 4, name: "HTC Vive Pro 2", price: 699, category: "Gadgets, Gaming", rating: 5, image: Htc },
  { id: 5, name: "Razer Blackshark", price: 159, category: "Gadgets, Gaming", rating: 4, image: Razer },
  { id: 6, name: "Samsung Galaxy S21", price: 799, category: "Smartphones", rating: 5, image: Samsung },
  { id: 7, name: "Valve Index Knuckles", price: 419, category: "Gaming", rating: 5, image: ValveIndex },
  { id: 8, name: "XBOX Elite Controller", price: 179, category: "Gaming", rating: 4, image: XboxElite },
  { id: 9, name: "XBOX Series X", price: 499, category: "Gaming", rating: 5, image: XboxSeriesX },
];

const ProductsPage = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userCartKey = currentUser ? `cart_${currentUser.email}` : "cart";

  const { cart, getCartItem, addToCart, updateQuantity } = useCart(userCartKey);

  const [toast, setToast] = useState("");
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleAddToCart = (product) => {
    if (!currentUser) {
      return Swal.fire({
        title: "Login Required",
        text: "Please login to add items to cart",
        icon: "warning",
        confirmButtonColor: "#ef4444",
      });
    }

    if (getCartItem(product.id)) {
      showToast("Already in cart!");
      return;
    }

    addToCart(product);
    showToast(`${product.name} added ✅`);
  };

  return (
    <section className="bg-[#111518] text-white py-16 px-6 min-h-screen relative">
      
      {/* 🔹 Updated Toast */}
      {toast && (
        <div className="fixed top-20 right-1 bg-green-600 px-6 py-4 rounded shadow-lg z-50 text-sm font-medium animate-slide-down">
          {toast}
        </div>
      )}

      <div className="max-w-7xl mx-auto mb-12 text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">All Products</h1>
        <p className="text-gray-400 text-lg">Browse all products and add to your cart</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          const cartItem = getCartItem(product.id);

          return (
            <div key={product.id} className="bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:bg-white/10 transition flex flex-col">
              <Link to={`/product/${product.id}`} className="overflow-hidden cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </Link>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                  <p className="text-xl font-semibold mb-2">${product.price}</p>
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 mr-1 ${
                          i < product.rating
                            ? "fill-yellow-400 stroke-yellow-400"
                            : "fill-transparent stroke-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {cartItem ? (
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(product.id, "dec")}
                        className="bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600"
                      >
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, "inc")}
                        className="bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-medium">
                      ${(cartItem.quantity * product.price).toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="cursor-pointer mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition w-full"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsPage;
