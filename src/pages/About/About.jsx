import React from "react";
import bg from "../../assets/aboutBg.png";
import mobility from "../../assets/mobilityAbout.png";
import urban from "../../assets/urban.png"
import tech from "../../assets/tech.png";
import integrity from "../../assets/integrity.png";
import commmunity from "../../assets/community.png";
import leftArrow from "../../assets/leftarrowAbout.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { Value } from "../../components/Value";
import { Summary } from "../../components/Summary";

const About = () => {
  return (
    <main className="relative overflow-hidden">
      {/* PART 1 */}

      <section className="flex items-center">
        <h1 className="text-white font-bold text-4xl md:text-5xl absolute z-10 px-3 sm:px-5 2xl:px-40">
          About
        </h1>
        <img
          src={bg}
          className="w-screen h-20 sm:h-24 md:h-28 lg:h-32"
          alt="about"
        />
      </section>

      {/* PART 2 */}

      <section className="flex flex-col">
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-14 2xl:gap-0 px-3 sm:px-5 2xl:px-40 my-10">
          <div className="flex flex-col items-center 2xl:items-start text-center 2xl:text-start gap-7">
            <h1 className="text-5xl font-bold text-secondary w-auto lg:w-1/2 2xl:w-4/5">
              Mobility for the digital era
            </h1>
            <p className="text-accent1 w-full sm:w-2/3 font-medium">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
          <span className="flex flex-row items-center">
            <img
              src={mobility}
              alt="example picture"
              className="rounded-full relative w-60 2xl:w-[700px]"
            />
            <span className="hidden 2xl:block bg-accent2 size-80 rounded-full absolute -right-56"></span>
            <img
              src={leftArrow}
              className="absolute top-96 right-10 w-80 hidden 2xl:block 2xl:w-[600px]"
            />
          </span>
        </div>
        {/* CARD 2 */}
        <div className="flex flex-col 2xl:flex-row-reverse items-center justify-between gap-14 2xl:gap-60 px-3 sm:px-5 2xl:px-40 my-10">
          <div className="flex flex-col items-center 2xl:items-start text-center 2xl:text-start gap-7">
            <h1 className="text-5xl font-bold text-secondary w-auto lg:w-1/2 2xl:w-4/5">
              Better urban living
            </h1>
            <p className="text-accent1 w-full sm:w-2/3 2xl:w-full font-medium">
              We're helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
          <span className="flex flex-row items-center relative">
            <img
              src={urban}
              alt="example picture"
              className="rounded-full relative w-60 2xl:w-[700px]"
            />
            <span className="hidden 2xl:block bg-accent2 size-80 rounded-full absolute -left-96"></span>
            <img
              src={rightArrow}
              className="absolute bottom-40 -left-40 w-80 hidden 2xl:block 2xl:w-[350px]"
            />
          </span>
        </div>
      </section>

      {/* PART 3 */}

      <section className="px-3 sm:px-5 2xl:px-40 my-20 flex flex-col items-center gap-20">
        <h1 className="text-secondary font-bold text-5xl">Our values</h1>
        <div className="flex flex-row items-start gap-20 flex-wrap lg:flex-nowrap">
          <Value
            img={tech}
            alt={"Our tech"}
            num={"01"}
            title={"Our tech"}
            description={
              "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
            }
          />
          <Value
            img={integrity}
            alt={"Our integrity"}
            num={"02"}
            title={"Our integrity"}
            description={
              "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
            }
          />
          <Value
            img={commmunity}
            alt={"Our community"}
            num={"03"}
            title={"Our community"}
            description={
              "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
            }
          />
        </div>
      </section>

      {/* PART 4 */}

      <section className="px-3 sm:px-5 2xl:px-40 flex flex-col mt-40 my-20 gap-20">
        <h1 className="text-secondary font-bold text-5xl text-center">FAQs</h1>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
            <h1 className="text-secondary font-bold text-4xl w-1/2 text-center lg:text-start">
              How it works
            </h1>
            <div className="flex flex-col gap-5 w-full">
              <Summary
                title={"How do I download the app?"}
                describtion={true}
              />
              <Summary
                title={"Can I find a nearby Scoots?"}
                describtion={true}
              />
              <Summary
                title={"Do I need a license to ride?"}
                describtion={true}
              />
            </div>
          </div>
          {/* SECOND PART */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
            <h1 className="text-secondary font-bold text-4xl w-1/2 text-center lg:text-start">
              Safe driving
            </h1>
            <div className="flex flex-col gap-5 w-full">
              <Summary title={"Should I wear a helmet?"} describtion={false} />
              <Summary
                title={"How about the rules & regulations?"}
                describtion={false}
              />
              <Summary
                title={"What if I damage my Scoot?"}
                describtion={false}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
