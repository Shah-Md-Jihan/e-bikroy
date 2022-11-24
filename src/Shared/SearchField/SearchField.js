import React from "react";

const SearchField = () => {
  return (
    <div className="w-3/4 mx-auto flex my-12">
      <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-none" />
      <button className="btn btn-warning rounded-none">Search</button>
    </div>
  );
};

export default SearchField;
