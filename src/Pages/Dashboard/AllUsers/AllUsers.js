import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:5000/sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeVerified = (id, email) => {
    fetch(`http://localhost:5000/users/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          fetch(`http://localhost:5000/add/verify/seller/${email}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                toast.success("Seller Verified!");
                refetch();
              }
            });
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl">All users</h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user?._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  {user?.role === "seller" ? (
                    user?.verified === "false" ? (
                      <button onClick={() => handleMakeVerified(user?._id, user?.email)} className="btn btn-sm btn-success">
                        Make Verified
                      </button>
                    ) : (
                      <div className="badge badge-accent badge-outline">Verified</div>
                    )
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
