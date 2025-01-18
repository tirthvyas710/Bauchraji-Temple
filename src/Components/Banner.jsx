import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger Animation
    const element = bannerRef.current;
    ScrollTrigger.create({
      trigger: element,
      start: 'top 60%', 
      onEnter: () => startCounting(),   
    });

    const startCounting = () => {
      const interval1 = setInterval(() => {
        setCount1(prev => (prev < 2000 ? prev + 100 : 2000));
      }, 100);

      const interval2 = setInterval(() => {
        setCount2(prev => (prev < 5000 ? prev + 100 : 5000));
      }, 100);

      const interval3 = setInterval(() => {
        setCount3(prev => (prev < 25 ? prev + 1 : 25));
      }, 100);

      const interval4 = setInterval(() => {
        setCount4(prev => (prev < 100 ? prev + 3 : 100));
      }, 100);

      // Clear intervals once complete
      setTimeout(() => clearInterval(interval1), 2000);
      setTimeout(() => clearInterval(interval2), 5000);
      setTimeout(() => clearInterval(interval3), 2500);
      setTimeout(() => clearInterval(interval4), 2000);
    };
  }, []);

  return (
    <div id='Banner'
      ref={bannerRef}
      className='h-[80vh] w-full bg-orange-50 flex flex-col justify-between items-center py-11 lg:p-16 lg:flex-row lg:h-[40vh] '
    >
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text-orange-600 font-[Impact]'>{count1}</h1>
        <h2 className='text-2xl font-medium text-indigo-950 md:text-xl'>Devotee Served</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text-orange-600 font-[Impact]'>{count2}</h1>
        <h2 className='text-2xl font-medium text-indigo-950 md:text-xl'>Puja Ceremonies Conducted</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text-orange-600 font-[Impact]'>{count3}</h1>
        <h2 className='text-2xl font-medium text-indigo-950 md:text-xl'>Years of Devotions</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text-orange-600 font-[Impact]'>{count4}+</h1>
        <h2 className='text-2xl font-medium text-indigo-950 md:text-xl'>Community Events Hosted</h2>
      </div>
    </div>
  );
};

export default Banner;
