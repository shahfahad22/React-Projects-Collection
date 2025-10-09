import { useCart } from "../Context/CartContext";
import CartItem from "../Components/CartItem";

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="pt-24 px-6 pb-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🛍️ Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg bg-gray-50 py-16 rounded-xl shadow-inner">
          <p>Your cart is empty 🛒</p>
          <p className="text-sm mt-2">Browse products and add them to your cart.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="border-t pt-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-2xl font-bold text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
