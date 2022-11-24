import React from "react";

const AddBrand = () => {
  return (
    <div className="mt-12">
      <div className="card w-2/4 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Brand</h2>
          <form>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />

              <label className="label">
                <span className="label-text">Brand Image</span>
              </label>
              <input type="file" placeholder="Type here" className="input input-bordered w-full" />
            </div>
          </form>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Add Brand</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrand;
