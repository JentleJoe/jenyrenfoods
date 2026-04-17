import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-honey-500 text-brown-800
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:bg-honey-600 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-honey-400 focus:ring-offset-2
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
      aria-label="Back to top"
    >
      <ArrowUp 
        className={`w-5 h-5 transition-transform duration-300 ${
          isHovered ? '-translate-y-0.5' : ''
        }`} 
      />
      
      {/* Ripple effect */}
      <span 
        className={`
          absolute inset-0 rounded-full bg-honey-400
          transition-transform duration-500
          ${isHovered ? 'scale-100 opacity-0' : 'scale-0 opacity-50'}
        `}
      />
    </button>
  );
};

export default BackToTop;
