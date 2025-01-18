import React, { useState, useEffect, useRef } from 'react';

const BackgroundAudio = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.muted = true; // Start muted
          audioRef.current.load(); // Ensure file is loaded
          audioRef.current.addEventListener('canplaythrough', async () => {
            await audioRef.current.play(); // Play only after fully loaded
            audioRef.current.muted = false; // Unmute if successful
          });
        }
      } catch (err) {
        console.log("Autoplay prevented:", err);
      }
    };
    playAudio();
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        preload="auto" 
        loop
        src='/healing-music-liberating-guilt-and-spiritual-awakening-224741.mp3' // Corrected path
      />
      <button
        onClick={toggleMute}
        className="p-2 bg-slate-800/70 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors duration-200"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="transition-transform hover:scale-110"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M23 9l-6 6" />
            <path d="M17 9l6 6" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="white"
            strokeWidth="2"
            fill="none"
            className="transition-transform hover:scale-110"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BackgroundAudio;
