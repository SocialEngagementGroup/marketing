import React from 'react';

interface LogoProps {
  color?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "currentColor", className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke={color} 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Geometric Hexagon Construction resembling the PDF mark */}
      <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" />
      <path d="M5 25 L50 50 L95 25" />
      <path d="M50 95 L50 50" />
    </svg>
  );
};

export default Logo;