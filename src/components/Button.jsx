import React from "react";

export const Button = ({ name, wfull }) => {
  return (
    <button className={`${wfull ? "w-full" : "w-auto"} py-3 px-5 focus:outline-none bg-accent3 text-white border-2 border-accent3 hover:bg-white hover:text-accent3 duration-300`}>
      {name}
    </button>
  );
};
