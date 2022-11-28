import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";

const PostAdd = () => {
  const imgHostKey = process.env.REACT_APP_image_bb_key;
  const { user } = useContext(AuthContext);

  const { data: brands, isLoading } = useQuery({
    queryKey: ["brand"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:5000/brands");
      const data = await res.json();
      return data;
    },
  });
  const { data: userInfo, isUserLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await fetch(`http://127.0.0.1:5000/users/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const handlePostAdd = (data) => {
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
          const adds = {
            name: data.name,
            image: imgData.data.url,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            yearOfUse: data.yearOfUse,
            location: data.location,
            brand: data.brand,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            verified: userInfo?.verified,
            condition: data.condition,
            mobile: data.mobile,
            description: data.description,
            advertisement: "false",
          };
          //   save adds in database
          fetch("http://127.0.0.1:5000/post/add", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(adds),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`Your advertisement added successfully!`);
              reset();
              navigate(`/dashboard/adds/${user?.email}`);
            });
        }
      });
  };
  if (isLoading || isUserLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <h1 className="text-2xl">Post your add</h1>
      <div className="w-1/2 h-[800px] p-6 mx-auto">
        <h1 className="text-xl font-semibold text-center">Add Your Advertisement</h1>
        <form onSubmit={handleSubmit(handlePostAdd)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name</span>
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
              <span className="label-text">Select Brand</span>
            </label>
            <select
              {...register("brand", {
                required: "Brand selection is required",
              })}
              className="select input-bordered w-full"
            >
              <option disabled selected>
                Select Brand
              </option>
              {brands.map((brand) => (
                <option key={brand?._id} value={brand?.name}>
                  {brand?.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: "Original price is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.originalPrice && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.originalPrice?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: "Resale price is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.resalePrice && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.resalePrice?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Year of Use</span>
            </label>
            <input
              type="text"
              {...register("yearOfUse", {
                required: "Year of use is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.yearOfUse && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.yearOfUse?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: "Location is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.location && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.location?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              {...register("mobile", {
                required: "Mobile number is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.mobile && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.mobile?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              rows={5}
              {...register("description", {
                required: "Description is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.description && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.description?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Condition Type</span>
            </label>
            <select
              {...register("condition", {
                required: "Condition is required",
              })}
              className="select input-bordered w-full"
            >
              <option disabled selected>
                Select Condition
              </option>

              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Image</span>
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
            <input type="submit" value="ADD Advertisement" className="btn btn-primary w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAdd;
