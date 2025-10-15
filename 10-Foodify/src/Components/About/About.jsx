import React from "react";

const About = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* 🟡 Hero Section with Fruits Image */}
      <section
        className="relative h-[55vh] flex items-center justify-center text-center mt-[64px]" 
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=1600&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            About <span className="text-orange-400">Foody 🍎</span>
          </h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            Freshness, Quality, and Love — straight from farms to your home.
          </p>
        </div>
      </section>

      {/* 🟡 About Content Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Foody?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Welcome to <span className="text-orange-500 font-semibold">Foody</span> — your trusted destination for
              fresh and organic fruits. We’re passionate about connecting local farmers with fruit lovers
              across the country, ensuring quality and freshness in every bite.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">🍎 Fresh & Local</h3>
                <p className="text-sm text-gray-600">Sourced daily from nearby farms.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">💰 Fair Prices</h3>
                <p className="text-sm text-gray-600">Supporting farmers and customers equally.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">🌿 Eco Friendly</h3>
                <p className="text-sm text-gray-600">Sustainable packaging & delivery.</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">⚡ Fast Delivery</h3>
                <p className="text-sm text-gray-600">Fresh fruits at your doorstep quickly.</p>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200&q=80&auto=format&fit=crop"
              alt="Fresh Fruits Basket"
              className="w-full rounded-xl shadow-lg object-cover h-80 md:h-96"
            />
          </div>
        </div>

        {/* 🟡 Team Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">
            A passionate team bringing you the best fruits across the country.
          </p>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                className="w-20 h-20 rounded-full mx-auto object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80&auto=format&fit=crop"
                alt="Team member"
              />
              <h3 className="mt-4 font-semibold">Ayesha Khan</h3>
              <p className="text-sm text-gray-600">Operations Head</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                className="w-20 h-20 rounded-full mx-auto object-cover"
                src="https://images.unsplash.com/photo-1546456073-6712f79251bb?w=500&q=80&auto=format&fit=crop"
                alt="Team member"
              />
              <h3 className="mt-4 font-semibold">Zain Malik</h3>
              <p className="text-sm text-gray-600">Marketing Lead</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                className="w-20 h-20 rounded-full mx-auto object-cover"
                src="https://images.unsplash.com/photo-1545996124-1b2e7b3f4b8b?w=500&q=80&auto=format&fit=crop"
                alt="Team member"
              />
              <h3 className="mt-4 font-semibold">Sara Ali</h3>
              <p className="text-sm text-gray-600">Product Designer</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
