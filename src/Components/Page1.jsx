import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Page1 = () => {
  const pg1Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(pg1Ref.current, { opacity: 0,y:500 }, {y:0, opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div ref={pg1Ref} id='pg1'>
    
    
      <div className='h-96 w-full bg-red-400 flex flex-col md:flex-row' id='hero'>
        <div className='h-[20%] w-full flex justify-center items-center bg-red-600 md:w-[60%] md:h-full'>
          <h1 className='text-1xl font-bold'>Welcome to Bahuchraji Temple</h1>
        </div>

        <div className='h-[80%] w-full p-10 text-center flex justify-center items-center bg-red-100 md:w-[40%] md:h-full'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio placeat, facilis ea aperiam obcaecati labore! Distinctio aliquam, pariatur, illum magni aperiam dolore iste, itaque quam nesciunt vel expedita. Illum, magnam.</p>
        </div>
      </div>
      <div className='h-[70vh] w-full bg-red-400 flex flex-col md:flex-row'>
        <img src='' alt='' />
      </div>
    
    </div>
  );


};

export default Page1;

