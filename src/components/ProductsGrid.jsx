import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import chinChinImage from '../assets/chinchin.jpg';
import plantainFlourImage from '../assets/plantainFlour.jpg';
import beansFlourImage from '../assets/beansFlour.jpg';
import soybeanPowderImage from '../assets/soybeanPowder.jpg';
import tigernutPowderImage from '../assets/tigernutPowder.jpg';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

const ProductsGrid = () => {
  const products = [
    {
      id: 'chinchin',
      name: 'ChinChin',
      tagline: 'Crispy Traditional Delight',
      description: 'Our signature ChinChin is a beloved West African snack, expertly crafted with premium ingredients for that perfect crunch and authentic taste.',
      image: chinChinImage,
      benefits: ['Rich in carbohydrates', 'Perfect snack', 'Traditional recipe'],
      color: 'from-honey-400 to-honey-600'
    },
    {
      id: 'plantain-flour',
      name: 'Plantain Flour',
      tagline: 'Nature\'s Nutritious Flour',
      description: 'Made from carefully selected green plantains, our flour is a healthy gluten-free alternative packed with essential nutrients.',
      image: plantainFlourImage,
      benefits: ['Gluten-free', 'High in fiber', 'Rich in potassium'],
      color: 'from-cream-400 to-brown-500'
    },
    {
      id: 'beans-flour',
      name: 'Beans Flour',
      tagline: 'Protein-Rich Superfood',
      description: 'Our beans flour is a powerhouse of plant-based protein, perfect for making traditional dishes like moi-moi and akara.',
      image: beansFlourImage,
      benefits: ['High protein', 'Fiber-rich', 'Low glycemic index'],
      color: 'from-brown-400 to-brown-600'
    },
    {
      id: 'soybean-powder',
      name: 'Soybean Powder',
      tagline: 'Complete Protein Source',
      description: 'Premium soybean powder that provides all essential amino acids, perfect for boosting the nutritional value of your meals.',
      image: soybeanPowderImage,
      benefits: ['Complete protein', 'Heart healthy', 'Versatile use'],
      color: 'from-honey-400 to-honey-600'
    },
    {
      id: 'tigernut-powder',
      name: 'Tigernut Powder',
      tagline: 'Ancient Superfood',
      description: 'Ground from premium tigernuts, this powder is naturally sweet and packed with fiber, making it perfect for healthy beverages and snacks.',
      image: tigernutPowderImage,
      benefits: ['Naturally sweet', 'High in fiber', 'Dairy-free'],
      color: 'from-peach-500 to-brown-500'
    }
  ];

  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
            Our Premium <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of traditional African food products, 
            each one crafted with love and processed to maintain their natural goodness.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <AnimatedSection 
              key={product.id} 
              animation="fade-up" 
              delay={index * 100}
              className={index === 0 ? 'lg:col-span-2' : ''}
            >
              <InteractiveCard className="h-full">
                <div className="card group h-full">
                  <div className={`relative h-64 ${index === 0 ? 'lg:h-80' : ''} overflow-hidden`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Product Title Overlay - positioned at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 transform transition-transform duration-300">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                        <p className="text-white/90">{product.tagline}</p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-honey-500/0 group-hover:bg-honey-500/10 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <p className="text-brown-600 mb-4 leading-relaxed">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefit}
                          className="px-3 py-1 bg-honey-100 text-brown-700 rounded-full text-sm font-medium border border-honey-200 
                            transform transition-all duration-300 hover:scale-105 hover:bg-honey-200 cursor-default"
                          style={{ animationDelay: `${benefitIndex * 50}ms` }}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/products/${product.id}`} 
                      className="inline-flex items-center text-honey-600 font-medium hover:text-honey-700 transition-colors group/link"
                    >
                      Learn More About {product.name}
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="scale" delay={300}>
          <div className="text-center">
            <div className="bg-honey-50 rounded-3xl p-8 md:p-12 border border-honey-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
                Ready to Experience Premium Quality?
              </h3>
              <p className="text-xl text-brown-600 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Jenyrenfoods for their authentic African food needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products" className="btn-primary group">
                  View All Products
                  <ArrowRight className="w-4 h-4 ml-2 inline transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/pricing" className="btn-secondary hover:scale-105 transition-transform">
                  Get Price List
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductsGrid;