import React from "react";
import "../stylesheets/Navbar.css";
import { FaHome } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";

function Nav() {
  return (
    <nav>
      <a href="#home">
        <FaHome />
      </a>
      <a href="#about">
        <BiUser />
      </a>
      <a href="#experience">
        <BsFillJournalBookmarkFill />
      </a>
      <a href="#projects">
        <GrWorkshop />
      </a>
    </nav>
  );
}

export default Nav;
