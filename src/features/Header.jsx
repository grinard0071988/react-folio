import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";
import styles from "./Header.module.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Resume", to: "/resume" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];

  const headerSocialLinks = [
    {
      icon: BiLogoTwitter,
      url: "https://www.twitter.com/Siba007/notthis",
      label: "Twitter",
    },
    {
      icon: BiLogoFacebook,
      url: "https://www.facebook.com/profile.php?id=61586012694394",
      label: "Facebook",
    },
    {
      icon: BiLogoInstagram,
      url: "https://www.facebook.com/profile.php?id=61586012694394",
      label: "Instagram",
    },
    {
      icon: BiLogoLinkedin,
      url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      label: "LinkedIn",
    },
  ];

  const renderNavLinks = (onClick) =>
    navItems.map((item) => (
      <li key={item.label}>
        <NavLink
          to={item.to}
          onClick={onClick}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          {item.label}
        </NavLink>
      </li>
    ));

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolledHeader : ""
      } sticky top-0 z-50 bg-white shadow-sm`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className={`${styles.logo} flex items-center me-auto me-xl-0`}
        >
          {/* <img src="#" alt="logo" /> */}
          <h1 className="sitename">SIBAfolio</h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav
          className={`${styles.navmenu} hidden lg:flex items-center space-x-8`}
        >
          <ul>{renderNavLinks()}</ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileNavToggle} lg:hidden text-gray-700`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Social Links */}
        <div
          className={`${styles.headerSocialLinks} hidden lg:flex items-center space-x-4`}
        >
          {headerSocialLinks.map((social) => (
            <NavLink
              key={social.label}
              to={social.url}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={18} />
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`${styles.mobileNavActive} lg:hidden bg-white border-t`}
        >
          <nav
            className={`${styles.navmenu}  mx-auto px-4 py-4 flex flex-col space-y-3`}
          >
            <ul> {renderNavLinks(() => setMobileMenuOpen(false))}</ul>
          </nav>
        </div>
      )}
    </header>
  );
}
