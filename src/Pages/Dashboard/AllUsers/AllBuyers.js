import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:5000/buyers");
      const data = await res.json();
      return data;
    },
  });
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
                <button className="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
