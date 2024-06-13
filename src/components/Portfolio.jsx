import React from "react";
import navbar from "../assets/portfolio/navbar.jpg";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import nike_shoe from "../assets/portfolio/nike_shoe.png";

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nike_shoe,
      demoLink: "https://nike-shoe-project2.netlify.app/",
      codeLink: "https://github.com/Siraddeen/nike_project",
    },
    {
      id: 2,
      src: navbar,
    },
    {
      id: 3,
      src: installNode,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  const handleButtonClick = (url) => {
    if (typeof window !== "undefined") {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800
     w-full text-white md:h-screen"
    >
      <div
        className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center
       w-full h-full"
      >
        <div className="pb-8">
          <p
            className="font-bold text-4xl inline border-b-4
           border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check my work here </p>
          <div
            className="g grid sm:grid-cols-2 md:grid-cols-3 gap-8 
          px-12 sm:px-0"
          >
            {portfolios.map(({ id, src, codeLink, demoLink }) => (
              <div key={id} className="a shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="dasas"
                  className="s rounded-md duration-200
                 hover:scale-105"
                />

                <div className="flex items-center justify-center ">
                  <button
                    onClick={() => handleButtonClick(demoLink)}
                    className="s w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 duration-200 bg-cyan-600 rounded-lg text-orange-300"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => handleButtonClick(codeLink)}
                    className="s w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 duration-200 bg-gray-600 rounded-lg text-orange-300"
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
