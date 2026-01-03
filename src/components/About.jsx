import { CheckCircle, Award, Truck, Users, Leaf, Heart } from 'lucide-react';
import whiteChinChinImage from '../assets/whitechinchin.png';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure premium standards.'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: '100% Natural',
      description: 'No artificial preservatives, colors, or flavors - just pure, natural goodness.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Traditional Methods',
      description: 'Time-honored processing techniques that preserve authentic flavors and nutrients.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Fresh Delivery',
      description: 'Fast and reliable delivery to ensure products reach you in perfect condition.'
    }
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Customers' },
    { number: '100', label: 'Natural Products', suffix: '%' },
    { number: '24/7', label: 'Customer Support', isText: true }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-cream-50 to-honey-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection animation="fade-right" delay={100}>
              <div className="inline-flex items-center px-4 py-2 bg-honey-100 rounded-full text-honey-800 font-medium mb-6 hover:scale-105 transition-transform cursor-default">
                <Heart className="w-4 h-4 mr-2 animate-pulse" />
                Our Story
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
                Preserving Tradition, 
                <span className="text-gradient block">Nourishing Lives</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" delay={300}>
              <p className="text-lg text-brown-600 mb-8 leading-relaxed">
                At Jenyrenfoods, we believe that food is more than sustenance - it's a connection to our roots, 
                our culture, and our community. For over a decade, we've been dedicated to bringing you the 
                finest African food products, processed with care and love to preserve their natural goodness.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={400 + index * 100}>
                  <div className="flex items-start space-x-3 group cursor-default">
                    <div className="w-8 h-8 bg-honey-600 rounded-full flex items-center justify-center flex-shrink-0 text-white 
                      group-hover:scale-110 group-hover:bg-honey-700 transition-all duration-300 group-hover:shadow-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-900 mb-1 group-hover:text-honey-700 transition-colors">{feature.title}</h3>
                      <p className="text-brown-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection animation="fade-up" delay={800}>
              <button className="btn-primary group">
                Learn More About Us
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </AnimatedSection>
          </div>

          {/* Right Image */}
          <AnimatedSection animation="fade-left" delay={300}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={whiteChinChinImage}
                  alt="Premium ChinChin - Fresh African produce"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-honey-500/0 group-hover:bg-honey-500/10 transition-colors duration-300" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group cursor-default">
                      <div className="text-2xl font-bold text-honey-600 group-hover:scale-110 transition-transform inline-block">
                        {stat.isText ? (
                          stat.number
                        ) : (
                          <AnimatedCounter 
                            end={stat.number} 
                            suffix={stat.suffix || ''} 
                          />
                        )}
                      </div>
                      <div className="text-sm text-brown-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-honey-200 rounded-full opacity-50 blur-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;