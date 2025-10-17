import React, { useState } from "react";
import { useParams } from "react-router-dom";

// 🖼️ Import all images from assets
import AirTagImg from "../assets/AirTag.jpg";
import ViveProImg from "../assets/Valveindex.webp";
import RazerBlacksharkImg from "../assets/Razer.webp";
import AirPodsImg from "../assets/AirPods.jpg";
import AppleWatchImg from "../assets/AppleWatchSeries6.jpg";

const PDP = () => {
  const { id } = useParams(); // future use if dynamic routing

  // 🧾 Current Product (Static Example)
  const product = {
    id: 1,
    title: "AirTag",
    price: 29.0,
    category: "Gadgets",
    image: AirTagImg,
    description: `
      Eget egestas purus viverra accumsan in nisl. Dignissim diam quis enim lobortis scelerisque fermentum dui.
      Sed adipiscing diam donec adipiscing tristique. Aliquet enim tortor at auctor urna nunc id cursus metus.
      Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Id cursus metus aliquam eleifend mi in nulla posuere.
      
      Pellentesque nec nam aliquam sem et tortor. Varius sit amet mattis vulputate enim nulla. Ipsum dolor sit amet consectetur.
      
      Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Proin sagittis nisl rhoncus mattis.
      Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Amet aliquam id diam maecenas ultricies mi eget.
    `,
  };

  // 🧩 Related Products with images
  const relatedProducts = [
    {
      id: 2,
      title: "HTC Vive Pro 2",
      price: 699,
      category: "Gadgets, Gaming",
      image: ViveProImg,
    },
    {
      id: 3,
      title: "Razer Blackshark",
      price: 159,
      category: "Gadgets, Gaming",
      image: RazerBlacksharkImg,
    },
    {
      id: 4,
      title: "AirPods Pro",
      price: 249,
      category: "Gadgets",
      image: AirPodsImg,
    },
    {
      id: 5,
      title: "Apple Watch Series 6",
      price: 399,
      category: "Gadgets",
      image: AppleWatchImg,
    },
  ];

  const [quantity, setQuantity] = useState(1);

  // 🛒 Add to Cart Logic
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-[#111518] text-white min-h-screen py-10 mt-18 px-6">
      {/* Product Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <p className="text-2xl text-red-500 font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line">
            {product.description}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xl"
              >
                -
              </button>
              <span className="px-4 py-1 bg-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xl"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg text-lg transition"
            >
              Add to Cart
            </button>
          </div>

          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="h-32 bg-gray-800 rounded-md mb-3 overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-red-500 font-bold">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-400">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDP;
