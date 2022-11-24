import React from "react";

const SearchField = () => {
  return (
    <div className="mx-auto w-3/4">
      <div className="my-24 flex">
        <input type="text" placeholder="Search your laptop here" className="input input-bordered input-primary w-full rounded-none" />
        <button className="btn btn-accent rounded-none font-bold">Search</button>
      </div>
    </div>
  );
};

export default SearchField;
