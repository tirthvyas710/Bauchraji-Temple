
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    // GSAP ScrollTrigger animation
    gsap.fromTo(
      element.querySelectorAll('div'),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3, // Animates each section with a delay
        scrollTrigger: {
          trigger: element,
          start: 'top 40%', 
          end: 'bottom 20%', 
        },
      }
    );
  }, []);

  return (
    <div
      id="pg2"
      ref={sectionRef}
      className="h-full w-full bg-red-100 py-6"
      // Add meta data attributes
      data-component-name="Page2"
      data-description="This component displays spiritual services offered by the temple, including Puja services, community events, and spiritual guidance."
      data-author="Bahuchraji Temple "
      
    >

      <div className="h-[30vh] w-full lg:h-[10vh]">
        <h1 className="text-2xl text-center text-orange-600 pt-2 font-semibold md:text-5xl">
          Spiritual services we offer
        </h1>
        <p className="text-center text-indigo-950 font-semibold p-8 md:text-2xl">
          From daily rituals to special ceremonies, we work hand in hand with you to create meaningful spiritual experiences
        </p>
      </div>

      <div className="lg:flex justify-center items-start  md:p-10 lg:p-24">
        <div className="text-red-600 p-3 lg:w-[33.33333%] flex justify-center items-center flex-col md:flex md:justify-start md:items-start">
          <h1 className="font-bold text-orange-600 text-3xl md:text-4xl">
            Puja Services
          </h1>
          <p className="pt-6 text-indigo-950 font-semibold  text-center md:text-left">
            Our Puja services are designed to help you connect with the divine through personalized rituals. Whether for a family occasion or a community event, our experienced priests guide you in performing sacred ceremonies that honor tradition and spirituality.
          </p>
        </div>

        <div className="text-red-600 p-3 lg:w-[33.33333%] flex justify-center items-center flex-col md:flex md:justify-start md:items-start">
          <h1 className="font-bold text-orange-600 text-3xl md:text-4xl">
            Community Events
          </h1>
          <p className="pt-6 text-indigo-950 font-semibold text-center md:text-left">
            Join us for our community events, where we celebrate our faith and culture together. These gatherings foster a sense of belonging and provide opportunities for spiritual growth, sharing joy, and building lasting connections with fellow devotees.
          </p>
        </div>

        <div className="text-red-600 p-3 lg:w-[33.33333%] flex justify-center items-center flex-col md:flex md:justify-start md:items-start">
          <h1 className="font-bold text-orange-600 text-3xl md:text-4xl ">
            Spiritual  Guidance
          </h1>
          <p className="pt-6 text-indigo-950 font-semibold text-center md:text-left">
            Seek wisdom and clarity through our Spiritual Guidance sessions. Our knowledgeable mentors are here to support your spiritual journey, offering insights and teachings that resonate with your heart and mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;

