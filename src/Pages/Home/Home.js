import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SearchField from "../../Shared/SearchField/SearchField";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <SearchField></SearchField>
      <Category></Category>
      <Footer></Footer>
    </div>
  );
};

export default Home;
