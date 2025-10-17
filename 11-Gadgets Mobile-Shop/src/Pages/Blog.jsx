import React from "react";
import BlogsBanner from "../assets/BlogsBanner.jpg";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.jpg";
import Blog4 from "../assets/blog4.jpg";
import Blog5 from "../assets/blog5.jpg";
import Blog6 from "../assets/blog6.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Smartphones of 2025",
      image: Blog1,
      excerpt:
        "Explore the latest smartphones with cutting-edge features and performance.",
    },
    {
      id: 2,
      title: "How to Choose the Right Laptop",
      image: Blog2,
      excerpt:
        "A complete guide to selecting a laptop that fits your needs and budget.",
    },
    {
      id: 3,
      title: "Best Smartwatches for Fitness Tracking",
      image: Blog3,
      excerpt:
        "Discover the top smartwatches to keep track of your health and daily activity.",
    },
    {
      id: 4,
      title: "Top 5 Gaming Laptops in 2025",
      image: Blog4,
      excerpt:
        "Find out which gaming laptops deliver the best performance for your budget.",
    },
    {
      id: 5,
      title: "Essential Accessories for Your Mobile",
      image: Blog5,
      excerpt:
        "A guide to must-have accessories that enhance your smartphone experience.",
    },
    {
      id: 6,
      title: "Latest Trends in Tech Gadgets",
      image: Blog6,
      excerpt:
        "Stay updated with the newest trends and innovations in the tech world.",
    },
  ];

  return (
    <div className="text-white bg-[#111518] min-h-screen">
      {/* Banner */}
      <div
        className="w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BlogsBanner})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-black/40 p-4 rounded">
          Tech Blog
        </h1>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
               loading="lazy"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-red-500 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-300">{post.excerpt}</p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
