// import React from "react";

// const YoutubeSection = () => {
//   return (
//     <div className="min-h-[600px] max-w-7xl mx-auto bg-[#1f1f1f] rounded-2xl relative overflow-hidden px-4 sm:px-8">
//       <div className="p-8 flex flex-col">
//         {/* Left Content */}
//         <div className="space-y-8">
//           <h1 className="text-white text-2xl md:text-6xl font-bold tracking-wider mt-16">
//             ПРЕМЬЕРЫ <br /> НОВЫХ <br /> КЛИПОВ
//           </h1>
//           <a
//             href="#"
//             className="inline-flex items-center px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 transition-colors text-white text-2xl font-medium"
//           >
//             <svg
//               className="w-7 h-7 mr-2"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
//             </svg>
//             YOUTUBE
//           </a>
//         </div>

//         <img
//           src={
//             "https://dl.dropboxusercontent.com/scl/fi/l4fhfqb938igkafo1c8ik/background.png?rlkey=hscbhixwr01n8l85l3i27tvk3&st=si12af7w&dl=0"
//           }
//           alt=""
//           className="absolute sm:w-[100px] lg:w-[600px] h-auto top-0 right-0"
//         />
//         {/* Right Content - Placeholder */}
//         <div className="mt-36 grid grid-cols-2 gap-8 py-16">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="aspect-video rounded-lg overflow-hidden bg-black shadow-lg hover:transform hover:scale-[101%] transition-transform"
//             >
//               <img
//                 src={`/api/placeholder/400/225`}
//                 alt={`Video thumbnail ${i + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YoutubeSection;

// import React, { useState, useEffect } from "react";

// const videos = [
//   {
//     id: "ys8vnPo70Lc",
//     url: "https://www.youtube.com/watch?v=ys8vnPo70Lc",
//     thumbnail: `https://img.youtube.com/vi/ys8vnPo70Lc/maxresdefault.jpg`,
//   },
//   {
//     id: "74m-ETFJLSo",
//     url: "https://www.youtube.com/watch?v=74m-ETFJLSo",
//     thumbnail: `https://img.youtube.com/vi/74m-ETFJLSo/maxresdefault.jpg`,
//   },
//   {
//     id: "L88_UZHKjc0",
//     url: "https://www.youtube.com/watch?v=L88_UZHKjc0",
//     thumbnail: `https://img.youtube.com/vi/L88_UZHKjc0/maxresdefault.jpg`,
//   },
//   {
//     id: "PmsiPCy0e24",
//     url: "https://www.youtube.com/watch?v=PmsiPCy0e24",
//     thumbnail: `https://img.youtube.com/vi/PmsiPCy0e24/maxresdefault.jpg`,
//   },
// ];

// const YoutubeSection = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Handle escape key press to close modal
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.keyCode === 27) setIsModalOpen(false);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, []);

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isModalOpen]);

//   const handleVideoClick = (video) => {
//     setSelectedVideo(video);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="min-h-[600px] max-w-7xl mx-auto bg-[#1f1f1f] rounded-2xl relative overflow-hidden px-4 sm:px-8">
//       <div className="p-8 flex flex-col">
//         {/* Left Content */}
//         <div className="space-y-8">
//           <h1 className="text-white text-2xl md:text-6xl font-bold tracking-wider mt-16">
//             ПРЕМЬЕРЫ <br /> НОВЫХ <br /> КЛИПОВ
//           </h1>
//           <a
//             href="https://www.youtube.com/@AhmedShad"
//             className="inline-flex items-center px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 transition-colors text-white text-2xl font-medium"
//           >
//             <svg
//               className="w-7 h-7 mr-2"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
//             </svg>
//             YOUTUBE
//           </a>
//         </div>

//         <img
//           src="https://dl.dropboxusercontent.com/scl/fi/l4fhfqb938igkafo1c8ik/background.png?rlkey=hscbhixwr01n8l85l3i27tvk3&st=si12af7w&dl=0"
//           alt=""
//           className="absolute sm:w-[100px] lg:w-[600px] h-auto top-0 right-0"
//         />

//         {/* Right Content - Video Grid */}
//         <div className="mt-36 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 py-16">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="aspect-video rounded-lg overflow-hidden bg-black shadow-lg hover:transform hover:scale-[101%] transition-transform cursor-pointer"
//               onClick={() => handleVideoClick(video)}
//             >
//               <img
//                 src="/api/placeholder/400/225"
//                 alt={`Video thumbnail ${video.id}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
//           <div className="relative w-full max-w-[90vw] max-h-[90vh]">
//             {/* Close button */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none"
//             >
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Video container */}
//             <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
//               {selectedVideo && (
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YoutubeSection;

import React, { useState, useEffect } from "react";

const videoIds = ["ys8vnPo70Lc", "74m-ETFJLSo", "L88_UZHKjc0", "PmsiPCy0e24"];

const videos = [
  {
    id: "ys8vnPo70Lc",
    url: "https://www.youtube.com/watch?v=ys8vnPo70Lc",
    thumbnail: `https://dl.dropboxusercontent.com/scl/fi/isn8yic3yo2hv6ssi9ufc/volnaya.png?rlkey=w06f8i542mhokiq4y437qe1tr&st=w3ppqfrb&dl=0`,
  },
  {
    id: "74m-ETFJLSo",
    url: "https://www.youtube.com/watch?v=74m-ETFJLSo",
    thumbnail: `https://dl.dropboxusercontent.com/scl/fi/9vgv62wunztdh51hnzvrt/za-toboy.png?rlkey=2vaq8o3mvqzhrrw2cj2xxvof3&st=q72qpd58&dl=0`,
  },
  {
    id: "L88_UZHKjc0",
    url: "https://www.youtube.com/watch?v=L88_UZHKjc0",
    thumbnail: `https://dl.dropboxusercontent.com/scl/fi/zccq0f6gd8rpgz0gcazry/milayaledi.png?rlkey=uuu4jqcp3z90afzbu8pyda1h1&st=cx0df3ot&dl=0`,
  },
  {
    id: "PmsiPCy0e24",
    url: "https://www.youtube.com/watch?v=PmsiPCy0e24",
    thumbnail: `https://dl.dropboxusercontent.com/scl/fi/r8qskbsw65y7cnvkx6u6e/belomorkanal.png?rlkey=bwu07l9txl0f0jockys112z12&st=vooy3wy9&dl=0`,
  },
];

const YoutubeSection = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchVideoDetails();
  }, []);

  const fetchVideoDetails = async () => {
    try {
      // Replace YOUR_API_KEY with your actual YouTube Data API key
      const API_KEY = "AIzaSyDgKtRYswKIDR5yh5PjwXIm-8peqYCPRHI";
      const videoIdsString = videoIds.join(",");

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIdsString}&key=${API_KEY}`
      );

      const data = await response.json();

      const formattedVideos = data.items.map((video) => ({
        id: video.id,
        title: video.snippet.title,
        thumbnail:
          video.snippet.thumbnails.maxres?.url ||
          video.snippet.thumbnails.high.url,
        channelTitle: video.snippet.channelTitle,
        views: formatViewCount(video.statistics.viewCount),
        duration: formatDuration(video.contentDetails.duration),
      }));

      setVideos(formattedVideos);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video details:", error);
      setLoading(false);
    }
  };

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(1)}M views`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(1)}K views`;
    }
    return `${viewCount} views`;
  };

  const formatDuration = (duration) => {
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = (match[1] || "").slice(0, -1);
    const minutes = (match[2] || "").slice(0, -1);
    const seconds = (match[3] || "").slice(0, -1);

    if (hours) {
      return `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
    }
    return `${minutes || "0"}:${seconds.padStart(2, "0")}`;
  };

  return (
    <div
      className="min-h-[600px] max-w-7xl mx-auto bg-[#1f1f1f] rounded-2xl relative overflow-hidden px-4 sm:px-8"
      id={id}
    >
      <div className="p-4 sm:p-8 flex flex-col">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-8 relative z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider mt-8 sm:mt-16">
            ПРЕМЬЕРЫ <br /> НОВЫХ <br /> КЛИПОВ
          </h1>
          <a
            href="https://www.youtube.com/@AhmedShad"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-red-600 hover:bg-red-700 transition-colors text-white text-xl sm:text-2xl font-medium"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
            </svg>
            YOUTUBE
          </a>
        </div>

        <img
          src="https://dl.dropboxusercontent.com/scl/fi/l4fhfqb938igkafo1c8ik/background.png?rlkey=hscbhixwr01n8l85l3i27tvk3&st=si12af7w&dl=0"
          alt=""
          className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto opacity-50 sm:opacity-100"
        />

        {/* Right Content - Video Grid */}
        <div className="mt-16 sm:mt-36 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-8 sm:py-16 relative z-10">
          {loading
            ? // Loading skeletons
              [...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-video bg-gray-700 rounded-lg"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : videos.map((video) => (
                <div key={video.id} className="group">
                  <div
                    className="aspect-video rounded-lg overflow-hidden bg-black shadow-lg hover:transform hover:scale-[101%] transition-all duration-300 cursor-pointer relative"
                    onClick={() => handleVideoClick(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-600 bg-opacity-0 group-hover:bg-opacity-100 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-white text-sm">
                      {video.duration}
                    </div>
                  </div>

                  <div className="mt-4 text-white space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-red-500 transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {video.channelTitle}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm whitespace-nowrap ml-2">
                        {video.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              {selectedVideo && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeSection;
