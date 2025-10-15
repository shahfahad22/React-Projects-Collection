import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import Customer1 from "../../assets/images/customer1.jpg";
import Customer2 from "../../assets/images/customer2.jpg";
import Customer3 from "../../assets/images/customer3.jpg";
import Customer4 from "../../assets/images/customer4.jpg";
import Customer5 from "../../assets/images/customer5.jpg";
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  return (
 <section>
  <div className="max-w-[1250px] mx-auto px-4 md:px-10 py-20">
    <Heading highlight="Customers" heading="Saying" />

    {/* Navigation Buttons - Mobile me center, Desktop me side */}
    <div className="flex justify-center md:justify-between items-center gap-4 py-6">
      <button className="custom-prev text-2xl md:text-3xl rounded-full w-10 h-10 md:w-12 md:h-12 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 cursor-pointer hover:text-white transition-all">
        <IoIosArrowBack />
      </button>

      <button className="custom-next text-2xl md:text-3xl rounded-full w-10 h-10 md:w-12 md:h-12 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 cursor-pointer hover:text-white transition-all">
        <IoIosArrowForward />
      </button>
    </div>

    {/* Swiper */}
    <Swiper
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      modules={[Navigation]}
      className="mySwiper w-full"
    >
      {review.map((item) => (
        <SwiperSlide
          key={item.id}
          className="bg-zinc-100 rounded-xl p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex gap-5 items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h5 className="text-base md:text-lg font-bold">{item.name}</h5>
              <p className="text-zinc-600 text-sm md:text-base">
                {item.profeession}
              </p>
              <span className="flex text-yellow-400 mt-1 text-sm md:text-lg gap-1">
                {Array.from({ length: item.rating }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </span>
            </div>
          </div>

          <div className="mt-4 md:mt-6 min-h-[10vh]">
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              {item.para}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnses",
    profeession: "Food Blogger",
    rating: 5,
    para: "As a chef, Quality ingerident are everything. FreshBasket consistantly delivers the best vegitables, hunts and pamtry, stables. High Recomended!",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profeession: "Chef",
    rating: 4,
    para: "As a chef, Quality ingerident are everything. FreshBasket consistantly delivers the best vegitables, hunts and pamtry, stables. High Recomended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profeession: "Model",
    rating: 3,
    para: "As a chef, Quality ingerident are everything. FreshBasket consistantly delivers the best vegitables, hunts and pamtry, stables. High Recomended!",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendos",
    profeession: "Fitnes Coach",
    rating: 4,
    para: "As a chef, Quality ingerident are everything. FreshBasket consistantly delivers the best vegitables, hunts and pamtry, stables. High Recomended!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Nacha Pongchai",
    profeession: "Nutritionst",
    rating: 3,
    para: "As a chef, Quality ingerident are everything. FreshBasket consistantly delivers the best vegitables, hunts and pamtry, stables. High Recomended!",
    image: Customer5,
  },
];
