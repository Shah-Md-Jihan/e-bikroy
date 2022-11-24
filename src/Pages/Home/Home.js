import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import SearchField from "../../Shared/SearchField/SearchField";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <SearchField></SearchField>
        <Category></Category>
      </header>
    </div>
  );
};

export default Home;
