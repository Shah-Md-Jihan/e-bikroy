import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage from "../../../assets/images/banner/banner.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 bg-blue-100">
            <div className="w-full flex justify-end px-10 items-center">
              <div className="text-center">
                <h2 className="text-4xl mb-5">
                  Welcome to <span className="text-orange-500 font-bold">e-Bikroy</span>
                </h2>
                <p>
                  <span className="text-orange-500 font-bold">e-Bikroy</span> is a platform on which you can buy and sell any kind of used laptop! Use
                  the location selector to find deals close to you or check out ads to have items delivered directly to you with 100% buyer
                  protection.
                </p>
              </div>
            </div>
            <div className="w-full">
              <img src={bannerImage} alt="banner image" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 bg-blue-100">
            <div className="w-full flex justify-end px-10 items-center">
              <div className="text-center">
                <h2 className="text-4xl mb-5">
                  Welcome to <span className="text-orange-500 font-bold">e-Bikroy</span>
                </h2>
                <p>
                  <span className="text-orange-500 font-bold">e-Bikroy</span> is a platform on which you can buy and sell any kind of used laptop! Use
                  the location selector to find deals close to you or check out ads to have items delivered directly to you with 100% buyer
                  protection.
                </p>
              </div>
            </div>
            <div className="w-full">
              <img src={bannerImage} alt="banner image" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 bg-blue-100">
            <div className="w-full flex justify-end px-10 items-center">
              <div className="text-center">
                <h2 className="text-4xl mb-5">
                  Welcome to <span className="text-orange-500 font-bold">e-Bikroy</span>
                </h2>
                <p>
                  <span className="text-orange-500 font-bold">e-Bikroy</span> is a platform on which you can buy and sell any kind of used laptop! Use
                  the location selector to find deals close to you or check out ads to have items delivered directly to you with 100% buyer
                  protection.
                </p>
              </div>
            </div>
            <div className="w-full">
              <img src={bannerImage} alt="banner image" />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
