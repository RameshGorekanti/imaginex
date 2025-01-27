// pages/index.js
import React from "react";

const Innovative = () => {
  return (
    <div className="bg-[#52C1AC] min-h-screen flex items-center justify-center">
      <div className="w-[75%] p-8">
        <h1 className="text-3xl font-bold text-start text-white mb-8">
          Innovative | Creative | Reliable
        </h1>
        <div className=" flex flex-col">
          {/* Who We Are Section */}
          <div className="flex items-center justify-between gap-5">
            <div>
              <h2 className="text-xl font-semibold text-white">Who We Are</h2>
              <p className="text-gray-800">
                Imagine X Design Studio, we are passionate about creating
                exceptional <br /> design solutions that elevate your brand and
                captivate your audience. <br /> With a team of skilled designers
                and strategists, we specialize in delivering innovative,
                creative, and reliable design services.
              </p>
            </div>
            <div className="">
              <img
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1737114101/imagineX/icons-01_1_gxbguy.png"
                alt="pic"
                className=" w-40 h-36"
              />
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="flex items-start space-x-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Our Mission</h2>
              <p className="text-gray-800">
                To transform your ideas into stunning visual realities that
                effectively communicate your message and resonate with your
                target audience.
              </p>
            </div>
            <div className="">
              <img
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1737114100/imagineX/icons-02_h4qbeo.png"
                alt="pic1"
                className="h-28 w-40"
              />
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="flex items-start space-x-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Our Vision</h2>
              <p className="text-gray-800">
                To be a leading design studio known for pushing creative
                boundaries and setting new standards in design excellence.
              </p>
            </div>
            <div className="">
              <img
                src="https://res.cloudinary.com/dagmm478n/image/upload/v1737114100/imagineX/icons-03_ysn1g8.png"
                alt="pic2"
                className="h-32 w-40"
              />
            </div>
          </div>
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

export default Innovative;
