import React from "react";

export const Value = ({ img, alt, num, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex flex-col items-center relative">
        <img src={img} alt={alt} width={200} />
        <span className="absolute -bottom-7 size-16 flex justify-center items-center bg-accent3 text-white rounded-full text-lg">
          {num}
        </span>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-2xl font-bold text-secondary">{title}</h1>
        <p className="text-accent1 font-medium w-auto md:w-1/2 lg:w-80 2xl:w-96 text-sm">
        {description}
        </p>
      </div>
    </div>
  );
};
