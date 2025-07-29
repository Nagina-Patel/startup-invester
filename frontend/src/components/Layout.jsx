import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">{children}</main>
    </>
  );
};

export default Layout;
