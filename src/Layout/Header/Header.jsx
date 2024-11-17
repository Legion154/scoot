import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const sidebar = () => {
    setOpen((prevstate) => {
      const newState = !prevstate;
      if (newState) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return newState;
    });
  };

  const closeSidebar = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="py-4 px-3 sm:px-5 2xl:px-40">
      <div className="sticky top-0 z-30 flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center md:gap-10 lg:gap-20">
          <h1 className="text-4xl font-bold text-secondary select-none">
            <Link onClick={closeSidebar} to={"/"}>
              scoot
            </Link>
          </h1>
          <ul className="hidden md:flex flex-row items-center gap-10 text-accent1 font-bold">
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/location"}>Location</NavLink>
            </li>
            <li>
              <NavLink to={"/careers"}>Careers</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Button />
        </div>
        <i
          onClick={sidebar}
          className={`fa-solid fa-bars ${
            open ? "fa-xmark" : "fa-bars"
          } text-2xl cursor-pointer text-secondary block md:hidden`}
        ></i>
      </div>

      {/* SIDEBAR */}

      <div
        className={`${
          open ? "flex" : "hidden"
        } fixed z-30 top-16 px-3 py-5 left-0 w-full bg-primary flex-col gap-10 select-none md:hidden`}
      >
        <ul className="flex flex-col items-center gap-5 sm:text-lg text-accent1 font-bold">
          <li>
            <NavLink onClick={closeSidebar} to={"/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeSidebar} to={"/location"}>
              Location
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeSidebar} to={"/careers"}>
              Careers
            </NavLink>
          </li>
        </ul>
        <Button />
      </div>

      {/* OVERLAY */}

      <div
        onClick={closeSidebar}
        className={`${
          open ? "block" : "hidden"
        } inset-0 fixed top-16 z-10 bg-black backdrop-blur-xl opacity-80 md:hidden`}
      ></div>
    </main>
  );
};

export default Header;
