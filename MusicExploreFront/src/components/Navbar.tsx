// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = ["Albums", "Artists", "Genres", "AddSong"];
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
    </div>
  );
};

export default Navbar;
