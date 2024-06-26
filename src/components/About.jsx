import React from "react";
const hello = "okada";
export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
       from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello everyone, I am a self-taught learner with a background in the
          mechanical department. I decided to switch my career from a non-IT
          sector to the IT sector to fulfill my dreams.
        </p>
        <br />
        <p className="text-xl ">
          {`I have hands-on experience with real-time projects, which include `}
          <span className=" text-red-300 font-bold">{`CI/CD (Continuous Integration and Continuous Delivery), Dockerizing
          projects, using Prisma ORMs , using React with TypeScript along with
          Tailwind, and learning new technologies like Next.js and Kubernetes & also learning serverless deployment
          via using Hono with CloudFlare workers `}</span>
          {`and other technologies.`}
        </p>
        <p className="text-xl mt-10">
          I am working on these projects in my spare time and look forward to
          connecting with you all.{" "}
        </p>
      </div>
    </div>
  );
};
<span style={{ color: "red", fontWeight: "bold" }}>{hello}</span>;
