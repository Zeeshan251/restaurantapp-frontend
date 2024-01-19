import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Cities = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-2 mb-16 flex justify-center items-center">
          We are available in
        </h1>
        <div className="flex flex-wrap">
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Amaravathi</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Ahmedabad</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Banglore</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Chennai</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Delhi</h1>
          </div>
        </div>
        <div className="flex flex-wrap mt-16">
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Guwahati</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Amaravathi</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Hyderabad</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Kolkata</h1>
          </div>
          <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 flex justify-around">
            <FaLocationDot className="w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-700 mb-5 flex-shrink-0" />
            <h1 className="text-2xl mt-2">Lucknow</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
