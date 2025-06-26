import { CheckCircle, Award, Truck, Users, Leaf, Heart } from 'lucide-react';

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
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '100%', label: 'Natural Products' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-earth-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full text-secondary-800 font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preserving Tradition, 
              <span className="text-gradient block">Nourishing Lives</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Jenyrenfoods, we believe that food is more than sustenance - it's a connection to our roots, 
              our culture, and our community. For over a decade, we've been dedicated to bringing you the 
              finest African food products, processed with care and love to preserve their natural goodness.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh African produce"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;