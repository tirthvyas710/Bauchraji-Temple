import React from 'react';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Page6 = () => {
  return <ContactPage />;
};

const ContactPage = () => {
  return (
    <div className="h-screen bg-red-200 flex items-center justify-center">
      <div className="w-full h-[80vh] max-w-4xl p-6 bg-transparent/80 shadow-lg rounded-lg backdrop-blur-md">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center md:mt-8 md:text-5xl md:mb-7">
          Contact Us
        </h1>

        {/* Contact Details */}
        <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-10 md:mt-20">
          {/* Phone Number */}
          <div className="flex flex-col items-center text-center md:mt-12">
            <FiPhone className="text-blue-500 text-4xl mb-4 md:text-8xl" />
            <h2 className="text-xl font-semibold text-white">Phone</h2>
            <p className="text-white mt-2">+91 12345 67890</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center md:mt-12">
            <FiMail className="text-red-500 text-4xl mb-4 md:text-8xl" />
            <h2 className="text-xl font-semibold text-white">Email</h2>
            <p className="text-white mt-2">contact@example.com</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center md:mt-12">
            <FiMapPin className="text-green-500 text-4xl mb-4 md:text-8xl" />
            <h2 className="text-xl font-semibold text-white">Location</h2>
            <p className="text-white mt-2">123 Main Street, Ahmedabad, IN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
