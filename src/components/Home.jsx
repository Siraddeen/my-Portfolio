import React from "react";
import Iam from "../assets/m2.jpg";
import { FaArrowRight } from "react-icons/fa6";

import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {" "}
            do more communication than you do b never distract from your
            acheivable goal, that easily c always avoid toxic people d try to
            reprogramm your ideology of your thought process regularly
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              className=" group text-white w-fit px-6 py-3 my-2 flex
             items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
              cursor-pointer"
            >
              Portfolio
              <span className=" px-3 group-hover:rotate-90 duration-300">
                <FaArrowRight size={21} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Iam}
            alt="alter ego"
            className="rounded-2xl py-2 w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};