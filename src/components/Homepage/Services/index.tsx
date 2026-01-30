import React, { useState, useRef, useEffect } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Strategy',
    description: 'We develop comprehensive digital strategies that align with your business goals and drive measurable results.',
    details: ['Market Research', 'Competitive Analysis', 'Brand Positioning', 'Growth Planning'],
  },
  {
    id: 2,
    title: 'Design',
    description: 'Creating stunning visual experiences that captivate your audience and elevate your brand presence.',
    details: ['UI/UX Design', 'Brand Identity', 'Motion Graphics', 'Web Design'],
  },
  {
    id: 3,
    title: 'Marketing',
    description: 'Data-driven marketing campaigns that generate leads, increase conversions, and maximize ROI.',
    details: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Campaigns'],
  },
  {
    id: 4,
    title: 'Development',
    description: 'Building robust, scalable digital solutions that power your business growth, ensuring seamless performance.',
    details: ['Web Development', 'Ai Automations', 'E-commerce Platforms', 'Custom Solutions'],
  },
];

// Export services array so HomePage can use it
export { services };

/**
 * Single Service Card Component - Reusable card for both mobile carousel and desktop
 */
interface ServiceCardInnerProps {
  service: Service;
  className?: string;
}

const ServiceCardInner: React.FC<ServiceCardInnerProps> = ({ service, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-14 w-full h-[440px] md:h-auto relative border border-gray-100 group overflow-hidden ${className}`}>
      <div className="absolute -top-4 -right-2 md:top-auto md:right-auto md:-bottom-24 md:-left-6 text-[10rem] md:text-[22rem] font-display font-black text-brand-purple/[0.08] leading-none select-none pointer-events-none z-0">
        0{service.id}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-12 pt-8 md:pt-0">
        {/* Left: Text */}
        <div className="space-y-3 md:space-y-6 relative z-10">
          <h3 className="text-3xl md:text-6xl font-display text-brand-purple uppercase tracking-tight leading-[0.9]">
            {service.title}
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Right: List */}
        <div className="space-y-2.5 md:space-y-4">
          {service.details.map((detail, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 md:gap-4 p-2.5 md:p-4 bg-gray-50 rounded-lg md:rounded-xl hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-gray-100 group-inner"
            >
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-brand-purple transition-transform flex-shrink-0" />
              <span className="font-bold text-gray-800 text-sm md:text-base tracking-wide">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Mobile Carousel Component
 */
const MobileServicesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimerRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % services.length;
      setCurrentIndex(nextIndex);
      scrollToCard(nextIndex);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section className="md:hidden w-full bg-[#F5F5F5] py-16 flex flex-col">
      {/* Mobile Title */}
      <div className="text-center mb-6 px-6">
        <span className="text-brand-purple font-bold tracking-widest uppercase text-xs mb-2 block">
          What We Do
        </span>
        <h2 className="text-4xl font-display text-brand-black tracking-tight uppercase">
          Our Services
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="flex flex-col px-6 pt-2">
        {/* Cards Scroll Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="min-w-full snap-center flex items-start overflow-visible"
            >
              <ServiceCardInner service={service} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-6 mt-6 pb-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-brand-purple text-white hover:bg-brand-purple/90 shadow-lg hover:shadow-xl active:scale-95"
            aria-label="Previous service"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToCard(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-brand-purple'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-brand-purple text-white hover:bg-brand-purple/90 shadow-lg hover:shadow-xl active:scale-95"
            aria-label="Next service"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * Desktop Service Card Component - Used as a full-page slide
 */
interface ServiceCardProps {
  serviceIndex: number;
  isOverlay?: boolean;
  isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceIndex, isOverlay = false, isActive = true }) => {
  const service = services[serviceIndex];
  
  if (!service) return null;

  return (
    <section 
      className={`hidden md:flex h-screen w-full items-center justify-center overflow-hidden relative perspective-1000 ${
        isOverlay ? 'bg-transparent pointer-events-none' : 'bg-[#F5F5F5]'
      }`}
    >
      {/* Background Elements - Only for Base Card */}
      {!isOverlay && (
        <>
          {/* Background Marquee */}
          <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden opacity-[0.04] translate-y-20">
            <div className="animate-marquee whitespace-nowrap flex">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[20vw] font-display text-brand-black mx-10">SERVICES • </span>
              ))}
            </div>
          </div>
          
          {/* Desktop Title */}
          <div className="absolute top-[15%] left-0 w-full text-center z-10 px-6">
             <div className="reveal-text-container">
              <span className="text-brand-purple font-bold tracking-widest uppercase text-xs mb-2 block reveal-text-item" style={{ animationDelay: '0.1s' }}>
                What We Do
              </span>
              <h2 className="text-7xl font-display text-brand-black tracking-tight uppercase reveal-text-item" style={{ animationDelay: '0.2s' }}>
                Our Services
              </h2>
            </div>
          </div>
        </>
      )}

      <div className={`container mx-auto px-6 relative z-20 h-full w-full flex flex-col justify-center ${isOverlay ? 'pointer-events-auto' : ''}`}>
        {/* Card Container */}
        <div className="w-full max-w-4xl mx-auto relative h-[450px] flex items-center translate-y-12">
          <div className="relative absolute inset-0 w-full h-full flex items-center">
            <ServiceCardInner service={service} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Create individual components for each service card (Desktop only)
export const ServiceCard1: React.FC<any> = (props) => <ServiceCard serviceIndex={0} isOverlay={false} {...props} />;
export const ServiceCard2: React.FC<any> = (props) => <ServiceCard serviceIndex={1} isOverlay={true} {...props} />;
export const ServiceCard3: React.FC<any> = (props) => <ServiceCard serviceIndex={2} isOverlay={true} {...props} />;
export const ServiceCard4: React.FC<any> = (props) => <ServiceCard serviceIndex={3} isOverlay={true} {...props} />;

// Export mobile carousel
export { MobileServicesCarousel };

// Default export shows mobile carousel on mobile, first card on desktop
const HomepageServices: React.FC = () => {
  return (
    <>
      <MobileServicesCarousel />
      <ServiceCard serviceIndex={0} isOverlay={false} />
    </>
  );
};

export default HomepageServices;
