import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  rating: number;
  author: string;
  position: string;
  image?: string;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
  onSetIndex: (index: number) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, rating, author, position, image, onNext, onPrev, currentIndex, totalCount, onSetIndex }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? 'text-brand-brick fill-brand-brick'
            : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="relative">
      {/* Large Quote Mark */}
      <div className="mb-10">
        <svg 
          width="60" 
          height="48" 
          viewBox="0 0 100 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-brick"
        >
           <path 
            d="M5 45C5 60 15 70 28 70C38 70 45 62 45 52C45 42 38 35 28 35C25 35 22 36 20 37C20 25 28 15 40 12L38 5C20 10 5 25 5 45Z"
            fill="currentColor"
          />
           <path 
            d="M55 45C55 60 65 70 78 70C88 70 95 62 95 52C95 42 88 35 78 35C75 35 72 36 70 37C70 25 78 15 90 12L88 5C70 10 55 25 55 45Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="pb-0 md:pb-8">
        {/* Quote Text */}
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light min-h-[200px] sm:min-h-[160px] md:min-h-0">
          {quote}
        </p>

        {/* Star Rating */}
        <div className="flex gap-1 mb-8">
          {renderStars(rating)}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar Placeholder */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center overflow-hidden border-2 border-gray-700">
            {image ? (
              <img 
                src={image} 
                alt={author}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xl font-bold text-white/70">
                {author.charAt(0)}
              </span>
            )}
          </div>
          
          {/* Name & Position */}
          <div>
            <h4 className="text-white font-semibold text-lg">
              {author}
            </h4>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              {position}
            </p>
          </div>
        </div>

        {/* Navigation Buttons - Bottom Right */}
        <div className="flex gap-4 w-full justify-center mt-8 md:absolute md:w-auto md:mt-0 md:right-0 md:bottom-8">
          <button 
            onClick={onPrev}
            className="w-12 h-8 border border-white/20 rounded-md flex items-center justify-center text-white hover:bg-white/10 transition-colors group"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {Array.from({ length: totalCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => onSetIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-brick w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={onNext}
            className="w-12 h-8 border border-white/20 rounded-md flex items-center justify-center text-white hover:bg-white/10 transition-colors group"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
