import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";

const MyOrders = () => {
  const [ordersLoading, setOrdersLoading] = useState(false);
  const { user } = useContext(AuthContext);
  // setOrdersLoading(true);
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`https://e-bikroy-server.vercel.app/order/all/${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("e-Bikroy-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // setOrdersLoading(false);
  if (isLoading) {
    return <h1 className="text-primary text-xl font-semibold">Loading...</h1>;
  }
  return (
    <div>
      <h1 className="text-2xl mb-5">My Orderskkkkk</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <img src={order?.productImage} className="w-14" />
                </td>
                <td>{order?.productName}</td>
                <td>{order?.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${order?._id}`}>
                    {order?.price && !order?.paid && <button className="btn btn-sm btn-success">Pay</button>}
                  </Link>
                  {order?.price && order?.paid && <div className="badge badge-accent badge-outline">Paid</div>}
                </td>
                <td>
                  <button disabled={order?.paid ? true : false} className="btn btn-sm btn-error">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
