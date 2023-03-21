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
          <NavLink to={"/"} className="nav-a" onClick={showNavbar}>
            HOME
          </NavLink>
          <NavLink to={"/search"} className="nav-a" onClick={showNavbar}>
            SEARCH
          </NavLink>
          {!ctx.currentUser && (
            <NavLink to={"/login"} className="nav-a" onClick={showNavbar}>
              LOG IN
            </NavLink>
          )}
          {ctx.currentUser && (
            <NavLink to={"/profile"} className="nav-a" onClick={showNavbar}>
              MY PROFILE
            </NavLink>
          )}
          <NavLink
            to={"/history"}
            className="lg:absolute lg:right-12 text-2xl"
            onClick={showNavbar}
          >
            ⚙️
          </NavLink>
        </nav>
        {navIsClicked && <FaBars onClick={showNavbar} className="faBar" />}
        {!navIsClicked && <FaTimes onClick={showNavbar} className="faBar" />}
      </header>
    </div>
  );
};

export default Navbar;
