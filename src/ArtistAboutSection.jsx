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

import profilImage from "./ahmedshad.png";

import thumbnail4 from "./thumbnail4.png";

const placeholderVideos = [
  // {
  //   src: "https://www.dropbox.com/scl/fi/5y4bqwwyofpx3pr93i436/IMG_4782.MOV?rlkey=2wk9edtc05pmabctf8v2luoo3&st=bew5ulac&raw=1",
  //   thumbnail:
  //     "https://dl.dropboxusercontent.com/scl/fi/94eiqdzldeb0o79ghjevt/thumbnail.png?rlkey=i1f108bdzpvdu1y0vrsx2dxvx&st=tgh2qcku&dl=0",
  //   title: "Живой концерт в Новороссийске 2024",
  //   venue: "Концерт Холл",
  //   duration: "2:15:00",
  //   views: "125K",
  // },
  // {
  //   src: "https://www.dropbox.com/scl/fi/dbjloc5qcwxv57mcdd7kh/ahmedshad2.mp4?rlkey=g2pnvl00ajmtfqa9vg8xbm3g5&st=nkmgtvyg&raw=1",
  //   thumbnail: thumbnail2,
  //   title: "Фестиваль музыки 2024",
  //   venue: "Парк Горького",
  //   duration: "1:45:00",
  //   views: "98K",
  // },
  // {
  //   src: "https://www.dropbox.com/scl/fi/43ny2x2z6g772dfbz2hgp/IMG_9904.MOV?rlkey=epi1vloa9lz9g9g4msxale58r&st=50bo2fzt&raw=1",
  //   thumbnail:
  //     "https://dl.dropboxusercontent.com/scl/fi/szpl64c3p8jlnqex4lcu9/thumbnail3.png?rlkey=6dd9qupqg26knb0oeelkb1i2a&st=0sjnoj9m&dl=0",
  //   title: "Сольный концерт",
  //   venue: "GlavClub",
  //   duration: "1:30:00",
  //   views: "156K",
  // },
  {
    src: "https://www.dropbox.com/scl/fi/7507mblngjnfd7vdmvju0/ahmedshad4.mp4?rlkey=fjtza2eufryvihtzdqdk4n2ec&st=8c7on55m&raw=1",
    thumbnail: thumbnail4,
    title: "Новогодний концерт",
    venue: "ВТБ Арена",
    duration: "2:00:00",
    views: "203K",
  },
  {
    src: "https://www.dropbox.com/scl/fi/22oki1a7uloj9x2xd7u1q/IMG_6462.MOV?rlkey=4mhdqbqqdd6y4v9q81x4vpvyc&st=0uubfi4a&raw=1",
    thumbnail:
      "https://dl.dropboxusercontent.com/scl/fi/v27sceerxengkeafht985/thumbnail11.png?rlkey=5s1m1zi9r7lm4twkzqgs6ngwj&st=vicxvqym&dl=0",
    title: "Новогодний концерт",
    venue: "ВТБ Арена",
    duration: "2:00:00",
    views: "203K",
  },
  {
    src: "https://www.dropbox.com/scl/fi/gukvkghvntnkf0gjlweuv/IMG_6465.MOV?rlkey=nh28fgl4t6df63j2rn43bd0b0&st=61xkt46b&raw=1",
    thumbnail:
      "https://dl.dropboxusercontent.com/scl/fi/tf6t7l0itth9qxnzjpkm8/thumbnail10.png?rlkey=yekyspyexmcexhvsni8nng2o5&st=rpyfqr7j&dl=0",
    title: "Новогодний концерт",
    venue: "ВТБ Арена",
    duration: "2:00:00",
    views: "203K",
  },
  {
    src: "https://www.dropbox.com/scl/fi/g85w4x8xr4yeus0fb7e1b/IMG_6464.MOV?rlkey=6ci617ltsseo688m3a0vqt3ln&st=d3k18nes&raw=1",
    thumbnail:
      "https://dl.dropboxusercontent.com/scl/fi/wb7bu3u54tsm9or045tpq/thumbnail1.png?rlkey=ov7ywnmhk7jj6xpj4b6sjqo2o&st=vp5gd8hp&dl=0",
    title: "Новогодний концерт",
    venue: "ВТБ Арена",
    duration: "2:00:00",
    views: "203K",
  },

  // {
  //   src: "https://www.dropbox.com/scl/fi/spvp04dw5l1x25zx8ulx5/IMG_9906-1.MOV?rlkey=64ptimtrn1vaehqg1am3vew67&st=ik3ysqjo&raw=1",
  //   thumbnail:
  //     "https://dl.dropboxusercontent.com/scl/fi/0f9silj32givy2jxjey2l/thumbnail5.png?rlkey=3nlzx6nkld07bzyrzrtqqld0t&st=9ol0e2k5&dl=0",
  //   title: "Новогодний концерт",
  //   venue: "ВТБ Арена",
  //   duration: "2:00:00",
  //   views: "203K",
  // },
  // {
  //   src: "https://www.dropbox.com/scl/fi/n6kgcpp7waht6ike03on2/IMG_9918.MOV?rlkey=he89w39x0qnerrciotpb3hfnp&st=kr1hquie&raw=1",
  //   thumbnail:
  //     "https://dl.dropboxusercontent.com/scl/fi/amkno41z1063le7nvgrd6/thumbnail6.png?rlkey=tcpjni9y2duofj7t6brqepfk3&st=85urfk95&dl=0",
  //   title: "Новогодний концерт",
  //   venue: "ВТБ Арена",
  //   duration: "2:00:00",
  //   views: "203K",
  // },
  // {
  //   src: "https://www.dropbox.com/scl/fi/isu4yxhvuy75x0kcz3qky/IMG_9919.MOV?rlkey=uemaplbbesn45ia85sfsi4kar&st=6n27rml0&raw=1",
  //   thumbnail:
  //     "https://dl.dropboxusercontent.com/scl/fi/foppz3h4x73w6eshz6bay/thumbnail7.png?rlkey=hiubs8rxfuwemmen1lyva5ssg&st=69u13v7q&dl=0",
  //   title: "Новогодний концерт",
  //   venue: "ВТБ Арена",
  //   duration: "2:00:00",
  //   views: "203K",
  // },
  // {
  //   src: "https://www.dropbox.com/scl/fi/r198owm55ob4cnmy95k6f/IMG_9955.MOV?rlkey=aryuzayne4naeftxezb0xalzu&st=1cldfzid&raw=1",
  //   thumbnail:
  //     "https://dl.dropboxusercontent.com/scl/fi/x0ew9qel9g9nquy33zawm/thumbnail8.png?rlkey=zuc4ltdjm37ivh576dwbhovq7&st=hw49hzid&dl=0",
  //   title: "Новогодний концерт",
  //   venue: "ВТБ Арена",
  //   duration: "2:00:00",
  //   views: "203K",
  // },
  // {
  //   src: "https://www.dropbox.com/scl/fi/rdzy755a7pj208m8priaj/WhatsApp-Video-2024-12-10-at-23.08.45.mp4?rlkey=kex6ftr44zj78ftgpjc4i0qne&st=g90hq5ur&raw=1",
  //   thumbnail:
  //     "https://dl.dropboxusercontent.com/scl/fi/10aykra2uq3u5tqjc4vgg/thumbnail9.png?rlkey=9oxxjc80xcx41smkjmig33g25&st=5me3c7r9&dl=0",
  //   title: "Новогодний концерт",
  //   venue: "ВТБ Арена",
  //   duration: "2:00:00",
  //   views: "203K",
  // },
];

// ... [MobileVideoModal component remains the same]
const MobileVideoModal = ({
  video,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasNext,
  hasPrev,
}) => {
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <div className="absolute top-4 right-4 z-10 flex space-x-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 touch-manipulation"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 sm:w-8 sm:h-8" />
            ) : (
              <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 touch-manipulation"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full max-w-[500px] mx-auto h-full object-cover z-10"
          src={video.src}
        />

        {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {video.title}
          </h3>
          <div className="flex items-center justify-between text-white/80 text-sm sm:text-base">
            <span>{video.venue}</span>
          </div>
        </div> */}

        <div className="absolute left-2 right-2 sm:left-4 sm:right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          {hasPrev && (
            <button
              onClick={onPrev}
              className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 pointer-events-auto touch-manipulation"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 pointer-events-auto touch-manipulation"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ... [VideoThumbnail component remains the same]
const VideoThumbnail = ({ video, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative aspect-[11/16] lg:aspect-[9/16] snap-start w-[230px] sm:w-[250px]"
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

        {/* <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
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
        </div> */}
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
        <AnimatePresence>
          {isVideoModalOpen && (
            <MobileVideoModal
              video={placeholderVideos[selectedVideoIndex]}
              isOpen={isVideoModalOpen}
              onClose={() => setIsVideoModalOpen(false)}
              onPrev={() =>
                setSelectedVideoIndex((prev) => Math.max(0, prev - 1))
              }
              onNext={() =>
                setSelectedVideoIndex((prev) =>
                  Math.min(placeholderVideos.length - 1, prev + 1)
                )
              }
              hasPrev={selectedVideoIndex > 0}
              hasNext={selectedVideoIndex < placeholderVideos.length - 1}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArtistAboutSection;
