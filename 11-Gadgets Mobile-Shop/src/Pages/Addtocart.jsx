import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState([]);

 useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return;
  const loadCart = () => {
    const userCartKey = `cart_${currentUser.email}`;
    const storedCart = JSON.parse(localStorage.getItem(userCartKey)) || [];
    setCart(storedCart);
  };
  loadCart();
  window.addEventListener("cartUpdated", loadCart);
  return () => window.removeEventListener("cartUpdated", loadCart);
}, []);

const updateCart = (updatedCart) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return;
  const userCartKey = `cart_${currentUser.email}`;
  setCart(updatedCart);
  localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
};

  const handleIncrease = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const handleDecrease = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
   <section className="py-14 mt-18 bg-[#111518] min-h-screen text-white">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
      🛒 Your Shopping Cart
    </h2>

    {cart.length === 0 ? (
      <p className="text-gray-400 text-center text-lg">
        Your cart is empty 😔
      </p>
    ) : (
      <>
        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl shadow-lg bg-white/5 backdrop-blur">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-white/10 text-gray-300 uppercase text-xs sm:text-sm">
                <th className="p-3 sm:p-4 text-left">Product</th>
                <th className="p-3 sm:p-4 text-center">Quantity</th>
                <th className="p-3 sm:p-4 text-center">Subtotal</th>
                <th className="p-3 sm:p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  {/* Product + Image */}
                  <td className="p-3 sm:p-4">
                    <div className="flex items-center gap-3 max-w-[200px] sm:max-w-none">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <span className="font-medium text-sm sm:text-base truncate">
                        {item.name}
                      </span>
                    </div>
                  </td>

                  {/* Quantity */}
                  <td className="p-3 sm:p-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="bg-gray-700 hover:bg-gray-600 px-2 sm:px-3 py-1 rounded-full cursor-pointer"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="bg-gray-700 hover:bg-gray-600 px-2 sm:px-3 py-1 rounded-full cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Subtotal */}
                  <td className="p-3 sm:p-4 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>

                  {/* Remove Button */}
                  <td className="p-3 sm:p-4 text-center">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-600 transition cursor-pointer"
                    >
                      <Trash2 className="w-5 h-5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Box */}
        <div className="mt-10 flex flex-col items-center md:flex-row md:justify-end">
          <div className="bg-white/5 backdrop-blur p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <p className="text-gray-300 text-sm sm:text-base">
              <span className="font-semibold text-white">Total Items: </span>
              {totalItems}
            </p>
            <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base">
              <span className="font-semibold text-white">Total Price: </span>
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </>
    )}
  </div>
</section>

  );
};

export default Cart;
