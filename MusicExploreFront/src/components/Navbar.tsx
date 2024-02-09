// import React from "react";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { PiWaveform } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setFormShow, setStatus } from "../store/uiSlice";

const Navbar = () => {
  const navLinks = ["Albums", "Artists", "Genres"];
  const showForm = useSelector((state: RootState) => state.ui.showForm);
  const dispacth = useDispatch();
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
          dispacth(setFormShow(!showForm));
          dispacth(
            setStatus({
              error: false,
              message: "",
            })
          );
        }}
      />

      <PiWaveform className="display-top-icon" />
    </div>
  );
};

export default Navbar;
