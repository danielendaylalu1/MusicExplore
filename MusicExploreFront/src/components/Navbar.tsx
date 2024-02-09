// import React from "react";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { PiWaveform } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setFormShow, setStatus } from "../store/uiSlice";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const navLinks = ["Albums", "Artists", "Genres"];
  const showForm = useSelector((state: RootState) => state.ui.showForm);
  const dispacth = useDispatch();
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div className="navbar p-3 bg-white">
      <Link
        className="navbar-header"
        to="/"
        onClick={() => {
          setShowMobileNav(false);
        }}
      >
        Music_Explore
      </Link>
      <div className={`nav-other ${showMobileNav && "show-nav-other"}`}>
        <ul className="nav-items">
          {navLinks.map((link) => (
            <Link
              to={link.toLowerCase()}
              className="nav-link"
              key={link}
              onClick={() => {
                setShowMobileNav(false);
              }}
            >
              {link}
            </Link>
          ))}
        </ul>

        <IoAddOutline
          className="navbar-add-icon pointer"
          onClick={() => {
            setShowMobileNav(false);

            dispacth(setFormShow(!showForm));
            dispacth(
              setStatus({
                error: false,
                message: "",
              })
            );
          }}
        />

        <PiWaveform
          className="display-top-icon"
          onClick={() => {
            setShowMobileNav(false);
          }}
        />
      </div>
      <CiMenuFries
        className="navbar-menu-icon pointer"
        onClick={() => {
          setShowMobileNav(!showMobileNav);
        }}
      />
    </div>
  );
};

export default Navbar;
