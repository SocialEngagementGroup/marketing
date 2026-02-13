import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sendCommand = (func: 'playVideo' | 'pauseVideo') => {
    if (!iframeRef.current) return;
    iframeRef.current.contentWindow?.postMessage(JSON.stringify({
      event: 'command',
      func: func,
      args: ''
    }), '*');
  };

  const toggleVideo = () => {
    const newState = !isPlaying;
    sendCommand(newState ? 'playVideo' : 'pauseVideo');
    setIsPlaying(newState);
  };

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        sendCommand('playVideo');
        setIsPlaying(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      sendCommand('pauseVideo');
      setIsPlaying(false);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-[#A64942] uppercase mb-4 block"
          >
            Watch Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#A64942] mb-6 leading-tight font-outfit"
          >
            See How We <br className="md:hidden" /> <span className="text-[#8E3E38]">Transform</span> Venues
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative aspect-video overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.2)] bg-black/5 group cursor-pointer"
          onClick={toggleVideo}
        >
          <iframe 
            ref={iframeRef}
            src="https://www.youtube.com/embed/qd8RD-CqLDI?rel=0&modestbranding=1&enablejsapi=1&controls=0&iv_load_policy=3&loop=1&playlist=qd8RD-CqLDI" 
            title="Digital Marketing for Restaurants"
            className="absolute inset-0 w-full h-full transform scale-[1.01] pointer-events-none transition-all duration-700"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
          
          <div className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-transparent group-hover:bg-black/10' : 'bg-black/10'}`}>
            <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-[#A64942]/90 rounded-full flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90' : 'opacity-100 scale-100 animate-pulse'}`}>
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
