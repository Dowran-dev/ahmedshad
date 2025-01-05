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
    "https://dl.dropboxusercontent.com/scl/fi/y1chxr3qzanooeipfqrn3/albom1.jpg?rlkey=4t8t2uk2hreauqd23a6vdfhjm&st=lslnfoon&dl=0",
    "https://dl.dropboxusercontent.com/scl/fi/qhb5htj6qba4hgh04dhdt/albom2.jpg?rlkey=iuidpah02chxxdrzvlqhg9mv8&st=vztvr3nl&dl=0",
    "https://dl.dropboxusercontent.com/scl/fi/6xhbjow25ue98orbfl4de/albom3.jpg?rlkey=d1wsw7hom3ss50z88ruwyernq&st=9xxrk71m&dl=0",
    // "https://dl.dropboxusercontent.com/scl/fi/3aru5f9zhht4wto9y6xan/albom4.jpg?rlkey=8m4pvintzg7xq604nw9obhbw2&st=ul3x64ly&dl=0",
    "https://dl.dropboxusercontent.com/scl/fi/veoeq5nky9hdi4f5orrl2/albom5.jpg?rlkey=4smjhtnct4pfeelyytvm2wffn&st=bn57dpay&dl=0",
    "https://dl.dropboxusercontent.com/scl/fi/blgcniqyg1h13euqz6lh3/albom6.jpg?rlkey=glf8w960ahkcdyts5q8nvq8uz&st=6qzpaqv3&dl=0",
    "https://dl.dropboxusercontent.com/scl/fi/ux9dshnta48qx0jhkk5cn/NuQpGT4yG4U.jpg?rlkey=zejjap21mt82ez56r3oz7l7c6&st=48ioikwm&dl=0",
    "https://dl.dropboxusercontent.com/scl/fi/52fxkeigbynyhfkrlbafa/qXBDxZUEig0.jpg?rlkey=w1b1fbcbviol8jyo51cnfg3a6&st=0nerltri&dl=0",
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
      city: "Москва",
      venue: "Crocus City Hall",
      date: "20 января 2025",
      tickets: "Почти распроданы",
      mood: "Грандиозный концерт",
    },
    {
      city: "Санкт-Петербург",
      venue: "Ледовый дворец",
      date: "25 января 2025",
      tickets: "Есть места",
      mood: "Интимная атмосфера",
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
      phone: "8(987)135-88-82",
      email: "a.elza1@mail.ru",
    },
  };

  return (
    <div className="bg-black text-white min-h-screen font-display overflow-x-hidden select-none">
      {/* Иммерсивный Header */}
      {/* <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-4xl font-black tracking-wider"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
          >
            <img src={logo} alt="logo" className={"w-20 h-14"} />
          </motion.h1>

          <nav className="backdrop-blur-xl bg-black/40 rounded-full px-8 py-3">
            <div className="flex space-x-8">
              {["Музыка", "Концерты", "Медиа", "О себе"].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-all"
                  whileHover={{
                    scale: 1.1,
                    color: "#FFFFFF",
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </nav>
        </div>
      </motion.header> */}
      <Header></Header>

      <HeroSection />

      {/* Enhanced "About Me" Section */}
      {/* <section id="о себе" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-900/10 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">

          <div className="w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-red-600/20 rounded-full mr-6"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_oslzhW7__ec0Hh_qgWgTN5PSKfebE1sHg&s"
                    alt="фото Ахмеда"
                    className={"w-20 h-20 object-cover rounded-full"}
                  />

                </motion.div>
                <h3 className="text-4xl font-bold bg-clip-text text-white">
                  {artistInfo.name}
                </h3>
              </div>

              <div className="space-y-8 text-gray-300">
                {[
                  {
                    icon: Target,
                    title: "Жанры",
                    content: artistInfo.genres.join(", "),
                  },
                  {
                    icon: Star,
                    title: "Формат выступлений",
                    content: artistInfo.performanceFormat,
                  },
                  {
                    icon: CheckCircle,
                    title: "Опыт",
                    content: artistInfo.experience,
                  },
                  {
                    icon: Award,
                    title: "Артистический стиль",
                    content: artistInfo.description,
                  },
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border-l-4 border-red-200 pl-6 py-2 hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center mb-2">
                      <section.icon className="w-8 h-8 mr-4 text-red-500" />
                      <h4 className="text-2xl font-semibold text-white">
                        {section.title}
                      </h4>
                    </div>
                    <p className="text-gray-400">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      <ArtistAboutSection artistInfo={artistInfo}></ArtistAboutSection>

      <ImageGallery images={images}></ImageGallery>

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

      {/* Enhanced Technical Requirements Section */}
      <section
        id="технические-требования"
        className="py-12 sm:py-24 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-900/10 opacity-50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-12 sm:mb-24 text-transparent bg-clip-text text-white"
          >
            Технические Требования
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 md:p-16 border border-white/20 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 md:space-x-8 mb-6 md:mb-0 text-center sm:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-red-600/20 p-3 sm:p-4 rounded-full mb-4 sm:mb-0"
                >
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-500" />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Технический райдер
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">
                    Тех. райдер Ahmed Shad-a.docx
                  </p>
                </div>
              </div>

              <motion.a
                href="https://uca7d312d74adfe0b6357d805ea1.dl.dropboxusercontent.com/cd/0/get/Chn391Oau5RyK5nTvtpjThuUXu0rG_TuFDL5xcsJ4QmoDOQ9K_TtpCunN8kVLDxLAmeIDjTJR1PYdxKSYOwtC0BgZfWOI64z6Os9XdPuh3IdYOs6pt0L-LgaPN8dJt9hj2ClUQC9uyQKwWHO_oO9_wY9TVWtTPmT9nhOb4rh2X3w7A/file?_download_id=8923887961912711663425663150344863102375538294852838299576935055&_log_download_success=1"
                download
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,0,0,0.3)",
                }}
                className="bg-red-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold flex items-center justify-center space-x-2 sm:space-x-4 hover:bg-red-700 transition-all w-full sm:w-auto"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Скачать файл</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
              <div className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/20">
                <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
                  Основные требования
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-green-500" />
                    Профессиональная звуковая система
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-green-500" />
                    Качественное осветительное оборудование
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/20">
                <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
                  Дополнительно
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-yellow-500" />
                    Индивидуальные мониторы
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-yellow-500" />
                    Зона для подготовки
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Динамическая секция альбомов */}
      <section className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6 md:px-8">
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
      </section>

      {/* Концерты с интерактивным дизайном */}
      <section className="relative py-12 sm:py-24 min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,255,0.1),transparent_50%)]" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Title */}
            <div className="relative inline-block mb-12">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 opacity-30" />
              <span className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                TOUR'25
              </span>
            </div>

            {/* Coming Soon Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Туры скоро начинаются
              </h2>

              {/* Decorative Element */}
              <div className="max-w-2xl mx-auto">
                <div className="relative p-1 rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center">
                    <p className="text-lg sm:text-xl text-gray-300">
                      Готовьтесь к незабываемому музыкальному путешествию
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Футер с современным подходом */}
      <footer className="bg-black border-t border-white/10 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 px-8">
          <div>
            <h4 className="text-3xl font-bold mb-8">Контакты</h4>
            <div>
              <div className="text-white text-xl space-y-4">
                <p className="font-semibold">
                  Представитель: {artistInfo.contact.representative}
                </p>
                <motion.a
                  href={`tel:${artistInfo.contact.phone}`}
                  whileHover={{ x: 10, color: "white" }}
                  className="block text-xl"
                >
                  {artistInfo.contact.phone}
                </motion.a>
                <motion.a
                  href={`mailto:${artistInfo.contact.email}`}
                  whileHover={{ x: 10, color: "white" }}
                  className="block text-xl"
                >
                  {artistInfo.contact.email}
                </motion.a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-bold mb-8">Соцсети</h4>
            <div className="space-y-4">
              {["Instagram", "VK", "TikTok", "YouTube"].map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{
                    x: 10,
                    color: "white",
                    transition: { duration: 0.3 },
                  }}
                  className="block text-gray-400 hover:text-white text-xl"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-bold mb-8">Подписка</h4>
            <div className="flex bg-white/5 rounded-full p-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full bg-transparent px-6 py-4 text-white placeholder-gray-500 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-red-600 text-white px-8 py-4 rounded-full"
              >
                →
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
