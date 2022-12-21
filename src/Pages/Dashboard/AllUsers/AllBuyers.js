import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("https://e-bikroy-server.vercel.app/buyers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteBuyers = (id) => {
    const proceed = window.confirm("Are sure to delete this product?");
    if (proceed) {
      fetch(`https://e-bikroy-server.vercel.app/user/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("User deleted successfully");
          }
        });
    }
  };

  if (isLoading) {
    return <h1 className="text-primary text-xl font-semibold">Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl">All User</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((buyer, i) => (
            <tr>
              <th>{i + 1}</th>
              <td>{buyer?.name}</td>
              <td>{buyer?.email}</td>
              <td>{buyer?.role}</td>
              <td>
                <button onClick={() => handleDeleteBuyers(buyer?._id)} className="btn btn-sm btn-error">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
