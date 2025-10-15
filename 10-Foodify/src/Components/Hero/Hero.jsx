import React, { useEffect, useRef } from 'react';
import heroimg from "../../assets/images/main.png";
import Button from '../Button/Button';
import { gsap } from "gsap";

function Hero() {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Parent container overflow hidden to avoid scrollbar
    if (containerRef.current) {
      containerRef.current.style.overflow = "hidden";
    }

    const tl = gsap.timeline();

    // Heading animation
   tl.fromTo(
  headingRef.current,
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.8, ease: "power3.out" }
);
    // Paragraph animation
    tl.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    // Button animation
    tl.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );

    // Image slide-in from right
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  return (
    <section>
      <div
        ref={containerRef}
        className='max-w-[1250px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-20 pt-25 min-h-screen'
      >
        {/* Hero Content */}
        <div className='flex-1'>
          <h1 ref={headingRef} className='md:text-7xl/20 font-bold text-5xl/14 mt-5'>
            Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies </span> In Your City
          </h1>
          <p ref={paragraphRef} className='text-zinc-600 md:text-lg text-md max-w-[500px] mt-5 mb-8'>
            Bred for a high content of beneficial substance. Our products are all fresh and healthy
          </p>
          <div ref={buttonRef}>
            <Button content="Shop Now" />
          </div>
        </div>

        {/* Hero Image */}
        <div className='flex-1'>
          <img ref={imageRef} src={heroimg} alt="Hero-image"  loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
