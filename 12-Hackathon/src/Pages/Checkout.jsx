import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const cartKey = currentUser ? `cart_${currentUser.email}` : null;
  const [cart, setCart] = useState(cartKey ? JSON.parse(localStorage.getItem(cartKey)) || [] : []);
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) setForm({ ...form, name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    if (cartKey) localStorage.removeItem(cartKey);
    navigate("/");
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Name" required value={form.name} onChange={handleChange} className="w-full p-3 rounded bg-gray-700"/>
            <input type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} className="w-full p-3 rounded bg-gray-700"/>
            <input type="text" name="address" placeholder="Address" required value={form.address} onChange={handleChange} className="w-full p-3 rounded bg-gray-700"/>
            <input type="text" name="city" placeholder="City" required value={form.city} onChange={handleChange} className="w-full p-3 rounded bg-gray-700"/>
            <input type="text" name="zip" placeholder="ZIP" required value={form.zip} onChange={handleChange} className="w-full p-3 rounded bg-gray-700"/>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full p-3 rounded font-bold">Place Order</button>
          </form>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.price*item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <p className="font-bold mt-4 text-right">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
