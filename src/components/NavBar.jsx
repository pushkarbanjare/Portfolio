import React, {useState} from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
{/* <FaTimes /> */}

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white bg-black fixed">
      <div>
        <h1 className="font-bold text-4xl ml-4 font-signature">Pushkar</h1>
      </div>
      <ul className="hidden md:flex mr-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-3 mp text-lg cursor-pointer capitalize font-medium text-gray-400 hover:text-white via-purple-500 to-pink-500 duration-100"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div 
      onClick={() => setNav(!nav)}
      className="cursor-pointer text-gray-400 z-10 hover:text-white duration-200 md:hidden ">
        {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
      </div>

      {nav && (

      <ul className="flex flex-col justify-center items-center absolute top-20 right-0 bg-gray-800 p-5 rounded-xl">
      {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-xl cursor-pointer py-1 px-3 capitalize font-medium text-gray-400 hover:text-white via-purple-500 to-pink-500 duration-100"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      )}

    </div>
  );
};

export default NavBar;
