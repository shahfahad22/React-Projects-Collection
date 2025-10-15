import React, { useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import FruitsCat from "../../assets/images/fruits-and-veggies.png";
import SeafoodCat  from "../../assets/images/meat-and-seafood.png";
import DairyCat from "../../assets/images/dairy-and-eggs.png";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Category = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      let fromProps = {};

      if (index === 0) fromProps = { x: 100, opacity: 0 };
      else if (index === 1) fromProps = { y: 100, opacity: 0 };
      else if (index === 2) fromProps = { x: -100, opacity: 0 };

      gsap.fromTo(
        card,
        fromProps,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const rednderCard = category.map((card, index) => {
    return (
      <div
        key={card.id}
        className='flex-1 basis-[300px]'
        ref={(el) => (cardsRef.current[index] = el)}
      >
        {/* Card image */}
        <div className='w-full min-h-[30vh] relative -mb-10'>
          <img src={card.image} className="w-full h-auto object-contain mx-auto"  loading="lazy" />
        </div>

        {/* Card content */}
        <div className='bg-zinc-100 pt-17 p-8 rounded-2xl'>
          <h3 className='text-zinc-900 text-3xl font-bold'>{card.title}</h3>
          <p className='text-zinc-700 mt-3 mb-9'>{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-7 py-2 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className='py-20 max-w-[1250px] mx-auto px-10 md:mt-10'>
        <Heading highlight="Shop" heading="by Category" />
        {/* Category Cards */}
        <div className='flex flex-wrap gap-10 mt-10'>
          {rednderCard}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id:1,
    title: 'Fruits & Vaggies',
    description: 'Fresh, Organic produce scoured daily from local farms. Explore a wide range of seasonal fruits and crisp vegitables.',
    image: FruitsCat,
    path: '/fruits'
  },
  {
    id:2,
    title: 'Dairy &  Eggs',
    description:'Wholesome dairy products and free-range eggs, From creamy milk and yogurt to artisinal chesses.',
    image: DairyCat,
    path: '/dairy'
  },
  {
    id:3,
    title: 'Meet & Sea Food',
    description: 'High-quality, responsibly sourced meat and seafood, choose from fresh cuts, marinated options, and more.',
    image: SeafoodCat,
    path: '/meet'
  },
];
