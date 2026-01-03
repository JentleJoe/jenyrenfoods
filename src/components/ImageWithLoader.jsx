import { useState } from 'react';

/**
 * Image component with loading placeholder and fade-in animation
 */
const ImageWithLoader = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  placeholderColor = 'bg-cream-200',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Placeholder / Loading state */}
      <div
        className={`
          absolute inset-0 ${placeholderColor}
          flex items-center justify-center
          transition-opacity duration-500
          ${isLoaded ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {!hasError && (
          <div className="w-8 h-8 border-2 border-honey-400 border-t-transparent rounded-full animate-spin" />
        )}
        {hasError && (
          <div className="text-brown-400 text-sm">Failed to load</div>
        )}
      </div>

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`
          transition-all duration-500
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          ${className}
        `}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithLoader;
