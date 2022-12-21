import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const YourAdds = () => {
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are sure to delete this product?");
    if (proceed) {
      fetch(`https://e-bikroy-server.vercel.app/adds/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("deleted successfully");
          }
        });
    }
  };

  const {
    data: yourProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["yourProducts"],
    queryFn: async () => {
      const res = await fetch(`https://e-bikroy-server.vercel.app/adds/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdvertisement = (id) => {
    fetch(`https://e-bikroy-server.vercel.app/adds/make/advertisement/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Your product added on advertisement section!");
        }
      });
  };

  if (isLoading) {
    return <h1 className="text-primary text-xl font-semibold">Loading...</h1>;
  }

  return (
    <div>
      <h2 className="text-2xl">Your adds</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Photos</th>
              <th>Product Names</th>
              <th>Brand</th>
              <th>Resale Price</th>
              <th>Sales Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {yourProducts?.map((add, i) => (
              <tr key={add?._id}>
                <th>{i + 1}</th>
                <td>
                  <img src={add?.image} className="w-24" alt="product image" />
                </td>
                <td>{add?.name}</td>
                <td>{add?.brand}</td>
                <td>$ {add?.resalePrice}</td>
                <td>
                  {add?.paid === true ? (
                    <div className="badge badge-accent badge-outline">Sold</div>
                  ) : (
                    <div className="badge badge-secondary badge-outline">Available</div>
                  )}
                </td>
                <td>
                  <div className="btn-group">
                    {add?.advertisement === "false" ? (
                      <button
                        disabled={add?.paid === true ? true : false}
                        onClick={() => handleMakeAdvertisement(add?._id)}
                        className="btn btn-sm btn-success"
                      >
                        Add To Advertisement
                      </button>
                    ) : (
                      <button disabled={add?.paid === true ? true : false} className="btn btn-sm btn-primary">
                        Remove Advertisement
                      </button>
                    )}

                    <button disabled={add?.paid === true ? true : false} className="btn btn-sm btn-warning">
                      Edit
                    </button>
                    <button disabled={add?.paid === true ? true : false} onClick={() => handleDelete(add?._id)} className="btn btn-sm">
                      Delete
                    </button>
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

export default YourAdds;
