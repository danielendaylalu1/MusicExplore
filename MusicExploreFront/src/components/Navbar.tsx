// import React from "react";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";

const Navbar = () => {
  const navLinks = ["Albums", "Artists", "Genres"];
  return (
    <div className="navbar p-3 bg-white">
      <Link className="navbar-header" to="/">
        Music_Explore
      </Link>
      <ul className="nav-items">
        {navLinks.map((link) => (
          <Link to={link.toLowerCase()} className="nav-link">
            {link}
          </Link>
        ))}
      </ul>
      <IoAddOutline className="navbar-add-icon pointer" />
    </div>
  );
};

export default Navbar;
