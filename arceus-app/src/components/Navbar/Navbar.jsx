import "./Navbar.css";
import { useRef, useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../../store/auth-context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const ctx = useContext(AuthContext);
  const [navIsClicked, setNavIsClicked] = useState(false);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavIsClicked((pre) => !pre);
  };
  // console.log(ctx.currentUser);

  return (
    <div className="nav-container">
      <header className="nav-header">
        <h3
          onClick={() => {
            console.log(ctx.currentUser.uid);
          }}
        >
          Arceus
        </h3>
        <nav ref={navRef} className="responsive_nav">
          <NavLink
            to={"/"}
            activeclassname="active"
            className="nav-a"
            onClick={showNavbar}
          >
            HOME
          </NavLink>
          <NavLink
            to={"/search"}
            activeclassname="active"
            className="nav-a"
            onClick={showNavbar}
          >
            SEARCH
          </NavLink>
          {!ctx.currentUser && (
            <NavLink
              to={"/login"}
              activeclassname="active"
              className="nav-a"
              onClick={showNavbar}
            >
              LOG IN
            </NavLink>
          )}
          {ctx.currentUser && (
            <NavLink
              to={"/goals"}
              activeclassname="active"
              className="nav-a"
              onClick={showNavbar}
            >
              MY PROFILE
            </NavLink>
          )}
          <NavLink
            to={"/profile"}
            activeclassname="border-0"
            className="lg:absolute lg:right-12 scale-150 icon"
            onClick={showNavbar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </nav>
        {navIsClicked && <FaBars onClick={showNavbar} className="faBar" />}
        {!navIsClicked && <FaTimes onClick={showNavbar} className="faBar" />}
      </header>
    </div>
  );
};

export default Navbar;
