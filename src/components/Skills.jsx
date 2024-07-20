import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-950 text-white"
    >
      <div className="max-w-screen-xl pl-5 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <h3 className="text-3xl font-bold border-b-2 inline">Skills</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 my-32">
          {/* react */}
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <FaReact className="text-4xl text-cyan-500" />
          </div>
          {/* mongodb */}
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <SiMongodb className="text-4xl text-green-500" />
          </div>
          {/* express */}
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <div />
            <SiExpress className="text-4xl text-red-500" />
          </div>
          {/* nodejs */}
          <div className="rounded-2xl border-4 border-neutral-800 p-2">
            <FaNodeJs className="text-4xl text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
