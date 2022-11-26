import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleCategory from "./SingleCategory";

const Category = () => {
  const { data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:5000/brands");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="px-12 mt-24">
      <h1 className="text-black text-xl font-semibold text-blue-600 mb-6">Browse laptops by category </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {brands.map((brand) => (
          <SingleCategory key={brand?._id} brand={brand}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
