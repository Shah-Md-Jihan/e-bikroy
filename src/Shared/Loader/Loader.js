import React from "react";
import { Spinner } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const Loader = () => {
  return <Spinner text={"Loading..."} center={true} width={"150px"} height={"150px"} />;
};

export default Loader;
