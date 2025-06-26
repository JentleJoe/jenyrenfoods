import ProductsGrid from '../components/ProductsGrid';
import { Star, Leaf, Zap, Heart, Shield } from 'lucide-react';

const ProductsPage = () => {
  const productDetails = [
    {
      id: 'chinchin',
      name: 'ChinChin',
      price: '$12.99',
      weight: '500g',
      description: 'Our signature ChinChin is a beloved West African snack, expertly crafted with premium ingredients for that perfect crunch and authentic taste.',
      ingredients: ['Wheat flour', 'Palm oil', 'Sugar', 'Salt', 'Nutmeg'],
      nutritionFacts: {
        calories: '450 per 100g',
        protein: '8g',
        carbs: '65g',
        fat: '18g'
      },
      icon: <Star className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'plantain-flour',
      name: 'Plantain Flour',
      price: '$15.99',
      weight: '1kg',
      description: 'Made from carefully selected green plantains, our flour is a healthy gluten-free alternative packed with essential nutrients.',
      ingredients: ['100% Green plantains'],
      nutritionFacts: {
        calories: '350 per 100g',
        protein: '4g',
        carbs: '85g',
        fat: '1g'
      },
      icon: <Leaf className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'beans-flour',
      name: 'Beans Flour',
      price: '$18.99',
      weight: '1kg',
      description: 'Our beans flour is a powerhouse of plant-based protein, perfect for making traditional dishes like moi-moi and akara.',
      ingredients: ['100% Black-eyed beans', 'Natural processing'],
      nutritionFacts: {
        calories: '380 per 100g',
        protein: '24g',
        carbs: '58g',
        fat: '2g'
      },
      icon: <Zap className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'soybean-powder',
      name: 'Soybean Powder',
      price: '$14.99',
      weight: '500g',
      description: 'Premium soybean powder that provides all essential amino acids, perfect for boosting the nutritional value of your meals.',
      ingredients: ['100% Soybeans', 'No additives', 'Non-GMO'],
      nutritionFacts: {
        calories: '420 per 100g',
        protein: '36g',
        carbs: '30g',
        fat: '20g'
      },
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'tigernut-powder',
      name: 'Tigernut Powder',
      price: '$16.99',
      weight: '500g',
      description: 'Ground from premium tigernuts, this powder is naturally sweet and packed with fiber, making it perfect for healthy beverages and snacks.',
      ingredients: ['100% Tiger nuts', 'Naturally dried', 'Finely ground'],
      nutritionFacts: {
        calories: '340 per 100g',
        protein: '7g',
        carbs: '65g',
        fat: '9g'
      },
      icon: <Shield className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-50 to-earth-50 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of premium African food products, 
              each crafted with care to bring you authentic flavors and exceptional nutrition.
            </p>
          </div>
        </div>
      </section>

      <ProductsGrid />
      
      {/* Detailed Product Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Product Details
          </h2>
          
          <div className="space-y-12">
            {productDetails.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-semibold text-secondary-600">{product.price}</span>
                          <span>{product.weight}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ingredients</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {product.ingredients.map((ingredient, index) => (
                            <li key={index}>• {ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Nutrition Facts</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Calories: {product.nutritionFacts.calories}</div>
                          <div>Protein: {product.nutritionFacts.protein}</div>
                          <div>Carbs: {product.nutritionFacts.carbs}</div>
                          <div>Fat: {product.nutritionFacts.fat}</div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="btn-primary mt-6">
                      Contact for Pricing
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
