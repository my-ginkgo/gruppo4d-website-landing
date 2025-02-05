import React from 'react';
import Monogram from './Monogram';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="group cursor-pointer">
            <Monogram className="w-16 h-16 group-hover:rotate-180 transition-all duration-700" />
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Gruppo4D. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;