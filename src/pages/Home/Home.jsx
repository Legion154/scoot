import React from "react";
import bg from "../../assets/homeBg.png";
import eclipse from "../../assets/eclipses.png";
import phone from "../../assets/phone.png";
import scooter from "../../assets/scooter.png";
import scooter2 from "../../assets/scooter2.png";
import telemetry from "../../assets/telemetryHome.png";
import city from "../../assets/cityHome.png";
import payment from "../../assets/paymentHome.png";
import rightArrow from "../../assets/rightArrow.svg";
import leftHome from "../../assets/leftArrow.svg";
import { Button } from "../../components/Button";

const Home = () => {
  return (
    <main className="">
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className=" py-4 px-3 sm:px-5 2xl:px-40 flex gap-[40px] items-center justify-center md:justify-normal relative bg-center bg-cover bg-no-repeat  container w-[100vw] bg-[url('{bg}')] h-[700px]"
      >
        <div className="flex flex-col gap-7 items-start">
          <h1 className="w-[300px] md:w-[600px] text-white text-[30px] md:text-[55px] font-bold leading-[60px]">
            Scooter sharing  made simple
          </h1>
          <p className=" xl:ml-[70px] w-[300px] sm:w-[460px] text-white text-[17px] font-medium">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <div className=" xl:ml-[70px]">

          <Button name=" Get Scootig"/>
          </div>
          <div className="hidden md:flex absolute bottom-[300px] left-0 w-[200px] h-[15px] bg-[#FCB72B]"></div>
          <div className="hidden md:flex absolute bottom-[165px] left-[720px]">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
