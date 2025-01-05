// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// const ImageGallery = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openModal = (image, index) => {
//     setSelectedImage(image);
//     setCurrentIndex(index);
//   };

//   const closeModal = () => setSelectedImage(null);

//   const navigateImage = (direction) => {
//     const newIndex = currentIndex + direction;
//     if (newIndex >= 0 && newIndex < images.length) {
//       setSelectedImage(images[newIndex]);
//       setCurrentIndex(newIndex);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-zinc-950 py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Image Grid with Auto Width and Fixed Height */}
//         {/* <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12">
//           Фотосессия
//         </h3> */}
//         <div className="flex flex-wrap gap-4">
//           {images.map((image, index) => (
//             <motion.div
//               key={index}
//               className="relative rounded-lg overflow-hidden bg-zinc-800 h-[300px] md:h-[350px]"
//               style={{ flex: "1 0 auto" }} // Fixed height, flexible width
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img
//                 src={image}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-full object-fit cursor-pointer"
//                 onClick={() => openModal(image, index)}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Modal */}
//         {/* Modal */}
//         <AnimatePresence>
//           {selectedImage && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
//               onClick={closeModal}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Navigation Buttons */}
//                 {currentIndex > 0 && (
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigateImage(-1);
//                     }}
//                   >
//                     <ChevronLeft className="w-6 h-6 text-white" />
//                   </motion.button>
//                 )}

//                 {currentIndex < images.length - 1 && (
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigateImage(1);
//                     }}
//                   >
//                     <ChevronRight className="w-6 h-6 text-white" />
//                   </motion.button>
//                 )}

//                 {/* Close Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
//                   onClick={closeModal}
//                 >
//                   <X className="w-6 h-6 text-white" />
//                 </motion.button>

//                 {/* Image */}
//                 <motion.img
//                   key={selectedImage}
//                   src={selectedImage}
//                   alt="Selected"
//                   className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.2 }}
//                 />

//                 {/* Image Counter */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
//                   <span className="text-white text-sm">
//                     {currentIndex + 1} / {images.length}
//                   </span>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default ImageGallery;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="min-h-screen bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden bg-zinc-800 aspect-[4/4]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {!imageLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-zinc-500 border-t-zinc-300 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className={`w-full h-full object-cover cursor-pointer transition-opacity duration-300 ${
                  imageLoaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => openModal(image, index)}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {currentIndex > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage(-1);
                    }}
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </motion.button>
                )}

                {currentIndex < images.length - 1 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage(1);
                    }}
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-white text-sm">
                    {currentIndex + 1} / {images.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageGallery;
