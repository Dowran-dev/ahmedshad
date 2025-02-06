import React, { useEffect, useState } from "react";
import { MoveUpRight, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoElement, setVideoElement] = useState(null);

  useEffect(() => {
    const video = document.getElementById("background-video");
    setVideoElement(video);
  }, []);

  const toggleMute = () => {
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToConcerts = () => {
    const concertsSection = document.getElementById("concerts_section");
    if (concertsSection) {
      concertsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">
      {/* Video Background with Grain Overlay */}
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[120%] min-h-[130%] object-cover opacity-80"
      >
        <source
          src="https://www.dropbox.com/scl/fi/20jbrqwprqhkqann9dil8/0105.mov?rlkey=kb2zm9wxakoq2z5wavdhm0uwz&st=q26r0nvi&raw=1"
          type="video/mp4"
        />
      </video>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

      {/* Grain Effect */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] animate-grain" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto pb-12 sm:pb-24"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
            <button
              onClick={scrollToConcerts}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold rounded-3xl hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center sm:justify-start gap-2"
            >
              Купить билеты
              <MoveUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter">
              Ahmed Shad
            </h1>
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-3xl -z-10" />
          </motion.div>
        </motion.div>

        {/* Sound Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all z-50"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

// Add this to your global CSS
const styles = `
@keyframes grain {
  0%, 100% { transform: translate(0, 0) }
  10% { transform: translate(-5%, -5%) }
  20% { transform: translate(-10%, 5%) }
  30% { transform: translate(5%, -10%) }
  40% { transform: translate(-5%, 15%) }
  50% { transform: translate(-10%, 5%) }
  60% { transform: translate(15%, 0) }
  70% { transform: translate(0, 10%) }
  80% { transform: translate(-15%, 0) }
  90% { transform: translate(10%, 5%) }
}

.animate-grain {
  animation: grain 8s steps(10) infinite;
}
`;
