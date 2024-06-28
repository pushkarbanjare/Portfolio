import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";

const Icons = () => {
  return (
    <>
      <div className="flex justify-center  bg-slate-900 text-white">
        <div className="flex space-x-4 p-1">
          {/* linkedin */}
          <div className="linkedin pr-3">
            <Link
              to="https://www.linkedin.com/in/pushkarbanjare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" className="w-5 h-5" />
            </Link>
          </div>

          {/* github */}
          <div className="github invert pr-3">
            <Link
              to="https://github.com/pushkarbanjare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" className="w-5 h-5" />
            </Link>
          </div>

          {/* instagram */}
          <div className="instagram pr-3">
            <Link
              to="https://www.instagram.com/pushkar.banjare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </Link>
          </div>

          {/* twitter */}
          <div className="twitter pr-3">
            <Link
              to="https://x.com/pushkarbanjare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="w-5 h-5" />
            </Link>
          </div>

          {/* youtube */}
          <div className="youtube pr-3">
            <Link
              to="https://www.youtube.com/@pushkarbanjare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="Youtube" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
