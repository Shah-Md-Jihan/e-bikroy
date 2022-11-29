import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import SearchField from "../Shared/SearchField/SearchField";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SearchField></SearchField>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
