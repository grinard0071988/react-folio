import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Scrollbar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`${styles.scrollTop}  fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all z-50`}
          aria-label="Scroll to top"
        >
          <ArrowUp className={styles.scrollTopArrow} size={20} />
        </button>
      )}
    </>
  );
}
