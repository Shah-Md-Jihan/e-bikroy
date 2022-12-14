import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBrands = () => {
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await fetch("https://e-bikroy-server.vercel.app/brands");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1 className="text-primary text-xl font-semibold">Loading...</h1>;
  }
  return (
    <div className="p-10">
      <h2 className="text-2xl mb-6">All Brands</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, i) => (
              <tr key={brand?._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={brand?.image} className="w-48 p-10" alt="brand logo" />
                </td>
                <td>{brand?.name}</td>
                <td>
                  <div className="btn-group">
                    <button className="btn btn-sm btn-warning">Edit</button>
                    <button className="btn btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBrands;
