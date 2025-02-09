import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';

const Page1 = () => {
  const pg1Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(pg1Ref.current, { opacity: 0, y: 500 }, { y: 0, opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div ref={pg1Ref} id='pg1'>
      <Helmet>
        <title>Bahuchraji Temple </title>
        
        <meta name='description' content='Discover the beauty and history of Bahuchraji Temple in Gujarat. Explore temple timings, rituals, festivals, and more to enhance your spiritual journey.' />
        <meta name='keywords' content='Bahuchraji Temple, spiritual temple, Gujarat temples, Hindu temples, Bahuchraji history, festivals at Bahuchraji' />

        <meta property="og:title" content="Bahuchraji Temple - A Spiritual Haven" />
        <meta property="og:description" content="Explore the sacred Bahuchraji Temple in Gujarat, its history, rituals, and festivals." />
        <meta property="og:image" content="/images/bahuchraji-temple.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />


      </Helmet>

      <div className='h-96 w-full bg-red-400 flex flex-col md:flex-row' id='hero'>
        <div className='h-[20%] w-full flex justify-center items-center bg-red-200 text-red-600 md:w-[60%] md:h-full'>
          <h1 className='text-xl font-bold md:text-3xl lg:text-6xl'>Welcome to Bahuchraji Temple</h1>
        </div>

        
        <div className='h-[80%] w-full p-10 text-center flex justify-center items-center flex-col bg-red-100 md:w-[40%] md:h-full'>
          <p className='font-semibold text-sm  lg:text-xl '>ॐ सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। <br />
          शरण्ये त्र्यम्बके गौरी नारायणि नमोऽस्तुते॥</p>
          <br />
          <p className='text-sm  lg:text-xl'>Welcome to the sacred land of Maa Bahuchraji and Lord Shiva, where divine energies flow and faith finds its true essence. As you step into these holy temples, let the blessings of Maa Bahuchraji and Mahadev fill your soul with peace, strength, and devotion.</p> <br />
          <p className='font-semibold text-sm  lg:text-xl'>ॐ नमः शिवाय। जय माताजी।</p>
        </div>
      </div>
      <div className='h-[70vh] w-full bg-red-400 flex flex-col md:flex-row'>
        <img src='' alt='Bahuchraji Temple' />
      </div>
    </div>
  );
};

export default Page1;

