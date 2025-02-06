// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import logo from "./logo.png";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const scrollToConcerts = () => {
//     const concertsSection = document.getElementById("concerts_section");
//     if (concertsSection) {
//       concertsSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all ${
//           scrolled || isMenuOpen ? "bg-black/80 shadow-lg backdrop-blur-md" : ""
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 md:py-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//                 filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
//               }}
//               className="relative z-10"
//             >
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="w-12 h-8 sm:w-16 sm:h-12 md:w-20 md:h-14"
//               />
//             </motion.div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:block">
//               <div className="backdrop-blur-xl bg-white/5 rounded-full px-8 py-3 border border-white/10">
//                 <div className="flex space-x-8">
//                   {["Музыка", "Концерты", "Медиа", "О себе"].map(
//                     (item, index) => (
//                       <motion.a
//                         key={index}
//                         href={`#${item.toLowerCase()}`}
//                         className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-all"
//                         whileHover={{
//                           scale: 1.1,
//                           color: "#FFFFFF",
//                         }}
//                         onClick={
//                           item === "Концерты" ? scrollToConcerts : undefined
//                         }
//                       >
//                         {item}
//                       </motion.a>
//                     )
//                   )}
//                 </div>
//               </div>
//             </nav>

//             {/* Mobile Navigation Button */}
//             <motion.button
//               onClick={toggleMenu}
//               className="md:hidden relative z-10 p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10"
//             >
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMenuOpen ? (
//                   <path d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu Overlay */}
//         {isMenuOpen && (
//           <motion.nav
//             className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//           >
//             <div className="px-4 py-4 space-y-3">
//               {["Музыка", "Концерты", "Медиа", "О себе"].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={`#${item.toLowerCase()}`}
//                   className="block text-base font-medium text-gray-300 hover:text-white transition-all"
//                   whileHover={{ x: 10 }}
//                   onClick={(e) => {
//                     if (item === "Концерты") {
//                       e.preventDefault();
//                       scrollToConcerts();
//                     }
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.nav>
//         )}
//       </motion.header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Map navigation items to their corresponding section IDs
  const navItems = [
    { text: "Контакты", id: "contacts_section" },
    { text: "Концерты", id: "concerts_section" },
    { text: "Медиа", id: "media_section" },
    { text: "О себе", id: "about_section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Get header height and set scroll-padding-top
    const header = document.querySelector("header");
    if (header) {
      const height = header.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty(
        "scroll-padding-top",
        `${height}px`
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled || isMenuOpen ? "bg-black/80 shadow-lg backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
              }}
              className="relative z-10"
            >
              <img
                src={logo}
                alt="logo"
                className="w-12 h-8 sm:w-16 sm:h-12 md:w-20 md:h-14"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="backdrop-blur-xl bg-white/5 rounded-full px-8 py-3 border border-white/10">
                <div className="flex space-x-8">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-all"
                      whileHover={{
                        scale: 1.1,
                        color: "#FFFFFF",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.text}
                    </motion.a>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile Navigation Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden relative z-10 p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-base font-medium text-gray-300 hover:text-white transition-all"
                  whileHover={{ x: 10 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.text}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </motion.header>
    </>
  );
};

export default Header;
