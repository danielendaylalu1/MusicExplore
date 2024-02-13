// import React from "react";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { PiWaveform } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setFormShow, setStatus } from "../store/uiSlice";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import {
  bgWhite,
  navBarAddIcon,
  navBarHeaderStyle,
  navBarMenuIcon,
  navBarMobile,
  navBarStyle,
  navItems,
  navLink,
  p3,
  pointer,
  showNavBarMobile,
  textGreen,
} from "../style/style";

// import { bgWhite, navBarStyle } from "../style/style";

const Navbar = () => {
  const navLinks = ["Albums", "Artists", "Genres"];
  const showForm = useSelector((state: RootState) => state.ui.showForm);
  const dispacth = useDispatch();
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div css={[navBarStyle, p3, bgWhite]}>
      <Link
        css={[navBarHeaderStyle, textGreen]}
        to="/"
        onClick={() => {
          setShowMobileNav(false);
        }}
      >
        Music_Explore
      </Link>
      <div css={[navBarMobile, showMobileNav && showNavBarMobile]}>
        <ul css={[navItems]}>
          {navLinks.map((link) => (
            <Link
              to={link.toLowerCase()}
              css={navLink}
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
          css={navBarAddIcon}
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
        css={[navBarMenuIcon, pointer]}
        onClick={() => {
          setShowMobileNav(!showMobileNav);
        }}
      />
    </div>
  );
};

export default Navbar;
