import { ArrowRight, Leaf, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/heroImg.png';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-warm-gradient pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Fresh organic produce"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-700/10 to-honey-600/10"></div>
      </div>

      <div className="relative z-10 container-custom text-center px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <AnimatedSection animation="fade-down" delay={100}>
            <div className="inline-flex items-center px-4 py-2 bg-honey-100 rounded-full text-brown-700 font-medium mb-6 border border-honey-200 hover:scale-105 transition-transform cursor-default">
              <Leaf className="w-4 h-4 mr-2 text-forest-600 animate-pulse" />
              100% Natural & Organic
            </div>
          </AnimatedSection>

          {/* Main Heading */}
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brown-800 mb-6 leading-tight">
              Premium
              <span className="text-gradient block animate-text-shimmer bg-[length:200%_100%]">African Foods</span>
              for Modern Living
            </h1>
          </AnimatedSection>

          {/* Subheading */}
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg sm:text-xl md:text-2xl text-brown-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the finest selection of traditional African food products, 
              carefully processed to preserve their natural goodness and authentic flavors.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
              <Link to="/products" className="btn-primary inline-flex items-center text-lg px-8 py-4 group">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform">
                Get Price List
              </Link>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <AnimatedSection animation="scale" delay={700}>
              <div className="text-center group cursor-default">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <Award className="w-6 h-6 text-brown-800 group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-brown-800 mb-1">Premium Quality</h2>
                <p className="text-brown-600">Carefully selected ingredients</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={800}>
              <div className="text-center group cursor-default">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <Leaf className="w-6 h-6 text-forest-700 group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-brown-800 mb-1">100% Natural</h2>
                <p className="text-brown-600">No artificial additives</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={900}>
              <div className="text-center group cursor-default">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <Users className="w-6 h-6 text-brown-800 group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-brown-800 mb-1">Trusted Brand</h2>
                <p className="text-brown-600">Loved by thousands</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brown-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-brown-400 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;