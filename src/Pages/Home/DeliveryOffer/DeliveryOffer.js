import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Delivery from "../../../assets/images/deliveryBanner/delivery.jpg";

const DeliveryOffer = () => {
  return (
    <div className="px-12 mt-24">
      <div className="card grid grid-cols-1 lg:grid-cols-2 card-side bg-base-100 shadow-xl">
        <figure className="lg:ml-44">
          <img className="w-96" src={Delivery} alt="Movie" />
        </figure>
        <div className="card-body pt-12">
          <h2 className="card-title">Get items delivery offer for you!</h2>
          <p>
            Choose from over 3 items that can be delivered to your doorstep. Order online and enjoy our Buyer Protection program, which means that
            we’ll replace the item for FREE if it’s not as described in the ad!
            <div className="card-actions justify-start mt-4">
              <a href="#category" className="btn bg-blue-600 border-none">
                Shop Now <FaAngleRight className="ml-2" />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOffer;
