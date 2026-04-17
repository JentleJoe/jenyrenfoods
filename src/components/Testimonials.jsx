import { Star, Quote, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'Home Chef',
      text: 'Jenyrenfoods has transformed my cooking! Their plantain flour is incredibly fresh and makes the most delicious fufu. The quality is consistently excellent.',
      rating: 5
    },
    {
      name: 'Kemi Adeleke',
      role: 'Restaurant Owner',
      text: 'As a restaurant owner, I need reliable suppliers. Jenyrenfoods delivers premium quality products on time, every time. Their beans flour is exceptional.',
      rating: 5
    },
    {
      name: 'David Ibeabuchi',
      role: 'Fitness Enthusiast',
      text: 'The soybean powder is perfect for my protein needs. It\'s pure, natural, and mixes well with my smoothies. Great for maintaining a healthy lifestyle.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our products.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <InteractiveCard className="h-full">
                <div 
                  className="card p-6 relative h-full transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`absolute -top-3 -left-3 w-8 h-8 bg-honey-600 rounded-full flex items-center justify-center
                    transition-all duration-300 ${hoveredIndex === index ? 'scale-125 rotate-12' : ''}`}>
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 fill-honey-400 text-honey-400 transition-all duration-300
                          ${hoveredIndex === index ? 'animate-star-twinkle' : ''}`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  
                  <p className="text-brown-600 mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  <div className="flex items-center space-x-3 mt-auto">
                    {/* Avatar placeholder with initials */}
                    <div className={`w-10 h-10 rounded-full bg-honey-100 flex items-center justify-center
                      transition-all duration-300 ${hoveredIndex === index ? 'bg-honey-200 scale-110' : ''}`}>
                      <span className="text-honey-700 font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-900">{testimonial.name}</h3>
                      <p className="text-sm text-brown-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12">
          <p className="text-lg text-brown-600 mb-6">
            Need premium products at competitive prices for your home or business?
          </p>
          <Link to="/pricing" className="btn-primary group inline-flex items-center">
            Get Pricing
            <ArrowRight className="w-4 h-4 ml-2 inline transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;