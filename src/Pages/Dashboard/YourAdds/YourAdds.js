import React from "react";
import { useLoaderData } from "react-router-dom";

const YourAdds = () => {
  const addsData = useLoaderData();

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addsData.map((add, i) => (
              <tr key={add?._id}>
                <th>{i + 1}</th>
                <td>
                  <img src={add?.image} className="w-24" alt="product image" />
                </td>
                <td>{add?.name}</td>
                <td>{add?.brand}</td>
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

export default YourAdds;
