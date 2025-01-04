import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Target,
  Star,
  CheckCircle,
  Award,
  Play,
  Clock,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react";

// import videoURL from "./ahmedshad.mp4";
// import videoURL2 from "./ahmedshad2.mp4";
// import videoURL3 from "./ahmedshad3.mov";
// import videoURL4 from "./ahmedshad4.mp4";
import profilImage from "./ahmedshad.png";
import thumbnail from "./thumbnail.png";
import thumbnail2 from "./thumbnail2.png";
import thumbnail3 from "./thumbnail3.png";
import thumbnail4 from "./thumbnail4.png";

const placeholderVideos = [
  {
    // src: videoURL,
    thumbnail: thumbnail,
    title: "Живой концерт в Новороссийске 2024",
    venue: "Концерт Холл",
    duration: "2:15:00",
    views: "125K",
  },
  {
    // src: videoURL2,
    thumbnail: thumbnail2,
    title: "Фестиваль музыки 2024",
    venue: "Парк Горького",
    duration: "1:45:00",
    views: "98K",
  },
  {
    // src: videoURL3,
    thumbnail: thumbnail3,
    title: "Сольный концерт",
    venue: "GlavClub",
    duration: "1:30:00",
    views: "156K",
  },
  {
    // src: videoURL4,
    thumbnail: thumbnail4,
    title: "Новогодний концерт",
    venue: "ВТБ Арена",
    duration: "2:00:00",
    views: "203K",
  },
];

// ... [MobileVideoModal component remains the same]
// const MobileVideoModal = ({
//   video,
//   isOpen,
//   onClose,
//   onPrev,
//   onNext,
//   hasNext,
//   hasPrev,
// }) => {
//   const [isMuted, setIsMuted] = useState(false);
//
//   if (!isOpen) return null;
//
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
//     >
//       <div className="relative w-full h-full">
//         <div className="absolute top-4 right-4 z-10 flex space-x-4">
//           <button
//             onClick={() => setIsMuted(!isMuted)}
//             className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 touch-manipulation"
//           >
//             {isMuted ? (
//               <VolumeX className="w-6 h-6 sm:w-8 sm:h-8" />
//             ) : (
//               <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />
//             )}
//           </button>
//           <button
//             onClick={onClose}
//             className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 touch-manipulation"
//           >
//             <X className="w-6 h-6 sm:w-8 sm:h-8" />
//           </button>
//         </div>
//
//         <video
//           autoPlay
//           loop
//           muted={isMuted}
//           playsInline
//           className="w-full max-w-[500px] mx-auto h-full object-cover"
//           src={video.src}
//         />
//
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
//           <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
//             {video.title}
//           </h3>
//           <div className="flex items-center justify-between text-white/80 text-sm sm:text-base">
//             <span>{video.venue}</span>
//           </div>
//         </div>
//
//         <div className="absolute left-2 right-2 sm:left-4 sm:right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
//           {hasPrev && (
//             <button
//               onClick={onPrev}
//               className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 pointer-events-auto touch-manipulation"
//             >
//               <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
//             </button>
//           )}
//           {hasNext && (
//             <button
//               onClick={onNext}
//               className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 pointer-events-auto touch-manipulation"
//             >
//               <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
//             </button>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// ... [VideoThumbnail component remains the same]
const VideoThumbnail = ({ video, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative aspect-[9/16] snap-start w-[240px] sm:w-[300px]"
    >
      <div
        className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group touch-manipulation"
        onClick={onClick}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              {video.title}
            </h4>
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{video.venue}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ArtistAboutSection = ({ artistInfo }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = window.innerWidth < 640 ? 260 : 320; // Adjusted for mobile
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen py-8 sm:py-16 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Artist Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative mb-8 sm:mb-16"
        >
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-white/10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8 sm:mb-12"
            >
              <div className="relative group">
                <img
                  src={profilImage}
                  alt={artistInfo?.name || "Artist"}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full object-top"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                  {artistInfo?.name || "Artist Name"}
                </h2>
                <p className="text-lg sm:text-xl text-gray-400">
                  {artistInfo?.title || "Artist Title"}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {[
                {
                  icon: Target,
                  title: "Жанры",
                  content: artistInfo?.genres?.join(", ") || "Pop, Rock, Jazz",
                },
                {
                  icon: Star,
                  title: "Формат выступлений",
                  content: artistInfo?.performanceFormat || "Solo, Band",
                },
                {
                  icon: CheckCircle,
                  title: "Опыт",
                  content: artistInfo?.experience || "10+ years",
                },
                {
                  icon: Award,
                  title: "Артистический стиль",
                  content:
                    artistInfo?.description ||
                    "Unique blend of contemporary and classical",
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <div className="relative bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 group-hover:border-red-500/50 group-hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <section.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 transition-colors" />
                        <h3 className="text-lg sm:text-xl font-semibold text-white transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Концертные выступления
            </h3>
            <div className="hidden sm:flex space-x-4">
              <button
                onClick={() => handleScroll("left")}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-2 md:gap-3 lg:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {placeholderVideos.map((video, index) => (
              <div className="w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start">
                <VideoThumbnail
                  key={index}
                  video={video}
                  index={index}
                  onClick={() => {
                    setSelectedVideoIndex(index);
                    setIsVideoModalOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Modal */}
        {/*<AnimatePresence>*/}
        {/*  {isVideoModalOpen && (*/}
        {/*    <MobileVideoModal*/}
        {/*      video={placeholderVideos[selectedVideoIndex]}*/}
        {/*      isOpen={isVideoModalOpen}*/}
        {/*      onClose={() => setIsVideoModalOpen(false)}*/}
        {/*      onPrev={() =>*/}
        {/*        setSelectedVideoIndex((prev) => Math.max(0, prev - 1))*/}
        {/*      }*/}
        {/*      onNext={() =>*/}
        {/*        setSelectedVideoIndex((prev) =>*/}
        {/*          Math.min(placeholderVideos.length - 1, prev + 1)*/}
        {/*        )*/}
        {/*      }*/}
        {/*      hasPrev={selectedVideoIndex > 0}*/}
        {/*      hasNext={selectedVideoIndex < placeholderVideos.length - 1}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*</AnimatePresence>*/}
      </div>
    </section>
  );
};

export default ArtistAboutSection;
