import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:5000/buyers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteBuyers = (id) => {
    const proceed = window.confirm("Are sure to delete this product?");
    if (proceed) {
      fetch(`http://127.0.0.1:5000/user/delete/${id}`, {
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
