import React from "react";
import profilePic from "../assets/Pic.jpg";

function Content() {
  return (
    <>
      <div className="box flex justify-center items-center min-h-screen bg-slate-900 text-white">
        <div className="introduction w-full max-w-5xl p-10 rounded-md flex justify-between bg-slate-800 text-white">

          <div className="info flex flex-col justify-center">

            {/* name */}
            <div className="name font-bold">
              <h1 className="text-5xl bg-gradient-to-r from-purple-500 via-green-500 to-indigo-500 inline-block text-transparent bg-clip-text pb-3">Pushkar Banjare</h1>
            </div>

            {/* aboutme */}
            <div className="aboutme pt-5 pl-1 max-w-2xl text-slate-300">
              I’m pursuing a B.Tech in Computer Science Engineering with a
              strong foundation in algorithm design in Java and software
              development using JavaScript frameworks. Interested in
              under-standing the working of financial markets and aim to leverage
              technology to develop data-driven solutions to optimize financial
              processes.
            </div>

          </div>

            {/* profile */}
            <div className="profile flex-shrink-0 p-5 ">
              <img
                src={profilePic}
                alt="Profile Picture"
                className="w-40 h-40 rounded-full overflow-hidden"
              />
            </div>
        </div>
      </div>
    </>
  );
}

export default Content;
