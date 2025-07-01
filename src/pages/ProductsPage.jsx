import ProductsGrid from '../components/ProductsGrid';
import { Star, Leaf, Zap, Heart, Shield } from 'lucide-react';
import chinChinImage from '../assets/chinchin.png';
import plantainFlourImage from '../assets/plantainFlour.png';
import beansFlourV2 from '../assets/beansFlourV2.png'; // Updated image path
import soybeanPowderImage from '../assets/soybeanPowder.png';
import tigernutPowderImage from '../assets/tigernutPowder.png';

const ProductsPage = () => {
  const productDetails = [
    {
      id: 'chinchin',
      name: 'ChinChin',
      description: 'Our signature ChinChin is a beloved West African snack, expertly crafted with premium ingredients for that perfect crunch and authentic taste.',
      ingredients: ['Premium wheat flour', 'Fresh eggs', 'Pure butter/margarine', 'Granulated sugar', 'Powdered milk', 'Baking powder', 'Vegetable oil'],
      nutritionFacts: {
        calories: '450 per 100g',
        protein: '8g',
        carbs: '65g',
        fat: '18g'
      },
      icon: <Star className="w-8 h-8" />,
      image: chinChinImage
    },
    {
      id: 'plantain-flour',
      name: 'Plantain Flour',
      description: 'Made from carefully selected green plantains, our flour is a healthy gluten-free alternative packed with essential nutrients.',
      ingredients: ['100% Green plantains'],
      nutritionFacts: {
        calories: '350 per 100g',
        protein: '4g',
        carbs: '85g',
        fat: '1g'
      },
      icon: <Leaf className="w-8 h-8" />,
      image: plantainFlourImage
    },
    {
      id: 'beans-flour',
      name: 'Beans Flour',
      description: 'Our beans flour is a powerhouse of plant-based protein, perfect for making traditional dishes like moi-moi and akara.',
      ingredients: ['100% Black-eyed beans', 'Natural processing'],
      nutritionFacts: {
        calories: '380 per 100g',
        protein: '24g',
        carbs: '58g',
        fat: '2g'
      },
      icon: <Zap className="w-8 h-8" />,
      image: beansFlourV2
    },
    {
      id: 'soybean-powder',
      name: 'Soybean Powder',
      description: 'Premium soybean powder that provides all essential amino acids, perfect for boosting the nutritional value of your meals.',
      ingredients: ['100% Soybeans', 'No additives', 'Non-GMO'],
      nutritionFacts: {
        calories: '420 per 100g',
        protein: '36g',
        carbs: '30g',
        fat: '20g'
      },
      icon: <Heart className="w-8 h-8" />,
      image: soybeanPowderImage
    },
    {
      id: 'tigernut-powder',
      name: 'Tigernut Powder',
      description: 'Ground from premium tigernuts, this powder is naturally sweet and packed with fiber, making it perfect for healthy beverages and snacks.',
      ingredients: ['100% Tiger nuts', 'Naturally dried', 'Finely ground'],
      nutritionFacts: {
        calories: '340 per 100g',
        protein: '7g',
        carbs: '65g',
        fat: '9g'
      },
      icon: <Shield className="w-8 h-8" />,
      image: tigernutPowderImage
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-50 to-earth-50 py-8 md:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
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
        <div className="container-custom px-4 sm:px-6 lg:px-8">
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
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
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
