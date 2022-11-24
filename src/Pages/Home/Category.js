import React from "react";
import SingleCategory from "./SingleCategory";

const Category = () => {
  return (
    <div className="px-12 mt-24">
      <h1 className="text-white text-xl">Browse laptops by category </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
      </div>
    </div>
  );
};

export default Category;
