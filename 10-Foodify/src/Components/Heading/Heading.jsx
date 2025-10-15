import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ highlight, heading }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // Animate all words except highlight
    const words = headingRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div className='mx-auto w-fit'>
      <h2 ref={headingRef} className='md:text-5xl text-zinc-800 text-[2.5rem] font-bold'>
        {/* Highlight word */}
        <span className='text-orange-500'>{highlight} </span>

        {/* Split remaining heading into words */}
        {heading.split(" ").map((word, i) => (
          <span key={i} className='word'>
            {word}{" "}
          </span>
        ))}
      </h2>
      <div className='w-23 md:w-28 h-1 md:mt-6 mt-3 bg-orange-500'></div>
    </div>
  );
};

export default Heading;
