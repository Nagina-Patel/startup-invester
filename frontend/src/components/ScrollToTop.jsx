// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-white border-2 border-orange-500 text-orange-500 rounded-full shadow-md hover:bg-orange-100 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
