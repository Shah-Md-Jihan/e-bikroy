import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/notFoundPage/not-found-page.jpg";

const NotFoundPage = () => {
  return (
    <div className="mt-12">
      <div className="card w-5/6 mx-auto bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-3xl text-red-600 mb-5 font-semibold">Oops!</h2>
          <img src={NotFoundImage} className="w-1/3 mx-auto" />
          <p className="text-xl font-semibold text-red-600">Sorry we couldn't found this route</p>
          <div className="card-actions justify-center mt-2">
            <button className="btn btn-success">
              <Link to="/">Go to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
