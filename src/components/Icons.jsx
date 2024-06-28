import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.png";
// import instagramm from "../assets/instagramm.png";
import twitter from "../assets/twitter.png";
// import twitterr from "../assets/twitterr.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";

const Icons = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex space-x-4 p-5">
          {/* instagram */}
          <div className="instagram">
            <Link
              to="https://www.instagram.com/pushkar.banjare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="w-7 h-7" />
              {/* <img src={instagramm} alt="Instagram" className="w-7 h-7" /> */}
            </Link>
          </div>

          {/* twitter */}
          <div className="twitter">
            <Link
              to="https://x.com/pushkarbanjare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="w-7 h-7" />
              {/* <img src={twitterr} alt="Twitter" className="w-12 h-12" /> */}
            </Link>
          </div>

          {/* linkedin */}
          <div className="linkedin">
            <Link
              to="https://www.linkedin.com/in/pushkarbanjare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" className="w-7 h-7" />
            </Link>
          </div>

          {/* youtube */}
          <div className="youtube">
            <Link to="https://www.youtube.com/@pushkarbanjare">
              <img src={youtube} alt="Youtube" className="w-7 h-7" />
            </Link>
          </div>

          {/* github */}
          <div className="github">
            <Link to="https://github.com/pushkarbanjare/">
              <img src={github} alt="Github" className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
