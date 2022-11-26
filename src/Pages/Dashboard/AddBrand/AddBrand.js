import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBrand = () => {
  const imgHostKey = process.env.REACT_APP_image_bb_key;
  console.log(imgHostKey);

  // console.log(hostingImageKey);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const handleAddBrand = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const brand = {
            name: data.name,
            image: imgData.data.url,
          };
          //   save brands in database
          fetch("http://127.0.0.1:5000/brands", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(brand),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.name} brand added Successfully!`);
              reset();
            });
        }
      });
  };
  return (
    <div className="">
      <div className="w-1/2 h-[800px] p-6 mx-auto">
        <h1 className="text-xl font-semibold text-center">Add Brand</h1>
        <form onSubmit={handleSubmit(handleAddBrand)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand Image</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Brand image is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.image?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full mt-4">
            <input type="submit" value="ADD Brand" className="btn btn-primary w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
