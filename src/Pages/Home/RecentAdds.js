import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleRecentAdd from "./SingleRecentAdd";

const RecentAdds = () => {
  const { data: advertisement, isUserLoading } = useQuery({
    queryKey: ["advertisement"],
    queryFn: async () => {
      const res = await fetch(`https://e-bikroy-server.vercel.app/adds/advertisement`);
      const data = await res.json();
      return data;
    },
  });
  if (advertisement?.length === 0) {
    return;
  }
  return (
    <div className="px-12 mt-24">
      <h1 className="text-black text-xl font-semibold mb-6 text-blue-600">Latest laptops advertisement</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {advertisement?.map((add) => (
          <SingleRecentAdd key={add?._id} add={add}></SingleRecentAdd>
        ))}
      </div>
    </div>
  );
};

export default RecentAdds;
