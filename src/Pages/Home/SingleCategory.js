import React from "react";
import { Link } from "react-router-dom";

const SingleCategory = ({ brand }) => {
  const { name, image } = brand;
  return (
    <Link to={`/category/${brand?._id}`}>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-20 pl-6" alt="brand image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click to show all {name} laptops</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCategory;
