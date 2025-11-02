import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = allUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      // ✅ Mark auth
      localStorage.setItem("auth", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));

      // ✅ Initialize user-specific cart if not exists
      const userCartKey = `cart_${user.email}`;
      if (!localStorage.getItem(userCartKey)) localStorage.setItem(userCartKey, JSON.stringify([]));

      Swal.fire({
        title: "Login Successful 🎉",
        text: `Welcome back, ${user.name}!`,
        icon: "success",
        confirmButtonText: "Go to Home",
        confirmButtonColor: "#ef4444",
        background: "#1a1f24",
        color: "#fff",
        timer: 1500,
        timerProgressBar: true,
      }).then(() => {
        navigate("/");
      });
    } else {
      Swal.fire({
        title: "Login Failed ❌",
        text: "Invalid credentials or user not registered!",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ef4444",
        background: "#1a1f24",
        color: "#fff",
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#111518] relative px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1f24]/80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-80 flex flex-col gap-5 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back 
        </h2>
        <p className="text-center text-gray-400 text-sm mb-2">
          Please login to continue
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-600 bg-[#111518] text-white placeholder-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border border-gray-600 bg-[#111518] text-white placeholder-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 transition text-white py-2 rounded font-semibold cursor-pointer"
        >
          Login
        </button>

        <p className="text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-red-600 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
