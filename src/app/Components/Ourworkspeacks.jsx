// components/Services.js
'use client'
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";

const Ourworkspeacks = () => {
  const slides = [
    {
      title: "Graphic Design",
      description: [
        "Logos & Branding",
        "Business Cards",
        "Brochures & Flyers",
        "Posters & Banners",
      ],
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1737957275/imagineX/Vector_uza0px.png",
    },
    {
      title: "Web Development",
      description: [
        "Responsive Websites",
        "E-commerce Platforms",
        "Content Management Systems",
        "Custom Web Applications",
      ],
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1737957275/imagineX/Vector_uza0px.png",
    },
    {
      title: "Digital Marketing",
      description: [
        "Social Media Management",
        "SEO & SEM",
        "Content Marketing",
        "Email Campaigns",
      ],
      image:
        "https://res.cloudinary.com/dagmm478n/image/upload/v1737957275/imagineX/Vector_uza0px.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#F5F5F5] flex items-center justify-center">
      <div className="w-[75%] p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h1>
        <h2 className="text-xl font-semibold text-teal-500 mb-8">
          Our Work Speaks for Itself
        </h2>

        <div className="flex items-center space-x-8">
          <button
            onClick={handlePrev}
            className="w-14 h-12 bg-teal-300 rounded-full flex items-center justify-center hover:bg-white"
          >
            <span className="text-2xl">
              <IoIosArrowBack />
            </span>
          </button>

          <div className="flex items-center w-full space-x-8">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {slides[currentSlide].title}
              </h3>
              <ul className="list-disc ml-6 text-gray-700">
                {slides[currentSlide].description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="w-1/2 relative">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className=""
              />
              <div className="absolute top-24 right-40">
                <BsPlayCircle />
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-14 h-12 bg-teal-300 rounded-full flex items-center justify-center hover:bg-white"
          >
            <span className="text-2xl">
              <IoIosArrowForward />
            </span>
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

export default Ourworkspeacks;
