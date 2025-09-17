
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-cyan-500/10 hover:border-cyan-700/50 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
