import React from "react";
import navbar from "../assets/portfolio/navbar.jpg";
import drag_KanbanBoard from "../assets/portfolio/drag_KanbanBoard.png";
import stopwatch from "../assets/portfolio/stopwatch.png";
import blog_app from "../assets/portfolio/blog_app.png";
import nike_shoe from "../assets/portfolio/nike_shoe.png";
import social_media from "../assets/portfolio/social-media.png";
import chat_app from "../assets/portfolio/chat_application.png";
import ai_bot from "../assets/portfolio/AI-chatbot.png";
import resume_analyser from "../assets/portfolio/Resume-Analyzer.png";

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Resume Analyzer",
      src: resume_analyser,
      demoLink: "https://siraddeen-resume-analyzer.netlify.app/",
      codeLink: "https://github.com/Siraddeen/Resume-Analyzer",
      details:
        "This is AI Resume Analyzer which is built using React, tailwind.css & Gemini gen AI. It allows users to upload their resume & can get live result from AI to how to improve their resume.",
      detailColor: "text-orange-300",
    },
    {
      id: 2,
      name: "AI chatbot",
      src: ai_bot,
      demoLink: "https://siraj-chat-bot.netlify.app/",
      codeLink: "https://github.com/Siraddeen/AI-chatBot",
      details:
        "This AI chatbot is built using React, tailwind.css and OpenAI's GPT-4.o mini model & gemini. It allows users to interact with the AI in a chat-like interface, providing responses based on user input.",
      detailColor: "text-rose-300",
    },
    {
      id: 3,
      name: "mini-social_media",
      src: social_media,
      demoLink: "https://siraddeen-mini-media.onrender.com/",
      codeLink: "https://github.com/Siraddeen/Siraddeen-mini-Media",
      details:
        "This mini-social media app let you chat in private  & post your images which can be liked & commented by your friends. UI of this applications is inspired from instagram  ",
      detailColor: "text-red-100",
    },
    {
      id: 4,
      name: "mini Medium, blog website",
      src: blog_app,
      demoLink: "https://blog-project-ten-hazel.vercel.app/signup",
      codeLink: "https://github.com/Siraddeen/Blog-Project",
      details:
        "This blog website is created to gain knowledge in serverless deployment. The project utilizes the following technologies: Hono, Prisma ORM, PostgreSQL, TypeScript, React, and Tailwind CSS.",
      detailColor: "text-green-100",
    },
    {
      id: 5,
      name: "real time chat application",
      src: chat_app,
      demoLink: "https://sir-chatx.onrender.com/",
      codeLink: "https://github.com/Siraddeen/Sir_ChatX",
      details:
        "From this project, learnt how to use the socket.io for the real time communications accros the different plateforms.",
      detailColor: "text-orange-200",
    },
    {
      id: 6,
      name: "Nike shoe show case page",
      src: nike_shoe,
      demoLink: "https://nike-shoe-project2.netlify.app/",
      codeLink: "https://github.com/Siraddeen/nike_project",
      details:
        "This Nike shoe webpage is built to gain more knowledge and experience with Tailwind CSS.",
      detailColor: "text-blue-200",
    },
    {
      id: 7,
      name: "A stopWatch",
      src: stopwatch,
      demoLink: "https://stop-watch-project1.netlify.app/",
      codeLink: "https://github.com/Siraddeen/my-Project/tree/main/StopWatch",
      details: `A simple stop-watch app, created as side project.`,
      detailColor: "text-yellow-100",
    },
    {
      id: 8,
      name: " A KanbanBoard to drag & drop",
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
          <div className="g grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-2">
            {portfolios.map(
              ({ id, name, src, codeLink, demoLink, details, detailColor }) => (
                <div
                  key={id}
                  className="a shadow-md shadow-gray-600 rounded-lg"
                >
                  <p
                    className="italic font-semibold text-fuchsia-400"
                    src={name}
                  >
                    {name}
                  </p>
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
