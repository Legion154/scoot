import React, { useState } from "react";

export const Summary = ({ title, describtion }) => {
  const [active, setActive] = useState(false);

  const deatails = () => {
    setActive((prevstate) => !prevstate);
  };

  return (
    <div className="bg-accent4 px-8 py-5 w-full flex flex-col rounded-sm duration-300">
      <div
        onClick={deatails}
        className="flex flex-row items-start justify-between select-none cursor-pointer duration-300"
      >
        <h1 className="text-lg font-bold text-[#495567]">{title}</h1>
        <i
          className={`${
            active ? "rotate-180" : "rotate-0"
          } fa-solid fa-angle-down text-2xl text-accent3 duration-300`}
        ></i>
      </div>
      <p
        className={`${
          active ? "h-48 sm:h-28 2xl:h-24 pt-6" : "h-0 pt-0"
        } text-[#495567] text-sm font-medium overflow-hidden duration-300`}
      >
        {describtion
          ? "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
          : "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."}
      </p>
    </div>
  );
};
