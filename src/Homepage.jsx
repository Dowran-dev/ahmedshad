import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Disc3,
  MapPin,
  Headphones,
  Mic,
  ArrowRight,
  Speaker,
  User,
  Music,
  Download,
  Award,
  FileText,
  CheckCircle,
  Star,
  Target,
} from "lucide-react";
import ArtistAboutSection from "./ArtistAboutSection";
import HeroSection from "./HeroSection";
import logo from "./logo.png";
import Header from "./Header";
import ImageGallery from "./ImageGallery";
import YoutubeSection from "./components/YoutubeSection";
import Footer from "./components/Footer";

const Homepage = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    {
      full: "https://dl.dropboxusercontent.com/scl/fi/y1chxr3qzanooeipfqrn3/albom1.jpg?rlkey=4t8t2uk2hreauqd23a6vdfhjm&st=lslnfoon&dl=0",
      thumbnail:
        "https://dl.dropboxusercontent.com/scl/fi/1oefgwox96tmwpkci70se/thumbnail_1.png?rlkey=zzpwsjmh7bnv7f91d5gnjzasi&st=t28b5rn2&dl=0",
    },
    {
      full: "https://dl.dropboxusercontent.com/scl/fi/qhb5htj6qba4hgh04dhdt/albom2.jpg?rlkey=iuidpah02chxxdrzvlqhg9mv8&st=vztvr3nl&dl=0",
      thumbnail:
        "https://dl.dropboxusercontent.com/scl/fi/yq1trm9ef1d06tock9zy2/thumbnail_2.png?rlkey=zan659zyf9u7f415y8t2kriyi&st=jysr270p&dl=0",
    },
    {
      full: "https://dl.dropboxusercontent.com/scl/fi/6xhbjow25ue98orbfl4de/albom3.jpg?rlkey=d1wsw7hom3ss50z88ruwyernq&st=9xxrk71m&dl=0",
      thumbnail:
        "https://dl.dropboxusercontent.com/scl/fi/8091xxt7iy7saalbmmrlq/thumbnail_3.png?rlkey=a1kp6a404pqyub1eazfqv7j4x&st=mwlse821&dl=0",
    },
    {
      full: "https://dl.dropboxusercontent.com/scl/fi/veoeq5nky9hdi4f5orrl2/albom5.jpg?rlkey=4smjhtnct4pfeelyytvm2wffn&st=bn57dpay&dl=0",
      thumbnail:
        "https://dl.dropboxusercontent.com/scl/fi/lb9whwepxadf34fawyvnu/thumbnail_4.png?rlkey=zd0hhnu8tdl6xhtzi8j2cwgoq&st=vpx8okiq&dl=0",
    },
    {
      full: "https://dl.dropboxusercontent.com/scl/fi/blgcniqyg1h13euqz6lh3/albom6.jpg?rlkey=glf8w960ahkcdyts5q8nvq8uz&st=6qzpaqv3&dl=0",
      thumbnail:
        "https://dl.dropboxusercontent.com/scl/fi/34ldl9cybp6wpj1o46af9/thumbnail_5.png?rlkey=ccc21ejlhdmjnfi4so28lbbc4&st=49gxm9yk&dl=0",
    },
    {
      full: "https://dl.dropboxusercontent.com/scl/fi/ux9dshnta48qx0jhkk5cn/NuQpGT4yG4U.jpg?rlkey=zejjap21mt82ez56r3oz7l7c6&st=48ioikwm&dl=0",
      thumbnail:
        "https://dl.dropboxusercontent.com/scl/fi/kvdwb3z6vy1j752bpmdud/thumbnail_6.png?rlkey=ypyiob7mw8aynjonjygqasg7g&st=lpp96awd&dl=0",
    },
    {
      full: "https://dl.dropboxusercontent.com/scl/fi/52fxkeigbynyhfkrlbafa/qXBDxZUEig0.jpg?rlkey=w1b1fbcbviol8jyo51cnfg3a6&st=0nerltri&dl=0",
      thumbnail:
        "https://dl.dropboxusercontent.com/scl/fi/kc55ersktwv8mmrj4h7q6/thumbnail_7.png?rlkey=626q5g1t22xh9p5efdn84guom&st=qf9frys2&dl=0",
    },
  ];

  const albums = [
    {
      title: "Тоннами",
      year: 2022,
      background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-black",
      tracks: [
        {
          name: "Аделина",
          duration: "3:09",
          mood: "Романтичный",
        },
        {
          name: "Black List",
          duration: "3:03",
          mood: "Поп",
        },
      ],
    },
    {
      title: "Старый Мир",
      year: 2023,
      background: "bg-gradient-to-br from-rose-900 via-pink-900 to-black",
      tracks: [
        {
          name: "Прикосновение",
          duration: "3:51",
          mood: "Романтичный",
        },
        {
          name: "Я буду любить тебя всегда",
          duration: "3:44",
          mood: "Лирика",
        },
      ],
    },
  ];

  const concerts = [
    {
      city: "Уфа",
      venue: "Тинкофф Холл",
      date: "10 апреля 2025",
      tickets: "Почти распроданы",
      mood: "Сольный концерт",
    },
  ];

  const artistInfo = {
    name: "Ahmed Shad",
    genres: ["Поп", "Лирика", "Танцевальные хиты"],
    performanceFormat: "Сольные шоу, энергичные танцевальные программы",
    experience: "Более 10 лет выступлений на площадках различного формата",
    description:
      "Артист с ярким сценическим образом, который привносит в каждое выступление энергию и особую атмосферу",
    contact: {
      representative: "Эльза",
      phone: "+79603928796",
      email: "a.elza1@mail.ru",
    },
  };

  return (
    <div className="bg-black text-white min-h-screen font-display overflow-x-hidden select-none">
      <Header />
      <HeroSection />
      <ArtistAboutSection artistInfo={artistInfo}></ArtistAboutSection>
      <YoutubeSection id="media_section" />
      <ImageGallery images={images}></ImageGallery>

      {/* Динамическая секция альбомов */}
      {/* <section className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-12 sm:mb-16 md:mb-24"
          >
            Мои Альбомы
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              key={currentAlbum}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={`p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl ${albums[currentAlbum].background}`}
            >
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {albums[currentAlbum].title}
                </h3>
                <Disc3 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/50" />
              </div>

              <div className="space-y-4 md:space-y-6">
                {albums[currentAlbum].tracks.map((track, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    className="flex justify-between items-center p-3 sm:p-4 rounded-lg md:rounded-xl"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                        {track.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {track.mood}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <span className="text-sm md:text-base text-gray-400">
                        {track.duration}
                      </span>
                      <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {albums.map((album, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setCurrentAlbum(idx)}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl transition-all 
                    ${
                      currentAlbum === idx
                        ? "bg-white/10 border border-white/20"
                        : "bg-white/5 opacity-60"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        {album.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400">
                        {album.year}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform 
                        ${currentAlbum === idx ? "rotate-90" : ""}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Концерты с интерактивным дизайном */}
      <section className="relative py-12 sm:py-24" id="concerts_section">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,255,0.1),transparent_50%)]" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-10 sm:mb-20"
          >
            <h2 className="relative inline-block">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 opacity-30" />
              <span className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                TOUR'25
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {concerts.map((concert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative bg-gradient-to-r from-black via-gray-900 to-black p-1 rounded-lg sm:rounded-2xl overflow-hidden">
                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />

                  <div className="relative bg-black rounded-lg sm:rounded-2xl">
                    <div className="flex flex-col sm:flex-row items-stretch">
                      {/* Left Section - Date */}
                      <div className="w-full sm:w-32 md:w-48 p-4 sm:p-6 flex flex-col justify-center items-center border-b sm:border-b-0 sm:border-r border-white/10">
                        <div className="text-center">
                          <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                            {concert.date.split(" ")[0]}
                          </div>
                          <div className="text-base sm:text-lg md:text-xl text-gray-500 uppercase tracking-wider">
                            {concert.date.split(" ")[1]}
                          </div>
                        </div>
                      </div>

                      {/* Middle Section - Concert Info */}
                      <div className="flex-grow p-4 sm:p-6 flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                          <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                              {concert.city}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-400">
                              <MapPin className="w-4 h-4" />
                              <span className="text-base sm:text-lg">
                                {concert.venue}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-start sm:items-end gap-2 sm:gap-3">
                            <span
                              className={`
                                px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium
                                ${
                                  concert.tickets === "Почти распроданы"
                                    ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                                    : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                                }
                              `}
                            >
                              {concert.tickets}
                            </span>
                            <p className="text-xs sm:text-sm text-gray-500 italic">
                              {concert.mood}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Section - New Button Design */}
                      <div className="w-full sm:w-48 md:w-64 p-4 sm:p-6 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-white/10">
                        <a
                          href="https://widget.kassir.ru/?type=A&key=5c72bfc2-821f-94a8-cfb1-38ba41f21855&domain=ufa.kassir.ru&id=237476"
                          onClick={(e) => {
                            e.preventDefault();
                            try {
                              if (
                                window.ksr &&
                                typeof window.ksr.summon === "function"
                              ) {
                                window.ksr.summon({
                                  width: 1000,
                                  height: 1000,
                                });
                              } else {
                                window.open(e.currentTarget.href, "_blank");
                              }
                            } catch (error) {
                              console.error(
                                "Failed to open Kassir widget:",
                                error
                              );
                              window.open(e.currentTarget.href, "_blank");
                            }
                            return false;
                          }}
                          className="widget-tr text-sm sm:text-base font-bold text-black"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full relative group/btn"
                          >
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg sm:rounded-xl blur-sm opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="relative flex items-center justify-between bg-gradient-to-r from-orange-400 to-yellow-400 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl">
                              КУПИТЬ БИЛЕТ →
                            </div>
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section
        id="достижения"
        className="py-12 sm:py-24 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-900/10 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-8 sm:mb-16 text-transparent bg-clip-text text-white"
          >
            Достижения
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Концертная деятельность",
                  description:
                    "Участие в концертных программах, ресторанах и на частных мероприятиях",
                },
                {
                  icon: Star,
                  title: "Зрительская оценка",
                  description:
                    "Высокие оценки зрителей за живое исполнение и энергетику",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="bg-red-600/20 p-2 sm:p-4 rounded-full mr-4 sm:mr-6">
                      <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer artistInfo={artistInfo} />
    </div>
  );
};

export default Homepage;
