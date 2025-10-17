import { useState, useEffect } from "react";

export const useCart = (userCartKey) => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(userCartKey)) || [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(userCartKey, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart, userCartKey]);

  const getCartItem = (id) => cart.find((item) => item.id === id);

  // Add to cart with return value
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) return false; // Already in cart
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    return true; // Successfully added
  };

  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (type === "inc") return { ...item, quantity: item.quantity + 1 };
          if (type === "dec") return { ...item, quantity: Math.max(1, item.quantity - 1) };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return { cart, getCartItem, addToCart, updateQuantity, removeFromCart };
};
