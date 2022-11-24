import React from "react";
import SingleRecentAdd from "./SingleRecentAdd";

const RecentAdds = () => {
  return (
    <div className="px-12 mt-24">
      <h1 className="text-black text-xl font-semibold mb-6 text-blue-600">Latest laptops adds</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <SingleRecentAdd></SingleRecentAdd>
        <SingleRecentAdd></SingleRecentAdd>
        <SingleRecentAdd></SingleRecentAdd>
      </div>
    </div>
  );
};

export default RecentAdds;
