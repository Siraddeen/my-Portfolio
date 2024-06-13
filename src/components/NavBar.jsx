import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center px-4 w-full h-20 px-4 bg-black text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Siraddeen</h1>
      </div>

      <ul className="hidden md:flex">
        {" "}
        {/* for showing horizontal items   home ,about */}
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className=" px-4 cursor-pointer capitalize font-medium
               text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {/*for showing bars &  X   and also hide them on big screen */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className=" flex flex-col justify-center items-center absolute top-0
       left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
        text-gray-500"
        >
          {/*for showing items vertically  */}
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className=" px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {/*for showing items only when bar clicked */}
    </div>
  );
};
