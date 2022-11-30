import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookingModal = ({ bookedLaptop, loggedInUser, setBookedLaptop, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();
  //   const navigate = useNavigate();

  const handleBooking = (data) => {
    // const formData = new FormData();
    const order = {
      // userName: setValue(data.userName, loggedInUser?.displayName),
      buyerName: data?.userName,
      buyerEmail: data?.userEmail,
      buyerLocation: data?.meetingLocation,
      buyerPhone: data?.phoneNumber,
      price: data?.resalePrice,
      productId: bookedLaptop?._id,
      productName: bookedLaptop?.name,
      productImage: bookedLaptop?.image,
    };
    // console.log(data);
    // console.log(bookedLaptop);
    //   save adds in database
    fetch("https://e-bikroy-server.vercel.app/order/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
        refetch();
        setBookedLaptop(null);
        toast.success("Your booking is confirmed!");
      });
    // console.log(order);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{bookedLaptop?.name}</h3>

          <form onSubmit={handleSubmit(handleBooking)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input type="text" {...register("userName")} className="input input-bordered w-full" disabled />
              {setValue("userName", loggedInUser?.displayName)}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input type="text" {...register("userEmail")} className="input input-bordered w-full" disabled />
              {setValue("userEmail", loggedInUser?.email)}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input type="text" {...register("resalePrice")} className="input input-bordered w-full" disabled />
              {setValue("resalePrice", bookedLaptop?.resalePrice)}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                type="text"
                {...register("meetingLocation", {
                  required: "Meeting location is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.meetingLocation && (
                <p className="text-red-600 mt-1" role="alert">
                  {errors.meetingLocation?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.phoneNumber && (
                <p className="text-red-600 mt-1" role="alert">
                  {errors.phoneNumber?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full mt-4">
              <input type="submit" value="Book Laptop" className="btn btn-primary w-full" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
