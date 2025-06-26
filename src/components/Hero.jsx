import { ArrowRight, Leaf, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-warm-gradient pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fresh organic produce"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-700/10 to-honey-600/10"></div>
      </div>

      <div className="relative z-10 container-custom text-center px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-honey-100 rounded-full text-brown-700 font-medium mb-6 border border-honey-200">
            <Leaf className="w-4 h-4 mr-2 text-forest-600" />
            100% Natural & Organic
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brown-800 mb-6 leading-tight">
            Premium
            <span className="text-gradient block">African Foods</span>
            for Modern Living
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-brown-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the finest selection of traditional African food products, 
            carefully processed to preserve their natural goodness and authentic flavors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Link to="/products" className="btn-primary inline-flex items-center text-lg px-8 py-4">
              Explore Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/pricing" className="btn-secondary text-lg px-8 py-4">
              Get Price List
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-brown-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brown-800 mb-1">Premium Quality</h3>
              <p className="text-brown-600">Carefully selected ingredients</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Leaf className="w-6 h-6 text-forest-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brown-800 mb-1">100% Natural</h3>
              <p className="text-brown-600">No artificial additives</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-honey-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-brown-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brown-800 mb-1">Trusted Brand</h3>
              <p className="text-brown-600">Loved by thousands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;