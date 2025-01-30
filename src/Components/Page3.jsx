import React from "react";

const Page3 = () => {
  return (
    <>
     <div className=" flex items-center justify-center h-screen bg-fixed bg-[url('../public/bg1.webp')] " >

       

     </div>

     <div className="h-[100vh] bg-gray-900 w-full p-12 flex justify-between items-center flex-col " id="About" >
       <div className="h-[30%] w-full flex justify-center items-center flex-col ">
       <p className="  text-orange-500 text-2xl font-[Impact] md:text-4xl">Discover Our Temple</p>
       <p className="text-orange-200 font-semibold text-xs md:text-xl">A sacred space for devotion and community</p>

      
       </div>
       <div className="h-[40%] w-full  ">
        <p className=" text-orange-300 text-xs text-center md:text-lg lg:text-2xl">At Bahuchraji Temple, we are dedicated to nurturing a vibrant spiritual community where faith flourishes. With a heartfelt commitment to service and an unwavering focus on tradition, our team works diligently to maintain a sacred atmosphere for worship. From the daily rituals to festive celebrations, we ensure that every moment spent here is filled with devotion and peace.</p>
        <br />
        <p className=" text-orange-300 text-xs text-center md:text-lg lg:text-2xl">Whether you are seeking solace, guidance, or a place to celebrate your faith, Bahuchraji Temple is here to welcome you. Experience the warmth of our community and the tranquility of our sacred space.</p>

        
       </div>
       <div className="flex justify-center items-center flex-col h-[30%] w-full  mt-10 ">
        <h1 className="font-semibold text-xs text-orange-600 md:text-2xl">YOUR TRUSTED SPIRITUAL SANCTUARY</h1>
        
        <h1 className="font-medium md:text-2xl text-orange-400">Since 2003</h1>
       </div>

     </div>

      
       
    </>
  );
};

export default Page3;
