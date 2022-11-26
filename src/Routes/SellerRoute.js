import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useSeller from "../hooks/useSeller";
import Loader from "../Shared/Loader/Loader";

const SellerRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loader || isSellerLoading) {
    return <Loader></Loader>;
  }
  if (user && isSeller) {
    return children;
  }
  return (
    <>
      <Navigate to="/"></Navigate>
      {toast.error("This route is forbidden for you!")}
    </>
  );
};

export default SellerRoute;
