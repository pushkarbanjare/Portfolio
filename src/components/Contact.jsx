import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-950 text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          {/* title */}
          <h3 className="text-3xl font-bold border-b-2 inline">Contact</h3>
        </div>
        <div className="flex pt-10">
          <div className="w-2/5 flex justify-center items-center">
            <div>
              {/* icons */}
              <div className=" flex justify-center items-center space-x-7">
                <a href="https://www.instagram.com/pushkar.banjare/" target="_blank">
                  <FiInstagram className="text-2xl text-pink-400 duration-300 hover:text-3xl" />
                </a>
                <a href="https://github.com/pushkarbanjare" target="_blank">
                  <FaGithub className="text-2xl text-slate-100 duration-300 hover:text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/pushkarbanjare/" target="_blank">
                  <FaLinkedinIn className="text-2xl text-blue-400 duration-300 hover:text-3xl" />
                </a>
                <a href="https://x.com/pushkarbanjare" target="_blank">
                  <RiTwitterXFill className="text-2xl text-white duration-300 hover:text-3xl" />
                </a>
                <a href="https://www.youtube.com/@pushkarbanjare" target="_blank">
                  <FaYoutube className="text-2xl text-red-400 duration-300 hover:text-3xl" />
                </a>
              </div>

              <div className="my-3 flex justify-center items-center">
                {/* email */}
                <h5 className="text-slate-300 hover:text-white hover:underline duration-200 text-lg py-3 font-medium">banjarepushkar.2k3@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex pt-10 justify-center items-center">
            {/* form */}
            <form action="#" className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-slate-600 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 my-4 bg-transparent border-2 border-slate-600 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                rows="5"
                className="p-2 bg-transparent border-2 border-slate-600 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 my-5 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
