import React from "react";

function NavBar() {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 bg-red-400 sticky top-0">
        <div className="logo flex-shrink-0">
          <h1 className="text-2xl font-bold">Pb</h1>
        </div>
        <div className="menu flex space-x-5">
          <div className="menu-one">Projects</div>
          <div className="menu-two">Connect</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
