import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const Index = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};
