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
    <main className="sticky top-0 z-30 py-4 px-3 sm:px-5 2xl:px-40 bg-primary border-b-2 border-b-accent1">
      <div className="flex flex-row items-center justify-between ">
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
          <Button name={"Get scootin"} />
        </div>
        <i
          onClick={sidebar}
          className={`${
            open ? "fa-xmark pr-[5px]" : "fa-bars pr-0"
          } fa-solid fa-bars text-2xl cursor-pointer text-secondary block md:hidden`}
        ></i>
      </div>

      {/* SIDEBAR */}

      <div
        className={`${
          open ? "h-56 px-3 py-5" : "h-0 px-0 py-0"
        } fixed z-30 top-16 left-0 w-full bg-primary flex-col select-none md:hidden overflow-hidden duration-300`}
      >
        <ul className="flex flex-col items-center gap-5 sm:text-lg text-accent1 font-bold">
          <li>
            <Link onClick={closeSidebar} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} to={"/location"}>
              Location
            </Link>
          </li>
          <li>
            <Link onClick={closeSidebar} to={"/careers"}>
              Careers
            </Link>
          </li>
        </ul>
        <div className="mt-7 flex items-center justify-center">
          <Button name={"Get scootin"} wfull={true} />
        </div>
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
