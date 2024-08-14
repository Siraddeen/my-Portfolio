import React from "react";
import navbar from "../assets/portfolio/navbar.jpg";
import drag_KanbanBoard from "../assets/portfolio/drag_KanbanBoard.png";
import stopwatch from "../assets/portfolio/stopwatch.png";
import blog_app from "../assets/portfolio/blog_app.png";
import nike_shoe from "../assets/portfolio/nike_shoe.png";
import social_media from "../assets/portfolio/social-media.png";

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: social_media,
      demoLink: "https://siraddeen-mini-media.onrender.com/",
      codeLink: "https://github.com/Siraddeen/Siraddeen-mini-Media",
      details:
        "This mini-social media app let you chat in private  & post your images which can be liked & commented by your friends. UI of this applications is inspired from instagram  ",
      detailColor: "text-red-100",
    },
    {
      id: 2,
      src: blog_app,
      demoLink: "https://blog-project-ten-hazel.vercel.app/signup",
      codeLink: "https://github.com/Siraddeen/Blog-Project",
      details:
        "This blog website is created to gain knowledge in serverless deployment. The project utilizes the following technologies: Hono, Prisma ORM, PostgreSQL, TypeScript, React, and Tailwind CSS.",
      detailColor: "text-green-100",
    },
    {
      id: 3,
      src: nike_shoe,
      demoLink: "https://nike-shoe-project2.netlify.app/",
      codeLink: "https://github.com/Siraddeen/nike_project",
      details:
        "This Nike shoe webpage is built to gain more knowledge and experience with Tailwind CSS.",
      detailColor: "text-blue-200",
    },
    {
      id: 4,
      src: stopwatch,
      demoLink: "https://stop-watch-project1.netlify.app/",
      codeLink: "https://github.com/Siraddeen/my-Project/tree/main/StopWatch",
      details: `A simple stop-watch app, created as side project.`,
      detailColor: "text-yellow-100",
    },
    {
      id: 5,
      src: drag_KanbanBoard,
      demoLink: "https://kanbanboard-drag.netlify.app/",
      codeLink: "https://github.com/Siraddeen/my-Project/tree/main/drag_drop_k",
      details: `A simple drag & drop box created via react+typescript+tailwind.`,
      detailColor: "text-rose-100",
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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="font-bold text-4xl inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check my work here </p>
          <div className="g grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(
              ({ id, src, codeLink, demoLink, details, detailColor }) => (
                <div
                  key={id}
                  className="a shadow-md shadow-gray-600 rounded-lg"
                >
                  <img
                    src={src}
                    alt="portfolio-item"
                    className="s rounded-md duration-200 hover:scale-105"
                  />

                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => handleButtonClick(demoLink)}
                      className="s w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 bg-cyan-600 rounded-lg text-orange-300"
                    >
                      Demo
                    </button>
                    <button
                      onClick={() => handleButtonClick(codeLink)}
                      className="s w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 bg-gray-600 rounded-lg text-orange-300"
                    >
                      Code
                    </button>
                  </div>
                  <div
                    className={`flex flex-col justify-center ${detailColor}`}
                  >
                    {details}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
