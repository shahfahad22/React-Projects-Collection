import { FaShippingFast, FaUndo, FaHeadset, FaLock } from "react-icons/fa";
import HomeMobile from "../assets/HomeMobile.png";
import HomeGrid from "./HomeGrid";
import LatestNewsSection from "../Pages/LatestNewsSection";
import FeaturedProductsSection from "./FeaturedProductsSection";

const Home = () => {
  return (
    <div className="bg-[#111518] text-white min-h-screen mt-18">
      
      {/* Hero Section */}
      <section className="h-[75vh] flex flex-col md:flex-row items-center justify-center md:justify-between max-w-7xl mx-auto px-6 gap-10 pt-10 md:pt-10">
        
        {/* Left Content */}
       <div className="flex flex-col gap-9 text-center md:text-left md:max-w-xl animate-fadeIn w-full">
  <h1 className="text-6xl md:text-6xl font-extrabold leading-tight">
    Discover the Latest <span className="text-red-500">Smartphones</span>
  </h1>
  <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
    Shop the newest mobile phones at unbeatable prices. Experience power, performance, and style all in one place.
  </p>
  <button className="cursor-pointer mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full text-base shadow-md hover:shadow-lg transition w-[180px] mx-auto md:mx-0">
    Shop Now
  </button>
</div>


        {/* Right Image */}
        <div className="hidden md:flex justify-end w-full md:w-1/3">
          <img
            src={HomeMobile}
            alt="Mobile Phone"
            className="w-full max-w-sm rounded-2xl shadow-lg object-contain animate-fadeIn"
          />
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-white/10 backdrop-blur-md text-white py-9 mt-1 mb-11">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <FaShippingFast />, title: "Free Shipping", desc: "Free shipping on all US orders" },
            { icon: <FaUndo />, title: "100% Money Back", desc: "You have 10 days to return" },
            { icon: <FaHeadset />, title: "Support 24/7", desc: "Contact us 24 hours a day" },
            { icon: <FaLock />, title: "100% Payment Secure", desc: "Your payments are safe with us" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-white/5 hover:bg-white/15 transition shadow-md hover:shadow-lg"
            >
              <div className="text-4xl text-red-500">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <HomeGrid />
      <LatestNewsSection /> 
      <FeaturedProductsSection />
    </div>
    
  );
};

export default Home;
