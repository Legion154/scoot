import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container font-space_mono bg-primary duration-300">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
