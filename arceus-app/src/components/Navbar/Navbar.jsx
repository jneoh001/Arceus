import "./Navbar.css";
import { useRef, useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../../store/auth-context";

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
          <a className="nav-a" onClick={showNavbar} href="#home">
            HOME
          </a>
          <a className="nav-a" onClick={showNavbar} href="#search">
            SEARCH
          </a>
          {!ctx.isLoggedIn && (
            <a className="nav-a" onClick={showNavbar} href="#login">
              LOG IN
            </a>
          )}
          {ctx.isLoggedIn && (
            <a className="nav-a" onClick={showNavbar} href="#login">
              MY PROFILE
            </a>
          )}
        </nav>
        {navIsClicked && <FaBars onClick={showNavbar} className="faBar" />}
        {!navIsClicked && <FaTimes onClick={showNavbar} className="faBar" />}
      </header>
    </div>
  );
};

export default Navbar;
