import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Removing unused import
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with the Social Engagement Group allowed me to focus on my business instead of worrying about marketing. Their team truly understands what law firms need to grow their online presence.",
    author: "Michael F. Campopiano",
    position: "CEO at MFC Law",
    rating: 5,
    image: "/testimonial/law1.png",
  },
  {
    id: 2,
    quote: "Social Engagement Group built our website from the ground up and gave us a real online presence. We finally started showing up in search and the results speak for themselves.",
    author: "Sharif Aref",
    position: "Owner at Aref Law",
    rating: 5,
    image: "/testimonial/law2.png",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);



  return (
    <section className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
      {/* Large Background Quote Decoration - Rounded 66-style */}
      <div className="absolute left-4 top-4 pointer-events-none select-none opacity-15">
        <svg 
          width="400" 
          height="320" 
          viewBox="0 0 100 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-brick w-[250px] h-[200px] md:w-[350px] md:h-[280px] lg:w-[450px] lg:h-[360px]"
        >
          {/* Left rounded 6 shape */}
          <path 
            d="M5 45C5 60 15 70 28 70C38 70 45 62 45 52C45 42 38 35 28 35C25 35 22 36 20 37C20 25 28 15 40 12L38 5C20 10 5 25 5 45Z"
            fill="currentColor"
          />
          {/* Right rounded 6 shape */}
          <path 
            d="M55 45C55 60 65 70 78 70C88 70 95 62 95 52C95 42 88 35 78 35C75 35 72 36 70 37C70 25 78 15 90 12L88 5C70 10 55 25 55 45Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-transparent to-zinc-900/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <TestimonialCard
                quote={current.quote}
                rating={current.rating}
                author={current.author}
                position={current.position}
                image={current.image}
                onNext={nextTestimonial}
                onPrev={prevTestimonial}
                currentIndex={currentIndex}
                totalCount={testimonials.length}
                onSetIndex={setCurrentIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
