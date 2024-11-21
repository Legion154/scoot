import React from "react";
import bg from "../../assets/aboutBg.png";
import mobility from "../../assets/mobilityAbout.png";
import urban from "../../assets/aboutBg.png";
import tech from "../../assets/aboutBg.png";
import integrity from "../../assets/aboutBg.png";
import commmunity from "../../assets/aboutBg.png";
import rightArrow from "../../assets/rightArrow.svg";
import leftHome from "../../assets/leftArrow.svg";

const About = () => {
  return (
    <main className="">
      <div className="">
        {/* PART 1 */}

          <div className="h-40 mt-6 flex items-center">
            <h1 className="text-white font-bold text-5xl absolute z-10 px-3 sm:px-5 2xl:px-40">
              About
            </h1>
            <img src={bg} className="w-screen" alt="about" />
          </div>

        {/* PART 2 */}

        <div className="px-3 sm:px-5 2xl:px-40 mt-10">
          
        </div>

        {/* PART 3 */}

        <div className=""></div>

        {/* PART 4 */}

        <div className=""></div>
      </div>
    </main>
  );
};

export default About;
