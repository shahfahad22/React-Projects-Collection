

import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const cartKey = currentUser ? `cart_${currentUser.email}` : null;

  const [cart, setCart] = useState(
    cartKey ? JSON.parse(localStorage.getItem(cartKey)) || [] : []
  );

  useEffect(() => {
    if (cartKey) localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  // Update quantity with minimum 1, or remove if below 1
  const updateQuantity = (id, qty) => {
    if (qty < 1) {
      removeItem(id); // remove if user tries to go below 1
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: qty } : item)));
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-400">Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
            <div className="mt-6 text-right">
              <p className="font-bold">Total: ${total.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
