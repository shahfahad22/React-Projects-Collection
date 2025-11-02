import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = allUsers.find((u) => u.email === form.email);
    if (existingUser) {
      Swal.fire({
        title: "User Already Exists!",
        text: "You have already registered. Please login.",
        icon: "info",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#ef4444",
        background: "#1a1f24",
        color: "#fff",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    // Save user in localStorage
    allUsers.push(form);
    localStorage.setItem("users", JSON.stringify(allUsers));

    Swal.fire({
      title: "Registration Successful 🎉",
      text: "Your account has been created. Please login to continue.",
      icon: "success",
      confirmButtonText: "Go to Login",
      confirmButtonColor: "#ef4444",
      background: "#1a1f24",
      color: "#fff",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#111518] relative px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1f24]/80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-80 flex flex-col gap-5 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Create Account 
        </h2>
        <p className="text-center text-gray-400 text-sm mb-2">
          Register to continue
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-600 bg-[#111518] text-white placeholder-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
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
          Register
        </button>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
