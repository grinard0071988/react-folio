import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";
import "./index.css";

export default function AppLayout() {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center light-background sticky-top"
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <img src="assets/img/logo.webp" alt="" />
            <h1 className="sitename">SibaPortfolio</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to={ROUTES.homeRoute()} className="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.aboutRoute()}>About</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.resumeRoute()}>Resume</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.serviceRoute()}>Services</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.portfolioRoute()}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.contactRoute()}>Contact</NavLink>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <a
              href="https://www.twitter.com/Siba007/notthis"
              className="twitter"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://www.facebook.com/Siba007/notthis"
              className="facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/ibadelodun3814/"
              className="instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/grinard-adelodun-74431723b/"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
      <Outlet />

      {/* <!-- Preloader --> */}
      {/* <div id="preloader"></div> */}
    </>
  );
}
