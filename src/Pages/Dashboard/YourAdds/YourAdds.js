import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const YourAdds = () => {
  const { user } = useContext(AuthContext);
  // const addsData = useLoaderData();
  // const [advertisement, setAdvertisement] = useState("");

  const {
    data: yourProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["yourProducts"],
    queryFn: async () => {
      const res = await fetch(`http://127.0.0.1:5000/adds/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdvertisement = (id) => {
    fetch(`http://127.0.0.1:5000/adds/make/advertisement/${id}`, {
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
                <td>available</td>
                <td>
                  <div className="btn-group">
                    {add?.advertisement === "false" ? (
                      <button onClick={() => handleMakeAdvertisement(add?._id)} className="btn btn-sm btn-success">
                        Add To Advertisement
                      </button>
                    ) : (
                      <button className="btn btn-sm btn-primary">Remove Advertisement</button>
                    )}

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

export default YourAdds;
