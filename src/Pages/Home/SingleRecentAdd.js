import React from "react";

const SingleRecentAdd = ({ add }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl pl-5">
      <figure>
        <img src={add?.image} className="w-40" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{add?.name}</h2>
        <small>Brand: {add?.brand}</small>
        <p className="text-orange-500 text-semibold">Price: ${add?.resalePrice}</p>
      </div>
    </div>
  );
};

export default SingleRecentAdd;
