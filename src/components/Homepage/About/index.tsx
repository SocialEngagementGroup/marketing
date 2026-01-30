import React, { useState, useRef, useEffect } from 'react';

interface HomepageAboutProps {
  isActive?: boolean;
  isTransitioning?: boolean;
  currentSlide?: number;
  isSplit?: boolean;
  videoId?: string;
  title?: string;
  label?: string;
}

const HomepageAbout: React.FC<HomepageAboutProps> = ({ 
  isActive, 
  isTransitioning, 
  currentSlide, 
  isSplit: propIsSplit,
  videoId = "wlIkMShCiYg",
  title = "Hey! This is Rahee..",
  label = "Watch Introduction"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const isSplit = propIsSplit ?? (currentSlide === 7 || currentSlide === 9);
  const transitionBase = "transition-[transform,opacity,filter] duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)";
  const transitionColor = "transition-colors duration-[1000ms] ease-in-out";

  // Intersection Observer for Mobile Autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% visible (matching Lawyer page)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Control video via YouTube IFrame API
  const sendCommand = (func: 'playVideo' | 'pauseVideo' | 'mute' | 'unMute') => {
    if (!iframeRef.current) return;
    iframeRef.current.contentWindow?.postMessage(JSON.stringify({
      event: 'command',
      func: func,
      args: ''
    }), '*');
  };

  const toggleVideo = () => {
    const newState = !isPlaying;
    if (newState) {
      sendCommand('unMute');
      sendCommand('playVideo');
    } else {
      sendCommand('pauseVideo');
    }
    setIsPlaying(newState);
  };

  // Determine effective active state (desktop slide vs mobile scroll)
  const shouldBePlaying = isActive !== undefined ? isActive : isInView;

  // Autoplay when active, pause when inactive
  useEffect(() => {
    if (shouldBePlaying) {
      // Small delay to ensure the slide is visible/ready
      const timer = setTimeout(() => {
        sendCommand('unMute');
        sendCommand('playVideo');
        setIsPlaying(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      sendCommand('pauseVideo');
      setIsPlaying(false);
    }
  }, [shouldBePlaying]);

  return (
    <section 
      ref={sectionRef}
      className={`h-[50vh] md:h-screen w-full flex items-end justify-center overflow-hidden relative ${transitionColor} ${isSplit ? 'bg-transparent' : 'bg-[#F5F5F5]'}`}
    >
      {/* Background Decorative Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5] to-brand-purple/5 transition-opacity duration-1000 ${isSplit ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Floating Shapes */}
       <div className={`absolute top-20 left-[10%] w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl ${transitionBase} will-change-[transform,opacity,filter] transform-gpu ${isSplit ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`} />
       <div className={`absolute bottom-20 right-[10%] w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl ${transitionBase} will-change-[transform,opacity,filter] transform-gpu ${isSplit ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`} />
 
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center">
        
        {/* Main Content Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center transition-all duration-1000">
            
            {/* YouTube Video Section */}
            <div className={`relative w-full z-0 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isSplit ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'}`}>
              <div className="mb-5 md:mb-6 text-center">
                 <p className="text-brand-purple text-xs md:text-sm uppercase tracking-[0.4em] font-bold">{label}</p>
              </div>
              <div 
                className="relative aspect-video overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.2)] group cursor-pointer"
                onClick={toggleVideo}
              >
                {/* 
                  The iframe is permanently pointer-events-none.
                  This ensures that wheel events (scrolling) ALWAYS reach the parent window listener.
                  We add enablejsapi=1 to allow control via togglevideo function.
                */}
                <iframe 
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&controls=0&iv_load_policy=3&loop=1&playlist=${videoId}&playsinline=1`} 
                  title={title} 
                  className="absolute inset-0 w-full h-full transform scale-[1.01] pointer-events-none transition-all duration-700"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
                
                {/* Interaction Overlay: High-Z Transparent Layer that provides Custom Controls */}
                <div className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-transparent group-hover:bg-black/10' : 'bg-black/10'}`}>
                  {/* Custom Play/Pause Button */}
                  <div className={`w-24 h-24 bg-brand-purple/90 rounded-full flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90' : 'opacity-100 scale-100 animate-pulse'}`}>
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;
