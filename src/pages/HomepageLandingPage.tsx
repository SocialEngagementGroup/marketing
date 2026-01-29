import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../components/Common/Header";
import SEO from "../components/Common/SEO";
import HomepageHero from "../components/Homepage/Hero";
import {
  ServiceCard1,
  ServiceCard2,
  ServiceCard3,
  ServiceCard4,
  MobileServicesCarousel,
} from "../components/Homepage/Services";
import HomepagePortfolio from "../components/Homepage/Industries";
import HomepageTestimonials from "../components/Homepage/Testimonials";
import HomepageAbout from "../components/Homepage/About";
import HomepageContact from "../components/Homepage/Contact";
import Footer from "../components/Common/Footer";

import { useMediaQuery } from "../hooks/useMediaQuery";

/**
 * Homepage Landing Page
 * Full-screen slide-based layout with PREMIUM elastic transitions
 * Each service card is now a separate full-page slide
 */
const HomepageLandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"down" | "up">("down"); // For animation direction
  const accumulatedDelta = useRef(0);
  const lastScrollTime = useRef(0);

  // Responsive Check
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const slides = [
    { id: "hero", component: HomepageHero },
    { id: "about-top", component: HomepageAbout },
    { id: "portfolio", component: HomepagePortfolio },
    { id: "service-1", component: ServiceCard1 },
    { id: "service-2", component: ServiceCard2 },
    { id: "service-3", component: ServiceCard3 },
    { id: "service-4", component: ServiceCard4 },
    { id: "testimonials", component: HomepageTestimonials },
    { id: "about", component: HomepageAbout },
    { id: "contact", component: HomepageContact },
  ];

  const mobileSlides = [
    { id: "hero", component: HomepageHero },
    { id: "about-top", component: HomepageAbout },
    { id: "portfolio", component: HomepagePortfolio },
    { id: "services", component: MobileServicesCarousel },
    { id: "testimonials", component: HomepageTestimonials },
    { id: "about", component: HomepageAbout },
    { id: "contact", component: HomepageContact },
  ];

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      if (index < 0 || index >= slides.length) return;

      setDirection(index > currentSlide ? "down" : "up");
      setIsTransitioning(true);
      setCurrentSlide(index);
      accumulatedDelta.current = 0;

      // Transition duration matches CSS
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    },
    [currentSlide, isTransitioning, slides.length],
  );

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

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide, isTransitioning, isDesktop]);

  // Handle touch events (DESKTOP ONLY / Tablet Landscape?)
  // Actually, standard swipe is better on mobile if we use native scroll.
  // So we disable this custom touch handler on mobile.
  useEffect(() => {
    if (!isDesktop) return;

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide, isTransitioning, isDesktop]);

  // Keyboard navigation (DESKTOP ONLY)
  useEffect(() => {
    if (!isDesktop) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isTransitioning, isDesktop]);

  // Determine if the current section has a dark background (requires light UI elements)
  // 0: Hero (Dark UI)
  // 1: About Top (Dark UI)
  // 2: Portfolio (Light UI)
  // 3-6: Services (Dark UI)
  // 7: Testimonials (Light UI)
  // 8: About Bottom (Dark UI)
  // 9: Contact (Light UI)
  const isLightUI = [2, 7, 9].includes(currentSlide);
  const theme = isLightUI ? "light" : "dark";
  const accentColor = isLightUI ? "text-[#F5E6D3]" : "text-brand-black";
  const dotActiveColor = isLightUI ? "bg-[#F5E6D3]" : "bg-brand-purple";
  const dotInactiveColor = isLightUI ? "bg-white/30" : "bg-brand-black/10";

  if (!isDesktop) {
    // Mobile Layout: Standard Vertical Stack
    return (
      <div className="w-full bg-brand-offwhite overflow-x-hidden min-h-screen flex flex-col">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header theme="dark" />{" "}
          {/* Default to dark theme or make it smart? Dark theme works for white backgrounds (Services) */}
        </div>

        <div>
          {" "}
          {/* Header spacing removed to allow Hero to be behind header */}
          {mobileSlides.map((slide, index) => {
            const SlideComponent = slide.component;

            return (
              <div key={slide.id + (index === 1 ? "-top" : "")} className="relative w-full">
                <SlideComponent 
                    currentSlide={currentSlide}
                    isSplit={false} // On mobile vertical stack we typically don't want the split effect
                    {...(index === 1 ? {
                      videoId: "ujt54JDgbYo",
                      title: "Social Engagement Group | Grow With Us",
                      label: "Showcase Video"
                    } : index === 5 ? { // In mobileSlides, the second About is at index 5
                      videoId: "wlIkMShCiYg",
                      title: "Founder Introduction",
                      label: "Meet the Founder"
                    } : {})}
                />
              </div>
            );
          })}
        </div>
        <Footer />
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
            const baseTransition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";

            // 1. Hero (0)
            if (index === 0) {
              return {
                transition: baseTransition,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(1.1)",
                filter: isActive ? "blur(0px)" : "blur(20px)",
                zIndex: 10,
                visibility: isActive ? "visible" : "hidden",
              };
            }

            // 2. About Top (1): Deck Slide (Slide Up)
            if (index === 1) {
              return {
                transition: baseTransition,
                zIndex: 15,
                opacity: 1,
                transform: isActive
                  ? "translateY(0)"
                  : isNext
                    ? "translateY(100%)"
                    : currentSlide === 0 || currentSlide === 2
                      ? "translateY(0) scale(1)"
                      : "translateY(-100%) scale(0.9)",
                visibility:
                  isActive || isNext || currentSlide === 0 || currentSlide === 2
                    ? "visible"
                    : "hidden",
              };
            }

            // 3. Portfolio (2): Slides UP over Hero/About
            if (index === 2) {
              return {
                transition: baseTransition,
                zIndex: isActive ? 40 : 25,
                opacity: 1, // Keep opaque to cover background slides
                transform: isActive
                  ? "translateY(0)"
                  : isNext
                    ? "translateY(100%)"
                    : "scale(0.95)",
                // Removed blur to prevent flickering on some browsers
                visibility: isActive || isNext ? "visible" : "hidden",
              };
            }

            // 4. Service Slides (3, 4, 5, 6)
            if (index >= 3 && index <= 6) {
              // Only strictly hide if we are far away from the services section
              if (currentSlide <= 1) {
                return {
                  transition: "none",
                  opacity: 0,
                  visibility: "hidden",
                  zIndex: 0,
                  transform: "translateX(100%)",
                };
              }

              // Base horizontal transition between service cards
              let transform = isActive || isPrev ? "translateX(0)" : "translateX(100%)";

              // If we are moving to Testimonials or beyond, slide the whole services block UP
              if (currentSlide >= 7 && isPrev) {
                transform = "translateY(-100%)";
              }

              return {
                transition: baseTransition,
                zIndex: 30 + index,
                transform: transform,
                opacity: 1, // Keep opaque so it "reveals" by moving up
                // Ensure it stays visible while transitioning even if currentSlide is 2 or 7+
                visibility: currentSlide >= 2 ? "visible" : "hidden",
              };
            }

            // 5. Testimonials (7): Blur-Fade-Scale
            if (index === 7) {
              return {
                transition: baseTransition,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(1.1)",
                filter: isActive ? "blur(0px)" : "blur(20px)",
                zIndex: 20,
                visibility: isActive ? "visible" : "hidden",
              };
            }

            // 6. About Bottom (8): Blur-Fade-Scale
            if (index === 8) {
              return {
                transition: baseTransition,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(1.1)",
                filter: isActive ? "blur(0px)" : "blur(20px)",
                zIndex: 45, // Higher than Testimonials (20)
                visibility: isActive || currentSlide === 9 ? "visible" : "hidden",
              };
            }

            // 7. Contact (9): Slide Up from Bottom
            return {
              transition: baseTransition,
              zIndex: 50,
              opacity: 1,
              transform: isActive
                ? "translateY(0)"
                : isNext
                  ? "translateY(100%)"
                  : "translateY(-100%)",
              visibility: isActive || isNext ? "visible" : "hidden",
            };
          };

          return (
            <div
              key={slide.id + (index === 1 ? "-top" : "")}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                ...getTransitionStyle(),
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <SlideComponent
                isActive={isActive}
                isTransitioning={isTransitioning}
                currentSlide={currentSlide}
                isSplit={
                  index === 1 
                    ? (currentSlide === 0 || currentSlide === 2) 
                    : index === 8 
                      ? false // Changed to false for fade effect
                      : undefined
                }
                {...(index === 1 ? {
                  videoId: "ujt54JDgbYo",
                  title: "Social Engagement Group | Grow With Us",
                  label: "Showcase Video"
                } : index === 8 ? {
                  videoId: "wlIkMShCiYg",
                  title: "Founder Introduction",
                  label: "Meet the Founder"
                } : {})}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {[
          { id: "hero", label: "Hero", realIndex: 0 },
          { id: "about-top", label: "About", realIndex: 1 },
          { id: "portfolio", label: "Portfolio", realIndex: 2 },
          { id: "services", label: "Services", realIndex: 3 },
          { id: "testimonials", label: "Testimonials", realIndex: 7 },
          { id: "about", label: "About", realIndex: 8 },
          { id: "contact", label: "Contact", realIndex: 9 },
        ].map((logicalSlide, logicalIndex) => {
          // Determine if this logical dot is active
          const isActive =
            (logicalSlide.id === "services" &&
              currentSlide >= 3 &&
              currentSlide <= 6) ||
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
        <div
          className={`flex items-center gap-2 font-display text-lg tracking-widest transition-colors duration-500 ${accentColor}`}
        >
          <span className="relative h-7 w-6 block overflow-hidden">
            <span
              key={currentSlide}
              className="block absolute inset-0 animate-[revealText_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] text-center"
            >
              {(() => {
                let displayIndex = 1;
                if (currentSlide === 0) displayIndex = 1;
                else if (currentSlide === 1) displayIndex = 2; // About Top
                else if (currentSlide === 2) displayIndex = 3; // Portfolio
                else if (currentSlide >= 3 && currentSlide <= 6)
                  displayIndex = 4; // Services
                else if (currentSlide === 7) displayIndex = 5; // Testimonials
                else if (currentSlide === 8) displayIndex = 6; // About Bottom
                else if (currentSlide === 9) displayIndex = 7; // Contact
                return String(displayIndex).padStart(2, "0");
              })()}
            </span>
          </span>
          <span className="opacity-50 ml-0 mr-1.2">|</span>
          <span className="opacity-50">07</span>
        </div>
      </div>
    </div>
  );
};

export default HomepageLandingPage;
