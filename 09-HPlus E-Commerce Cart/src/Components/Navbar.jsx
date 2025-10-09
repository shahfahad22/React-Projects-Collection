import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white px-30 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">
        🛒 HPlus Store
      </Link>

      <Link to="/cart" className="relative font-medium hover:text-gray-300 transition">
        Cart
        <span className="absolute -top-2 -right-3 bg-red-600 text-xs px-2 py-1 rounded-full">
          {cart?.length ?? 0}
        </span>
      </Link>
    </nav>
  );
}
