import React from "react";
import project1 from "../assets/SpendWisely.png";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-950 text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          {/* title */}
          <h3 class="text-3xl font-bold inline relative">
            Projects
            <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
          </h3>
        </div>

        <div className="max-w-screen-lg py-20 mx-auto flex flex-col w-full">
          <div className="sm:flex">
            <div className="flex items-center justify-center">
              <img
                src={project1}
                alt="spendwisely"
                className="h-auto sm:w-96 w-72 rounded-xl border"
              />
            </div>
            <div className="px-5 py-10 sm:px-20 sm:py-4">
              <a
                href="https://spendwiselyy.netlify.app/"
                className=" flex text-xl font-semibold underline"
                target="_blank"
              >
                <>
                  SpendWisely
                  <HiExternalLink className="text-xl" />
                </>
              </a>
              <p className="py-3">
                An expense tracking website to facilitate financial transaction
                tracking
              </p>
              <p>HTML, CSS, Javascript, Nodejs, Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
