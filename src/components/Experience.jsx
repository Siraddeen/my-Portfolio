import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import hono from "../assets/hono.png";
import prisma from "../assets/prisma.png";
import express from "../assets/express.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import TechStack from "./Teckstack";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: " shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: " shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: " shadow-yellow-500",
    },
    {
      id: 4,
      src: express,
      title: "Express Js",
      style: " shadow-pink-400",
    },
    {
      id: 5,
      src: mongodb,
      title: "MongoDB",
      style: " shadow-green-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node Js",
      style: " shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: " shadow-sky-400",
    },
    {
      id: 8,
      src: react,
      title: "React",
      style: " shadow-blue-600",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next Js",
      style: " shadow-white",
    },
    {
      id: 10,
      src: github,
      title: "Github",
      style: " shadow-gray-400",
    },
    {
      id: 11,
      src: prisma,
      title: "Prisma",
      style: " shadow-blue-400",
    },
    {
      id: 12,
      src: hono,
      title: "Hono",
      style: " shadow-orange-400",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black
     w-full h-screen "
    >
      <div className=" flex gap-4 items-center">
        <div
          className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center
       w-full h-full text-white "
        >
          <div className="mt-52">
            <p
              className=" text-4xl  text-emerald-400 font-bold border-b-4 border-gray-500 
          p-2 inline"
            >
              Experience
            </p>
            <h2 className=" mt-5 font-semibold">
              Tech stack used :{" "}
              <span className="text-red-500 italic pl-3 pr-1"> MERN</span> stack
              mostly
            </h2>

            <p className="py-6 font">I work with these Technologies</p>
          </div>

          <div
            className=" w-full grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8
         text-center py-8 px-12 sm:px-0"
          >
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={
                  " shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                  " " +
                  style
                }
              >
                <img src={src} alt="" className=" w-20 mx-auto" />
                <p className="mt-4 "> {title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-64 pr-10">
          <TechStack />
        </div>
      </div>
    </div>
  );
};
