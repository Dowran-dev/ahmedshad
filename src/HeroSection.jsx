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

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
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
          className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 pb-20 sm:pb-28"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative text-center sm:text-left"
          >
            <h1 className="text-[50px] sm:text-[80px] md:text-[100px] font-black text-white tracking-tight leading-none">
              Ahmed Shad
            </h1>
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-3xl -z-10" />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-black/20 px-8 sm:px-12 py-3 sm:py-4 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10">
              <span className="relative text-xl sm:text-2xl tracking-wider text-white">
                Туры
              </span>
              <motion.div
                whileHover={{ x: 4 }}
                className="relative ml-2 text-white"
              >
                <MoveUpRight
                  className={"w-5 h-5 sm:w-6 sm:h-6"}
                  strokeWidth={1.6}
                />
              </motion.div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 transition group-hover:opacity-100" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Sound Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleMute}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 rounded-full bg-white/10 p-2 sm:p-3 backdrop-blur-sm transition-all hover:bg-white/20"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        ) : (
          <Volume2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        )}
      </motion.button>
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
