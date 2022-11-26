import React from "react";
import { FaTags } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const brandData = useLoaderData();
  const brandId = brandData?._id;
  console.log(brandData);
  console.log(brandId);
  return (
    <div className="px-12 mt-12">
      <h1 className="text-xl font-bold text-blue-600">
        <span className="flex items-center">
          <FaTags className="mr-3" />
          All {brandData?.name} Laptops
        </span>
      </h1>
    </div>
  );
};

export default BrandDetails;
