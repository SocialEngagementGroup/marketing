import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from '../components/Common/Header';
import SEO from '../components/Common/SEO';
import HomepageHero from '../components/Homepage/Hero';
import { ServiceCard1, ServiceCard2, ServiceCard3, ServiceCard4, MobileServicesCarousel } from '../components/Homepage/Services';
import HomepagePortfolio from '../components/Homepage/Industries';
import HomepageTestimonials from '../components/Homepage/Testimonials';
import HomepageAbout from '../components/Homepage/About';
import HomepageContact from '../components/Homepage/Contact';
import Footer from '../components/Common/Footer';

import { useMediaQuery } from '../hooks/useMediaQuery';

/**
 * Homepage Landing Page
 * Full-screen slide-based layout with PREMIUM elastic transitions
 * Each service card is now a separate full-page slide
 */
const HomepageLandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'down' | 'up'>('down'); // For animation direction
  const accumulatedDelta = useRef(0);
  const lastScrollTime = useRef(0);
  
  // Responsive Check
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const slides = [
    { id: 'hero', component: HomepageHero },
    { id: 'service-1', component: ServiceCard1 },
    { id: 'service-2', component: ServiceCard2 },
    { id: 'service-3', component: ServiceCard3 },
    { id: 'service-4', component: ServiceCard4 },
    { id: 'portfolio', component: HomepagePortfolio },
    { id: 'testimonials', component: HomepageTestimonials },
    { id: 'about', component: HomepageAbout },
    { id: 'contact', component: HomepageContact },
  ];

  const mobileSlides = [
    { id: 'hero', component: HomepageHero },
    { id: 'services', component: MobileServicesCarousel },
    { id: 'portfolio', component: HomepagePortfolio },
    { id: 'testimonials', component: HomepageTestimonials },
    { id: 'about', component: HomepageAbout },
    { id: 'contact', component: HomepageContact },
  ];

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    if (index < 0 || index >= slides.length) return;
    
    setDirection(index > currentSlide ? 'down' : 'up');
    setIsTransitioning(true);
    setCurrentSlide(index);
    accumulatedDelta.current = 0;
    
    // Transition duration matches CSS
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); 
  }, [currentSlide, isTransitioning, slides.length]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Handle wheel/scroll events with smooth accumulation (DESKTOP ONLY)
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isTransitioning) return;
      
      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;
      
      if (timeDiff > 200) {
        accumulatedDelta.current = 0;
      }
      
      lastScrollTime.current = now;
      accumulatedDelta.current += e.deltaY;
      
      const threshold = 60; // Sensitive threshold
      
      if (accumulatedDelta.current > threshold) {
        accumulatedDelta.current = 0;
        nextSlide();
      } else if (accumulatedDelta.current < -threshold) {
        accumulatedDelta.current = 0;
        prevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide, isTransitioning, isDesktop]);

  // Handle touch events (DESKTOP ONLY / Tablet Landscape?)
  // Actually, standard swipe is better on mobile if we use native scroll.
  // So we disable this custom touch handler on mobile.
  useEffect(() => {
    if (!isDesktop) return;

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
      }
    };
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide, isTransitioning, isDesktop]);

  // Keyboard navigation (DESKTOP ONLY)
  useEffect(() => {
    if (!isDesktop) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isTransitioning, isDesktop]);

  // Determine if the current section has a dark background (requires light UI elements)
  // 0: Hero (Dark UI)
  // 1-4: Services (Dark UI)
  // 5: Portfolio (Light UI) -> Was 2
  // 6: Testimonials (Light UI) -> Was 3
  // 7: About (Dark UI)
  // 8: Contact (Light UI) -> Was 5
  // On Mobile, we rely on standard header styles (maybe always sticky and dark/light based on scroll? 
  // For now, let's keep static header theme or default)
  const isLightUI = [5, 6, 8].includes(currentSlide);
  const theme = isLightUI ? 'light' : 'dark';
  const accentColor = isLightUI ? 'text-[#F5E6D3]' : 'text-brand-black';
  const dotActiveColor = isLightUI ? 'bg-[#F5E6D3]' : 'bg-brand-purple';
  const dotInactiveColor = isLightUI ? 'bg-white/30' : 'bg-brand-black/10';

  if (!isDesktop) {
    // Mobile Layout: Standard Vertical Stack
    return (
      <div className="w-full bg-brand-offwhite overflow-x-hidden min-h-screen flex flex-col">
         {/* Fixed Header */}
         <div className="fixed top-0 left-0 w-full z-50">
            <Header theme="dark" /> {/* Default to dark theme or make it smart? Dark theme works for white backgrounds (Services) */}
         </div>
         
         <div> {/* Header spacing removed to allow Hero to be behind header */}
             {mobileSlides.map((slide, index) => {
               const SlideComponent = slide.component;
               
               return (
                 <div 
                   key={slide.id} 
                   className="relative w-full"
                 >
                    <SlideComponent />
                 </div>
               );
             })}
         </div>
         <Footer />

         {/* Navigation Dots and Counter are hidden via CSS in the original block, 
             so we don't render them here or the render below handles desktop only */}
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="h-screen w-screen overflow-hidden bg-brand-offwhite relative perspective-1000">
      <SEO 
        title="Where Human Creativity Meets AI-Powered Business Growth | SEG"
        description="Transform your digital presence with Social Engagement Group. From 3D animation to high-intent Google Ads, we build conversion engines for modern industries. Book a call."
      />
      <Header theme={theme} />
      
      {/* Slide Container */}
      <div className="h-full w-full relative">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          const isActive = index === currentSlide;
          const isPrev = index < currentSlide; // It was a previous slide
          const isNext = index > currentSlide; // It is a future slide
          
          // Dynamic Transition Logic based on Slide Index
          const getTransitionStyle = (): React.CSSProperties => {
             const baseTransition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
             
             // 1. Hero (0) -> Service 1 (1): Blur-Fade-Scale
             if (index === 0) {
                return {
                    transition: baseTransition,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(1.1)',
                    filter: isActive ? 'blur(0px)' : 'blur(20px)',
                    zIndex: 10,
                    visibility: isActive ? 'visible' : 'hidden',
                };
             }

             // 2. Service Slides (1, 2, 3, 4)
             if (index >= 1 && index <= 4) {
                 if (index === 1 && currentSlide === 0) {
                     return {
                        transition: baseTransition,
                        opacity: 0,
                        transform: 'scale(1.1)',
                        zIndex: 20,
                        visibility: 'hidden',
                     };
                 }
                 
                 const transform = isActive || isPrev
                    ? 'translateX(0)'
                    : 'translateX(100%)';
                 
                 return {
                    transition: baseTransition,
                    zIndex: 20 + index, 
                    transform: transform,
                    opacity: (currentSlide >= 5 && isPrev) ? 0 : 1,
                    visibility: (currentSlide >= 5 && isPrev) ? 'hidden' : 'visible',
                 };
             }

             // 3. Portfolio (5): Slides UP over Service 4
             if (index === 5) {
                 return {
                    transition: baseTransition,
                    zIndex: 30, // Higher than services
                    opacity: isActive ? 1 : (isNext ? 1 : 0),
                    transform: isActive 
                        ? 'translateY(0)' 
                        : isNext 
                             ? 'translateY(100%)' // Waiting below
                             : 'scale(0.95)', // Moving to Testimonials
                    filter: isActive ? 'blur(0px)' : (isPrev ? 'blur(10px)' : 'blur(0px)'),
                    visibility: (isActive || isNext) ? 'visible' : 'hidden',
                 };
             }

             // 4. Testimonials (6): Blur-Fade-Scale
             if (index === 6) {
                 return {
                    transition: baseTransition,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(1.1)',
                    filter: isActive ? 'blur(0px)' : 'blur(20px)',
                    zIndex: 20,
                    visibility: isActive ? 'visible' : 'hidden',
                 };
             }

             // 5. About (7): Deck Slide (Slide Up)
             if (index === 7) {
                 return {
                    transition: baseTransition,
                    zIndex: 30,
                    opacity: 1,
                    transform: isActive 
                        ? 'translateY(0)' 
                        : isNext 
                             ? 'translateY(100%)' 
                             : (currentSlide === 6 || currentSlide === 8) 
                                ? 'translateY(0) scale(1)' // Stay in place for split effect from both directions
                                : 'translateY(-100%) scale(0.9)',
                    visibility: (isActive || isNext || currentSlide === 6 || currentSlide === 8) ? 'visible' : 'hidden',
                  };
             }

             // 6. Contact (8): Blur-Fade-Scale
             return {
                 transition: baseTransition,
                 opacity: isActive ? 1 : 0,
                 transform: isActive ? 'scale(1)' : 'scale(1.1)',
                 filter: isActive ? 'blur(0px)' : 'blur(20px)',
                 zIndex: 20,
                 visibility: isActive ? 'visible' : 'hidden',
             };
          };

          return (
            <div
              key={slide.id}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                ...getTransitionStyle(),
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <SlideComponent 
                isActive={isActive} 
                isTransitioning={isTransitioning} 
                currentSlide={currentSlide}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {/* Logical Mapping: 
            0 -> Hero
            1-4 -> Services (Show as one dot)
            5 -> Portfolio
            6 -> Testimonials
            7 -> About
            8 -> Contact
        */}
        {[
          { id: 'hero', label: 'Hero', realIndex: 0 },
          { id: 'services', label: 'Services', realIndex: 1 },
          { id: 'portfolio', label: 'Portfolio', realIndex: 5 },
          { id: 'testimonials', label: 'Testimonials', realIndex: 6 },
          { id: 'about', label: 'About', realIndex: 7 },
          { id: 'contact', label: 'Contact', realIndex: 8 },
        ].map((logicalSlide, logicalIndex) => {
          // Determine if this logical dot is active
          // Active if currentSlide matches the realIndex OR if we are inside the Services group (1-4)
          const isActive = 
            (logicalSlide.id === 'services' && currentSlide >= 1 && currentSlide <= 4) ||
            currentSlide === logicalSlide.realIndex;

          return (
            <button
              key={logicalSlide.id}
              onClick={() => goToSlide(logicalSlide.realIndex)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                isActive
                  ? `${dotActiveColor} scale-150`
                  : `${dotInactiveColor} hover:${dotActiveColor}/50 hover:scale-110`
              }`}
            />
          );
        })}
      </div>

      {/* Slide Counter */}
      <div className="hidden md:block fixed bottom-8 left-8 z-50 overflow-hidden">
        <div className={`flex items-center gap-2 font-display text-lg tracking-widest transition-colors duration-500 ${accentColor}`}>
          <span className="relative h-7 w-6 block overflow-hidden">
            <span 
              key={currentSlide}
              className="block absolute inset-0 animate-[revealText_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] text-center"
            >
              {(() => {
                let displayIndex = 1;
                if (currentSlide === 0) displayIndex = 1;
                else if (currentSlide >= 1 && currentSlide <= 4) displayIndex = 2; // Services
                else if (currentSlide === 5) displayIndex = 3; // Portfolio
                else if (currentSlide === 6) displayIndex = 4; // Testimonials
                else if (currentSlide === 7) displayIndex = 5; // About
                else if (currentSlide === 8) displayIndex = 6; // Contact
                return String(displayIndex).padStart(2, '0');
              })()}
            </span>
          </span>
          <span className="opacity-50 ml-0 mr-1.2">|</span>
          {/* Total Logic Pages: 6 */}
          <span className="opacity-50">06</span>
        </div>
      </div>
    </div>
  );
};

export default HomepageLandingPage;
