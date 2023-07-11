import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import DarkModeToggle from "react-dark-mode-toggle";
import logo from "../assets/logo.png";

import checkBrowserThemePreference from "../helpers/checkBrowserThemePreference";
import changePageThemeColors from "../helpers/changePageTheme";
import toggleNavigation from "../helpers/toggleNavigation";
interface NavItemProps {
  name: string;
}

function Navigation() {
  const { t, i18n } = useTranslation();

  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    checkBrowserThemePreference(setIsDarkMode);
  }, []);

  // When theme state changes, change pages color scheme as well
  useEffect(() => {
    changePageThemeColors(isDarkMode);
  }, [isDarkMode]);

  function NavItem({ name }: NavItemProps) {
    return (
      <li className="nav-item">
        <a
          onClick={() => {
            setTimeout(() => toggleNavigation(navIsOpen), 300);
            setNavIsOpen((prevValue) => !prevValue);
          }}
          className="nav-link active"
          aria-current="page"
          href={`#${name}`}
        >
          <Trans i18nKey={`navigation.${name}`} />
        </a>
      </li>
    );
  }

  return (
    <>
      <div className="navigation-content">
        <div className="toggle-container">
          <i
            onClick={() => {
              toggleNavigation(navIsOpen);
              setNavIsOpen((prevValue) => !prevValue);
            }}
            className="fas fa-solid fa-angles-right nav__toggle-btn"
          />
        </div>
        <div className="nav-container">
          <nav>
            <div className="nav ">
              <a className="navbar-brand" aria-current="page" href="#">
                <img width="190" src={logo} alt="Overlapp logo" />
              </a>
            </div>
            <ul className="nav nav-list">
              <li className="nav-item">
                <NavItem name="welcome" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vision">
                  Our vision
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="mailto:hello@letsoverlapp.com?subject=Hello! I would like to talk about Overlapp"
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* <div className="nav__extra">
              <div className="dark-mode-toggle">
                <p>{isDarkMode ? "DARK" : "LIGHT"}</p>
                <DarkModeToggle
                  onChange={setIsDarkMode}
                  checked={isDarkMode}
                  size={60}
                />
              </div>
            </div> */}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
