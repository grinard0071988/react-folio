import React from "react";
import {
  FaAngleRight,
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/profile.php?id=61586012694394",
      label: "FaceBook",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: "https://github.com/grinard0071988/",
      label: "GitHub",
    },
    {
      icon: FaInstagram,
      url: "https://www.facebook.com/profile.php?id=61586012694394",
      label: "Instagram",
    },
    {
      icon: FaTelegramPlane,
      url: "https://www.telegram.com/adelodun_gri/",
      label: "Telegram",
    },
  ];

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Resume", to: "/resume" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <footer className={`${styles.footer} bg-gray-900 text-gray-300 py-16`}>
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Let’s talk about Projects
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            I'm a modern Developer dedicated to providing the best web solutions
            for your business. Creative and user-friendly high performance web
            applications.
          </p>
          <NavLink
            to="/portfolio"
            className={`${styles.btnPrimary} ${styles.btn}`}
          >
            Learn More..
          </NavLink>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.reverse().map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FaAngleRight className={`${styles.arrowIcon} text-sm`} />
                <NavLink
                  to={item.to}
                  className={`${styles.navOnHover} transition`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Services Links
          </h3>
          <dl className="space-y-2">
            <p className="text-sm leading-relaxed mb-4">
              "Web Design", "Web Development"
              <br />
              "Web Application","FullStack Dev"
              <br />
              "UI/UX Graphic","Business Strategy"
              <br />
            </p>
          </dl>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          {/* <div className="flex space-x-3"> */}
          <div className={`${styles.socialLinks} flex items-center space-x-3`}>
            {socialLinks.map((social) => (
              <NavLink
                key={social.label}
                to={social.url}
                className={`${styles.socialLinksA} `}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={20} />
              </NavLink>
            ))}
          </div>
          {/* </div> */}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Ideas & Design
          </h3>

          <p className="text-sm leading-relaxed mb-4">
            Ideas and creativity drive effective web development by transforming
            technical code into engaging user experiences. Creative thinking
            shapes layout, color, typography, and interaction, while ideas guide
            problem solving. Together, they help developers build functional,
            attractive, and innovative websites that meet user needs and
            business goals across modern digital platforms worldwide.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SIBAfolio. All Rights Reserved.
      </div>
    </footer>
  );
}
