import React from 'react';

interface HomepageAboutProps {
  isActive?: boolean;
  isTransitioning?: boolean;
  currentSlide?: number;
}

const HomepageAbout: React.FC<HomepageAboutProps> = ({ isActive, isTransitioning, currentSlide }) => {
  const isSplit = currentSlide === 6 || currentSlide === 8;
  const transitionBase = "transition-[transform,opacity,filter] duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)";
  const transitionColor = "transition-colors duration-[1000ms] ease-in-out";

  return (
    <section className={`h-[60vh] md:h-screen w-full flex items-end justify-center overflow-hidden relative ${transitionColor} ${isSplit ? 'bg-transparent' : 'bg-[#F5F5F5]'}`}>
      {/* Background Decorative Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5] to-brand-purple/5 transition-opacity duration-1000 ${isSplit ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Floating Shapes */}
       <div className={`absolute top-20 left-[10%] w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl ${transitionBase} will-change-[transform,opacity,filter] transform-gpu ${isSplit ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`} />
       <div className={`absolute bottom-20 right-[10%] w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl ${transitionBase} will-change-[transform,opacity,filter] transform-gpu ${isSplit ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`} />
 
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end">
        
        {/* Main Content Wrapper */}
        <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[90vh] flex items-end justify-center">
            
            {/* LARGE TYPOGRAPHY BACKGROUND */}
            <div className={`absolute top-[22%] md:top-0 left-1/2 -translate-x-1/2 w-full text-center z-0 select-none ${transitionBase} will-change-[transform,opacity,filter] transform-gpu ${isSplit ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'}`}>
              <h1 className="text-[30vw] md:text-[20vw] leading-[0.8] font-display font-black text-brand-black/10 tracking-wider drop-shadow-2xl opacity-100 uppercase">
                Rahee<br />Khan
              </h1>
            </div>

            {/* Cutout Image with Refined Dynamic Elements */}
            <div className={`relative z-10 h-[65%] md:h-[85%] w-auto flex justify-center items-end mt-auto transition-[transform,opacity] duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-transform ${isSplit ? 'translate-x-[100vw] opacity-0' : 'translate-x-4 md:translate-x-20 opacity-100'}`}>
                {/* Background Dot Grid Particle Effect */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full animate-float-delayed" style={{ backgroundImage: 'radial-gradient(circle, #9067C6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>

                {/* Decorative Glowing Orbs */}
                <div className="absolute top-[10%] left-[-10%] w-40 h-40 bg-brand-purple/5 rounded-full blur-3xl animate-float will-change-transform transform-gpu" />
                <div className="absolute bottom-[30%] right-[-15%] w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl animate-float-delayed will-change-transform transform-gpu" />
                
                {/* Thoughtful Strategic Icons ... */}
                <div className="absolute top-[10%] -left-16 text-brand-purple/30 animate-float will-change-transform transform-gpu">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 1 5 5v2a1 1 0 0 0 1 1h1a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-1a1 1 0 0 0-1 1v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2a1 1 0 0 0-1-1H2a3 3 0 0 1-3-3 3 3 0 0 1 3-3h1a1 1 0 0 0 1-1V7a5 5 0 0 1 5-5h3z"/><path d="M9 14v1"/><path d="M12 14v1"/><path d="M15 14v1"/></svg>
                  <div className="absolute inset-0 bg-brand-purple/20 blur-xl animate-pulse rounded-full" />
                </div>

                {/* Growth (TrendingUp) */}
                <div className="absolute top-[35%] -right-20 text-brand-lime/40 animate-float-delayed will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>

                {/* Operations (Layers) */}
                <div className="absolute bottom-[45%] -left-24 text-brand-black/10 animate-spin-slow will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>

                {/* Global Vision (Globe) ... */}
                <div className="absolute top-[65%] -right-16 text-brand-purple/20 animate-float will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                   <div className="absolute inset-0 bg-brand-purple/10 blur-lg animate-pulse rounded-full" />
                </div>

                {/* ADDITIONAL ICONS */}
                <div className="absolute top-[20%] -right-28 text-brand-purple/5 animate-float will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
                </div>
                <div className="absolute bottom-[20%] -left-16 text-brand-lime/20 animate-float-delayed will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div className="absolute top-[50%] -left-32 text-brand-black/5 animate-float will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 11 13 15 9"/></svg>
                </div>
                <div className="absolute bottom-[10%] -right-12 text-brand-purple/10 animate-spin-slow will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
                </div>
                <div className="absolute top-[80%] -left-20 text-brand-lime/10 animate-float will-change-transform transform-gpu">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>

                <img 
                    src="/rahee.png" 
                    alt="Rahee Khan" 
                    className="h-full w-auto object-contain drop-shadow-2xl relative z-10 transform-gpu"
                />
            </div>

            {/* Header / Intro Text (Absolute Center Left) */}
             <div className={`absolute top-0 md:top-[82%] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-20 text-center md:text-left w-full md:w-auto px-6 md:px-0 transition-[transform,opacity] duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-transform ${isSplit ? 'translate-x-[-100vw] opacity-0' : 'opacity-100'}`}>
                <span className="text-brand-purple font-bold tracking-widest uppercase text-xs block mb-1">
                  Leadership
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-brand-black tracking-tight uppercase leading-none">
                  Co-Founder & <span className="text-brand-purple">COO</span>
                </h2>
             </div>
        </div>

      </div>
    </section>
  );
};

export default HomepageAbout;
