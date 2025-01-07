import React from "react";
import LogoImg from "assets/img/logo.svg";
import Button from "../../reusables/buttons";

const NavBar: React.FC = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  const handleMenuClicked = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <header className="s-header ">
        <div className="header-logo">
          <a href="index.html">
            <img src={LogoImg} alt="Homepage"/>
        </a>
          {/* <div className="h-50 w-50 border border-green rounded">
            <img src={LogoImg} alt="LogoImage" />
          </div> */}
        </div>

        <div className="header-content">
          <nav className={`row header-nav-wrap ${isToggled ? "is-open" : ""}`}>
            <ul className="header-nav">
              <li>
                <a className="smoothscroll" href="#hero" title="Intro">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="About">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="Services">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" title="Works">
                  Works
                </a>
              </li>
              <li>
                <a href="mailto:#0" title="Contact us">
                  Say Hello
                </a>
              </li>
            </ul>
          </nav>

          <Button title="Download CV" className="btn btn--stroke btn--small">
            Download CV
          </Button>
        </div>

        <a
          className={`header-menu-toggle ${isToggled ? "is-clicked" : ""}`}
          href="#0"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClicked();
          }}
        >
          <span>Menu</span>
        </a>
      </header>
    </div>
  );
};

export default NavBar;
