import React from "react";
import footerBg from "../../assets/footerBg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main className="w-screen m-auto absolute left-0 right-0">
      <div className="relative bg-[#495567]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 py-28 px-3 sm:px-5 2xl:px-40">
          <img
            src={footerBg}
            className="absolute bottom-0 right-0 hidden md:block"
            alt="footerbg"
          />
          <h1 className="text-white font-bold text-5xl w-auto text-center md:text-start sm:w-4/6 md:w-2/5">
            Sign up and Scoot off today
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="flex flex-row items-center gap-4 px-4 py-2 bg-white rounded-md">
              <i className="fa-brands fa-apple text-3xl"></i>
              <div className="flex flex-col items-start">
                <p className="text-xs font-bold">Available on the</p>
                <span className="font-bold">AppStore</span>
              </div>
            </button>
            <button className="flex flex-row items-center gap-4 px-4 py-2 bg-white rounded-md">
              <i className="fa-brands fa-google-play text-3xl"></i>
              <div className="flex flex-col items-start">
                <p className="text-xs font-bold">Get it on</p>
                <span className="font-bold text-base">GooglePlay</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#333A44]">
        <div className="py-5 px-3 sm:px-5 2xl:px-40 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center md:gap-10 lg:gap-20">
            <h1 className="text-4xl font-bold text-white select-none">
              <Link to={"/"}>scoot</Link>
            </h1>
            <ul className="hidden md:flex flex-row items-center gap-10 text-accent1 font-bold">
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/location"}>Location</Link>
              </li>
              <li>
                <Link to={"/careers"}>Careers</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center gap-5">
            <i className="fa-brands fa-square-facebook text-2xl text-accent3 hover:text-white cursor-pointer duration-200"></i>
            <i className="fa-brands fa-twitter text-2xl text-accent3 hover:text-white cursor-pointer duration-200"></i>
            <i className="fa-brands fa-instagram text-2xl text-accent3 hover:text-white cursor-pointer duration-200"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
