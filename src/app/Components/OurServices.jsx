// components/Services.js
import React from "react";

const OurServices = () => {
  return (
    <div className="bg-[#F5F5F5] flex items-center justify-center">
      <div className="w-[75%] p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h1>
        <h2 className="text-xl font-semibold text-teal-500 mb-8">
          Our Work Speaks for Itself
        </h2>

        <div className="flex items-center space-x-8">
          <button className="w-14 h-12 bg-teal-300 rounded-full flex items-center justify-center">
            <span className="text-2xl">⟵</span>
          </button>

          <div className="flex items-center w-full space-x-8">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Graphic Design
              </h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Logos & Branding</li>
                <li>Business Cards</li>
                <li>Brochures & Flyers</li>
                <li>Posters & Banners</li>
              </ul>
            </div>

            <div className="w-1/2">
              <img
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1737115236/imagineX/Group_5_1_ju9zmg.png"
                alt="Graphic Design"
                className=""
              />
            </div>
          </div>

          <button className="w-14 h-12 bg-teal-300 rounded-full flex items-center justify-center">
            <span className="text-2xl">⟶</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-yellow-400 text-black px-6 py-1 text-center rounded-3xl text-sm hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
