import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message can't be empty.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* 🟡 Hero Heading Section */}
      <section className="mt-[70px] py-16 text-center bg-gradient-to-b from-orange-500 to-orange-600  text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto text-emerald-100">
          We’d love to hear from you — whether it’s feedback, a question, or just a hello 👋
        </p>
      </section>

      {/* 🟡 Contact Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* 📝 Contact Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            {submitted && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
                ✅ Thank you! Your message has been sent.
              </div>
            )}

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.name ? "border-red-400" : "border-gray-200"
                } shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </label>

            <label className="block mt-4">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.email ? "border-red-400" : "border-gray-200"
                } shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </label>

            <label className="block mt-4">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`mt-1 block w-full rounded-md border ${
                  errors.message ? "border-red-400" : "border-gray-200"
                } shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </label>

            <button
              type="submit"
              className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md  transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* 📍 Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="mt-2 text-gray-600">
              Reach out to us using the details below or fill out the form.
            </p>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800">📍 Visit Us</h4>
              <p className="text-sm text-gray-600 mt-1">
                123 Fruit Lane, Gulberg, Lahore
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800">📞 Phone</h4>
              <p className="text-sm text-gray-600">+92 300 1234567</p>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800">🕒 Working Hours</h4>
              <p className="text-sm text-gray-600">Mon–Sat: 9am — 6pm</p>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800">Follow us</h4>
              <div className="mt-3 flex gap-4">
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
