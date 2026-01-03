import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

/**
 * Animated counter component that counts up when scrolled into view
 */
const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5 });
  
  // Parse the end value - handle strings like "500+" or "2+"
  const numericValue = parseInt(String(end).replace(/[^0-9]/g, ''), 10) || 0;
  const hasPlus = String(end).includes('+');
  
  const count = useCountUp(numericValue, duration, isVisible);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{hasPlus ? '+' : ''}{suffix}
    </span>
  );
};

export default AnimatedCounter;
