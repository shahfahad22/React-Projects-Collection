import React, { useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlantLight } from "react-icons/pi";
import { PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurProcess() {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
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
  }, []);

  const renderSteps = steps.map((item, index) => {
    // Alternate vertical positioning (zigzag layout)
    const verticalOffset = index % 2 === 0 ? 'md:-mt-20 mt-5' : 'md:mt-20 mt-5';

    return (
      <div
        key={item.id}
        className={`flex-1 basis-[200px] ${verticalOffset}`}
        ref={el => stepsRef.current[index] = el}
      >
        <span className='w-18 mt-20 h-18 text-7xl flex mx-auto justify-center items-center rounded-full outline-[3px] outline-dashed outline-offset-7 outline-zinc-800 text-white bg-zinc-800'>
          {item.number}
        </span>
        <div className='flex items-center mt-6 gap-x-5'>
          <span className='flex bg-gradient-to-b from-orange-400 to-orange-500 rounded-full text-3xl p-3 text-white justify-center items-center'>
            {item.icon}
          </span>
          <div>
            <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
            <p className='text-zinc-600 mt-2'>{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="overflow-x-hidden"> {/* Prevents width issue on refresh */}
      <div className='max-w-[1250px] w-full mx-auto mt-29 px-10 py-20'>
        <div className='flex justify-center'>
          <Heading highlight="Our" heading="Process"/>
        </div>
        <div className='flex flex-wrap md:mt-20 mt-20 items-start  justify-center'>
          {renderSteps}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;

const steps = [
  {
    id:1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fast that a reader",
    icon: <PiPlantLight />
  },
  {
    id:2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />
  },
  {
    id:3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />
  },
  {
    id:4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />
  },
];
