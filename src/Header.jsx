import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled || isMenuOpen ? "bg-black/80 shadow-lg backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
            }}
            className="relative z-10"
          >
            <img src={logo} alt="logo" className="w-16 h-12 md:w-20 md:h-14" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="backdrop-blur-xl bg-white/5 rounded-full px-8 py-3 border border-white/10">
              <div className="flex space-x-8">
                {["Музыка", "Концерты", "Медиа", "О себе"].map(
                  (item, index) => (
                    <motion.a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-all"
                      whileHover={{
                        scale: 1.1,
                        color: "#FFFFFF",
                      }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden relative z-10 p-2 rounded-lg bg-white/5 border border-white/10"
            whileTap={{ scale: 0.95 }}
          >
            <div className="space-y-1.5">
              <div
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-4 py-6 space-y-4">
            {["Музыка", "Концерты", "Медиа", "О себе"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium text-gray-300 hover:text-white transition-all"
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
