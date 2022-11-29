import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaCheckCircle, FaTags } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import BookingModal from "./BookingModal/BookingModal";
import { AuthContext } from "./../../context/AuthProvider";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const { user } = useContext(AuthContext);
  const brandData = useLoaderData();
  const brandName = brandData?.name;
  const [bookedLaptop, setBookedLaptop] = useState(null);

  const ordersArray = [];
  const { data: orders, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`http://127.0.0.1:5000/order/all/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  orders?.map((order) => {
    ordersArray.push(order?.productId);
    refetch();
  });

  // console.log(ordersArray);

  const { data: products, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(`http://127.0.0.1:5000/products/${brandName}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="px-12 mt-12">
      <h1 className="text-xl font-bold text-blue-600">
        <span className="flex items-center">
          <FaTags className="mr-3" />
          All {brandData?.name} Laptops
        </span>
      </h1>

      {bookedLaptop && (
        <BookingModal bookedLaptop={bookedLaptop} loggedInUser={user} setBookedLaptop={setBookedLaptop} refetch={refetch}></BookingModal>
      )}

      <div className="max-w-[1270px] mx-auto">
        {products?.length === 0 && (
          <div className="card w-3/4 mx-auto mt-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center py-14 text-3xl text-red-600">No Products To Show!</h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products?.map((product) => (
            <div key={product?._id} className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={product?.image} className="w-48" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <p>{product?.location}</p>
                <p>Original Price: $ {product?.originalPrice}</p>
                <p className="font-bold text-blue-600">Resale Price: $ {product?.resalePrice}</p>
                <p>Used Time: {product?.yearOfUse}</p>
                <p className="flex items-center">
                  Seller: {product?.sellerName}
                  <span className="ml-1 text-blue-600">{product?.verified === "true" && <FaCheckCircle />}</span>
                </p>

                <div className="card-actions justify-start">
                  {ordersArray.includes(product?._id) === true ? (
                    <span className="text-orange-600">Booked</span>
                  ) : (
                    <label onClick={() => setBookedLaptop(product)} htmlFor="booking-modal" className="btn btn-warning btn-sm">
                      Book Now
                    </label>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
