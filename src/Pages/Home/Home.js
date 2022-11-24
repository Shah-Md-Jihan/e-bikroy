import React from "react";
import SearchField from "../../Shared/SearchField/SearchField";
import Banner from "./Banner/Banner";
import Category from "./Category";
import RecentAdds from "./RecentAdds";

const Home = () => {
  return (
    <div>
      <SearchField></SearchField>
      <Banner></Banner>
      <Category></Category>
      <RecentAdds></RecentAdds>
    </div>
  );
};

export default Home;
