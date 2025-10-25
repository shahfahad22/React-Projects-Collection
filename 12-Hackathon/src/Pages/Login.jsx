import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (matchedUser) {
      // Dispatch Redux login
      dispatch(login(form));

      // Success popup without confirm button, auto-close after 1.5s
      Swal.fire({
        title: `Welcome back, ${matchedUser.name}! `,
        icon: "success",
        showConfirmButton: false, // ✅ remove the button
        timer: 1500, // auto-close after 1.5 seconds
        background: "#1f2937",
        color: "#fff",
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
      }).then(() => {
        navigate("/");
      });
    } else {
      // Error popup
      Swal.fire({
        title: "Invalid Credentials",
        text: "Email or password is incorrect.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ef4444",
        background: "#1f2937",
        color: "#fff",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 sm:p-10 rounded-2xl w-full max-w-md shadow-2xl flex flex-col gap-5 border border-gray-700"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-white">
          Login 
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-4 mb-6 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />

        <button className="w-full bg-blue-600 cursor-pointer text-white hover:bg-blue-700 p-4 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95">
          Login
        </button>

        <p className="text-center text-gray-400 mt-4 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500  hover:text-blue-400 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
