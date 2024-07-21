import React from "react";
import profile from "../assets/ProfilePic.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row text-white sm:space-x-20">
        <div className="flex flex-col justify-center h-full sm:py-96">
          <h2 class="text-5xl py-4 font-bold bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-20% to-pink-500 to-30% bg-clip-text text-transparent">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-300 max-w-4xl">
            Im pursuing B. Tech Computer Science Engineering student with a
            strong foundation in algorithm design in Java and software
            development using JavaScript frameworks.Interested in understanding
            the working of financial markets and aim to leverage technology to
            develop data-driven solutions to optimize the financial processes.
          </p>
        </div>
        <div>
          <img src={profile} alt="Owner" className="h-auto w-52 sm:w-80 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
