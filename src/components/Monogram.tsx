import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Monogram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDark } = useTheme();
  
  return (
    <svg 
      viewBox="0 0 160.24 164.71" 
      className={className}
      aria-label="Gruppo4D Monogram"
    >
      <path
        className="transition-colors duration-300"
        fill={isDark ? '#fff' : '#a6263b'}
        d="M82.54.08c44,5.26,78.53,38.5,77.68,83.65,0,9.18-1.98,18.41-5.3,26.9,6.98-22.88,2.13-49.08-12.88-67.44-14.15-17.48-37.11-29.04-59.51-25.4-13.86,1.52-13.92-19.21,0-17.71h0Z"
      />
      <path
        className="transition-colors duration-300"
        fill={isDark ? '#fff' : '#a6263b'}
        d="M155.49,129.1c-29.53,37.92-80.95,48.27-119.32,17.8-4.77-3.87-9.06-8.29-12.74-13.14,15.95,17.82,40.88,27.24,64.36,23.91,22.28-3.05,44.06-16.71,52.55-37.75,5.84-12.65,23.66-1.93,15.15,9.17h0Z"
      />
      <path
        className="transition-colors duration-300"
        fill={isDark ? '#fff' : '#a6263b'}
        d="M7.77,127.55C-9.54,86.87,2.2,40.17,41.75,18.57c7.97-4.56,16.96-7.43,25.98-8.77-23.32,5.31-43.65,22.54-52.12,44.69-8.13,20.96-6.75,46.64,7.54,64.26,8.23,11.24-9.78,21.63-15.37,8.8h0Z"
      />
    </svg>
  );
};

export default Monogram;