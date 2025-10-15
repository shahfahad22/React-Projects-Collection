import React, { useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basketfull from "../../assets/images/basket-full-vegetables.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Values() {
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Left values: slide in from left
    leftRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Right values: slide in from right
    rightRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Center image: fade in with slight scale
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const leftValues = value.slice(0, 2).map((item, index) => (
    <div
      key={item.id}
      className='flex md:flex-row-reverse items-center gap-7'
      ref={el => leftRefs.current[index] = el}
    >
      <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white'>
        {item.icon}
      </span>
      <div className='md:text-right'>
        <h3 className='text-zinc-900 text-3xl font-bold'>{item.title}</h3>
        <p className='text-zinc-800 mt-2'>{item.para}</p>
      </div>
    </div>
  ));

  const rightValues = value.slice(2).map((item, index) => (
    <div
      key={item.id}
      className='flex items-center gap-7'
      ref={el => rightRefs.current[index] = el}
    >
      <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white'>
        {item.icon}
      </span>
      <div>
        <h3 className='text-zinc-900 text-3xl font-bold'>{item.title}</h3>
        <p className='text-zinc-800 mt-2'>{item.para}</p>
      </div>
    </div>
  ));

  return (
    <section className='max-w-[1250px] mx-auto px-10 py-20 overflow-x-hidden'>
      <Heading highlight="Our" heading="Value" />
      <div className='flex md:flex-row flex-col gap-7 mt-15'>
        {/* Left Values */}
        <div className='md:min-h-100 gap-15 md:gap-3 flex flex-col justify-between'>
          {leftValues}
        </div>

        {/* Main Image */}
        <div className='md:flex w-1/2 hidden justify-center items-center'>
          <img ref={imageRef} src={Basketfull} alt="Basket full"  loading="lazy" />
        </div>

        {/* Right Values */}
        <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
          {rightValues}
        </div>
      </div>
    </section>
  );
}

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaHeart />
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by a readable.",
    icon: <FaLeaf />
  },
  {
    id: 3,
    title: "Food Safety",
    para: "We prioritize hygiene and follow strict safety standards to ensure every bite is safe and healthy.",
    icon: <FaShieldAlt />
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Our products are sourced naturally without harmful chemicals or pesticides for a healthier lifestyle.",
    icon: <FaSeedling />
  },
];
