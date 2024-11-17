import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container font-space_mono">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
