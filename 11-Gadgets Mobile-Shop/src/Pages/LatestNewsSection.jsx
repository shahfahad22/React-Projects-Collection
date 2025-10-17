import React from "react";
import usefull from "../assets/usefull.webp";
import gadgets from "../assets/gadgets.webp";
import experience from "../assets/experience.webp";

const LatestNewsSection = () => {
  const newsItems = [
    {
      id: 1,
      category: "Useful",
      title: "Amet Commodo Nulla Facilisi Vehicula Ipsum",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
      image: usefull,
    },
    {
      id: 2,
      category: "Gadgets",
      title: "Urnaneque Viverra Justo Ultrices Sapieneget",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
      image: gadgets,
    },
    {
      id: 3,
      category: "Expirience",
      title: "Tristique Magna Amet Purus Gravida Quisblandit",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do…",
      image: experience,
    },
  ];

  return (
    <section className="bg-[#111518] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading + Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Latest News</h2>
            <p className="text-gray-400">
              Feugiat pretium nibh ipsum consequat commodo.
            </p>
          </div>
          <button className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full font-medium">
            View All
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white/5 rounded-2xl overflow-hidden flex flex-col transition shadow-lg hover:bg-white/10"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-red-500 text-sm font-semibold uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mt-2 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {item.excerpt}
                  </p>
                </div>
                <button className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition w-max">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
    