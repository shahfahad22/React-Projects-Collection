import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../features/authSlice";
import Swal from "sweetalert2";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch all users from localStorage
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const existingUser = allUsers.find((u) => u.email === form.email);
    if (existingUser) {
      Swal.fire({
        title: "User Already Exists!",
        text: "You have already registered. Please login.",
        icon: "info",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#2563eb", // Tailwind blue
        background: "#1f2937", // Dark background
        color: "#fff",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    // Save new user to localStorage
    allUsers.push(form);
    localStorage.setItem("users", JSON.stringify(allUsers));

    // Dispatch to Redux (if needed)
    dispatch(register(form));

    // Show success popup
    Swal.fire({
      title: "Registration Successful ",
      html: `<strong>Welcome, ${form.name}!</strong><br>Your account has been created.`,
      icon: "success",
      confirmButtonText: "Go to Login",
      confirmButtonColor: "#2563eb",
      background: "#1f2937",
      color: "#fff",
      showClass: {
        popup: "animate__animated animate__fadeInDown"
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp"
      }
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 sm:p-10 rounded-2xl w-full max-w-md shadow-2xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full p-4 mb-6 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button className="w-full bg-blue-600 text-white cursor-pointer hover:bg-blue-700 p-4 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95">
          Register
        </button>

        <p className="text-center text-gray-400 mt-4 text-sm sm:text-base">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500  hover:text-blue-400 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
