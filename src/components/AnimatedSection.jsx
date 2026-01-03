import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Wrapper component that adds scroll-triggered animations to children
 */
const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 600,
  className = '',
  threshold = 0.1,
  as: Component = 'div'
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-down': {
      initial: 'opacity-0 -translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    'fade-left': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0',
    },
    'fade': {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
    'scale': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
    },
    'scale-up': {
      initial: 'opacity-0 scale-90',
      animate: 'opacity-100 scale-100',
    },
    'blur': {
      initial: 'opacity-0 blur-sm',
      animate: 'opacity-100 blur-0',
    },
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];
  const animationClass = isVisible ? selectedAnimation.animate : selectedAnimation.initial;

  return (
    <Component
      ref={ref}
      className={`transition-all ease-out ${className} ${animationClass}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
