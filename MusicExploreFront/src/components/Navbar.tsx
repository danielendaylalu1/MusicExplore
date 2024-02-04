// import React from "react";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { PiWaveform } from "react-icons/pi";
import { FC } from "react";

interface NavbarProps {
  showForm: boolean;
  setShowForm: (value: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ showForm, setShowForm }) => {
  const navLinks = ["Albums", "Artists", "Genres"];
  return (
    <div className="navbar p-3 bg-white">
      <Link className="navbar-header" to="/">
        Music_Explore
      </Link>
      <ul className="nav-items">
        {navLinks.map((link) => (
          <Link to={link.toLowerCase()} className="nav-link" key={link}>
            {link}
          </Link>
        ))}
      </ul>

      <IoAddOutline
        className="navbar-add-icon pointer"
        onClick={() => {
          setShowForm(!showForm);
        }}
      />

      <PiWaveform className="display-top-icon" />
    </div>
  );
};

export default Navbar;
