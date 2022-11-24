import React from "react";
import SearchField from "../../Shared/SearchField/SearchField";
import Banner from "./Banner/Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <SearchField></SearchField>
      <Banner></Banner>
      <Category></Category>
    </div>
  );
};

export default Home;
