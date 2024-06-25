import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Icons() {
  const socialLinks = [
    { icon: <FaTwitter/>,   url: "https://twitter.com/pushkarbanjare" },
    { icon: <FaLinkedin/>,  url: "https://www.linkedin.com/in/pushkarbanjare/" },
    { icon: <FaGithub/>,    url: "https://github.com/pushkarbanjare" },
    { icon: <FaInstagram/>, url: "https://www.instagram.com/pushkar.banjare/" },
    { icon: <FaYoutube/>,   url: "https://www.youtube.com/channel/pushkarbanjare" }
  ];

  return (
    <>
      <div className="icons flex justify-center items-center space-x-4 bg-green-400">
        {socialLinks.map((link) => (
          <Link
            key={link.url}
            to={link.url}
            className="hover:text-red-500 transition duration-200 text-2xl"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Icons;
