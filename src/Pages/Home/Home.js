import React from "react";
import SearchField from "../../Shared/SearchField/SearchField";
import Banner from "./Banner/Banner";
import Category from "./Category";
import DeliveryOffer from "./DeliveryOffer/DeliveryOffer";

import RecentAdds from "./RecentAdds";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <RecentAdds></RecentAdds>
      <DeliveryOffer></DeliveryOffer>
    </div>
  );
};

export default Home;
