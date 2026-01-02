import React, { useState, useEffect, useRef } from "react";
import Dimage from "../../assets/img/profile/h-profile.webp";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoGithub,
} from "react-icons/bi";

import { Palette, Code, Lightbulb } from "lucide-react";

export default function Homepage() {
  const [typedText, setTypedText] = useState("");
  const [typedIndex, setTypedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Stable mutable refs (fixes typing animation bug)
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  const typedItems = [
    "UI/UX Designer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Tester",
    "Brand Strategist",
  ];

  useEffect(() => {
    const currentItem = typedItems[typedIndex];
    let timeout;

    const type = () => {
      const charIndex = charIndexRef.current;
      const isDeleting = isDeletingRef.current;

      if (!isDeleting && charIndex <= currentItem.length) {
        setTypedText(currentItem.substring(0, charIndex));
        charIndexRef.current++;
        timeout = setTimeout(type, 100);
      } else if (!isDeleting && charIndex > currentItem.length) {
        timeout = setTimeout(() => {
          isDeletingRef.current = true;
          type();
        }, 1500);
      } else if (isDeleting && charIndex > 0) {
        charIndexRef.current--;
        setTypedText(currentItem.substring(0, charIndex - 1));
        timeout = setTimeout(type, 50);
      } else {
        isDeletingRef.current = false;
        charIndexRef.current = 0;
        setTypedIndex((prev) => (prev + 1) % typedItems.length);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [typedIndex]);

  const socialLinks = [
    {
      icon: BiLogoTwitter,
      url: "https://www.twitter.com/ibadelodun3814/",
      label: "Twitter",
    },
    {
      icon: BiLogoLinkedin,
      url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      label: "LinkedIn",
    },
    {
      icon: BiLogoGithub,
      url: "https://github.com/grinard0071988/",
      label: "GitHub",
    },
    {
      icon: BiLogoFacebook,
      url: "https://www.facebook.com/profile.php?id=61586012694394",
      label: "Facebook",
    },
  ];

  //Preloader use Effect
  useEffect(() => {
    // Simulate loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {isLoading ? (
        <div id="preloader"></div>
      ) : (
        <section className={`${styles.hero} py-16 lg:py-24`}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className={`${styles.heroContent} order-2 lg:order-1`}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold  mb-4">
                  Hello, I'm{" "}
                  <span className={styles.highlight}>Ibrahim Adelodun</span>
                </h1>

                <h2
                  className={` ${styles.heroContenth2} text-2xl lg:text-3xl font-semibold  mb-6`}
                >
                  Creative <span className={styles.typed}>{typedText}</span>
                  <span className="animate-pulse">|</span>
                </h2>

                <p className={styles.heroContentP}>
                  As a skilled web developer and programmer, I bring creativity,
                  precision, and technical expertise to every project.My strong
                  understanding of HTML, CSS, JavaScript, and backend
                  technologies allows me to create seamless user experiences and
                  efficient, scalable applications. I specialize in building
                  responsive, user-friendly websites using modern frameworks
                  like React, Node.js, and Django.
                </p>

                {/* CTA Buttons */}
                <div
                  className={`${styles.heroActions} flex flex-wrap gap-4 mb-8 `}
                >
                  <NavLink
                    to="/portfolio"
                    className={`${styles.btnPrimary} ${styles.btn} px-6  py-3  text-white rounded-lg font-medium `}
                  >
                    View My Work
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={`${styles.btnOutline} ${styles.btn} px-6 py-3   rounded-lg font-medium`}
                  >
                    Get In Touch
                  </NavLink>
                </div>

                {/* Social Links */}
                <div
                  className={`${styles.socialLinks} flex items-center space-x-4`}
                >
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
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2">
                <div className={`${styles.heroImage} relative`}>
                  <div
                    className={`${styles.imageWrapper} relative rounded-2xl overflow-hidden shadow-2xl`}
                  >
                    <img
                      src={Dimage}
                      alt="Ibrahim Adelodun"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Floating Cards */}
                  <div className={`${styles.floatingElements} `}>
                    {/* absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 animate-bounce */}
                    <div
                      className={`${styles.floatingCard} ${styles.floatingCardDesign} `}
                      data-aos="fade-left"
                      data-aos-delay="700"
                    >
                      {/* w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center */}
                      <Palette
                        className={`${styles.floatingCardIcon} `}
                        size={20}
                      />
                      <span className="font-medium ">Design</span>
                    </div>

                    <div
                      className={`${styles.floatingCard} ${styles.floatingCardCode} `}
                      data-aos="fade-right"
                      data-aos-delay="800"
                    >
                      <Code className={styles.floatingCardIcon} size={20} />
                      <span className="font-medium">Code</span>
                    </div>

                    <div
                      className={`${styles.floatingCard} ${styles.floatingCardCreativity} `}
                      data-aos="fade-up"
                      data-aos-delay="900"
                    >
                      <Lightbulb
                        className={styles.floatingCardIcon}
                        size={20}
                      />
                      <span className="font-medium">Ideas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
