import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsGrid = () => {
  const products = [
    {
      id: 'chinchin',
      name: 'ChinChin',
      tagline: 'Crispy Traditional Delight',
      description: 'Our signature ChinChin is a beloved West African snack, expertly crafted with premium ingredients for that perfect crunch and authentic taste.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Rich in carbohydrates', 'Perfect snack', 'Traditional recipe'],
      color: 'from-accent-400 to-accent-600'
    },
    {
      id: 'plantain-flour',
      name: 'Plantain Flour',
      tagline: 'Nature\'s Nutritious Flour',
      description: 'Made from carefully selected green plantains, our flour is a healthy gluten-free alternative packed with essential nutrients.',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Gluten-free', 'High in fiber', 'Rich in potassium'],
      color: 'from-secondary-400 to-secondary-600'
    },
    {
      id: 'beans-flour',
      name: 'Beans Flour',
      tagline: 'Protein-Rich Superfood',
      description: 'Our beans flour is a powerhouse of plant-based protein, perfect for making traditional dishes like moi-moi and akara.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['High protein', 'Fiber-rich', 'Low glycemic index'],
      color: 'from-earth-400 to-earth-600'
    },
    {
      id: 'soybean-powder',
      name: 'Soybean Powder',
      tagline: 'Complete Protein Source',
      description: 'Premium soybean powder that provides all essential amino acids, perfect for boosting the nutritional value of your meals.',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Complete protein', 'Heart healthy', 'Versatile use'],
      color: 'from-primary-400 to-primary-600'
    },
    {
      id: 'tigernut-powder',
      name: 'Tigernut Powder',
      tagline: 'Ancient Superfood',
      description: 'Ground from premium tigernuts, this powder is naturally sweet and packed with fiber, making it perfect for healthy beverages and snacks.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Naturally sweet', 'High in fiber', 'Dairy-free'],
      color: 'from-accent-500 to-earth-500'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of traditional African food products, 
            each one crafted with love and processed to maintain their natural goodness.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className={`card group ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className={`relative h-64 ${index === 0 ? 'lg:h-80' : ''} overflow-hidden`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Product Title Overlay - positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    <p className="text-white/90">{product.tagline}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <Link to={`/products/${product.id}`} className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary-50 to-earth-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Jenyrenfoods for their authentic African food needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                View All Products
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Price List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;