import { useState } from 'react';
import { Star, Truck, Shield, Award, ChefHat, Package, Phone, Mail, Check, Clock, Leaf, MessageCircle } from 'lucide-react';

const ChinChinPage = () => {
  const [selectedSize, setSelectedSize] = useState('Medium Package');
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { 
      name: 'Mini Package', 
      quantity: '24 Pieces', 
      price: '₦6,500', 
      popular: false,
      description: 'Perfect for trying our premium ChinChin'
    },
    { 
      name: 'Medium Package', 
      quantity: '24 Pieces', 
      price: '₦10,800', 
      popular: true,
      description: 'Great for families and regular enjoyment'
    },
    { 
      name: 'Large Package', 
      quantity: '24 Pieces', 
      price: '₦21,600', 
      popular: false,
      description: 'Best value for ChinChin lovers'
    },
    { 
      name: 'Family Size Package', 
      quantity: '6 Pieces', 
      price: '₦27,000', 
      popular: false,
      description: 'Perfect for large families and gatherings'
    }
  ];

  const features = [
    { icon: <ChefHat className="w-5 h-5" />, text: 'Handcrafted with traditional methods' },
    { icon: <Leaf className="w-5 h-5" />, text: 'Made with premium natural ingredients' },
    { icon: <Shield className="w-5 h-5" />, text: 'Quality tested for freshness' },
    { icon: <Award className="w-5 h-5" />, text: 'Customer favorite for 10+ years' }
  ];

  const nutritionFacts = [
    { label: 'Calories', value: '450 per 100g' },
    { label: 'Protein', value: '8g' },
    { label: 'Carbohydrates', value: '65g' },
    { label: 'Fat', value: '18g' },
    { label: 'Fiber', value: '3g' },
    { label: 'Sodium', value: '120mg' }
  ];

  const ingredients = [
    'Premium wheat flour',
    'Pure palm oil',
    'Natural cane sugar',
    'Sea salt',
    'Fresh nutmeg',
    'Natural flavoring'
  ];

  const steps = [
    {
      step: '1',
      title: 'Premium Ingredient Selection',
      description: 'We carefully select the finest wheat flour and natural ingredients for optimal taste and quality.'
    },
    {
      step: '2',
      title: 'Traditional Hand Mixing',
      description: 'Our experienced artisans hand-mix the dough using time-honored techniques passed down through generations.'
    },
    {
      step: '3',
      title: 'Perfect Cutting & Shaping',
      description: 'Each piece is carefully cut and shaped to ensure uniform cooking and that signature ChinChin texture.'
    },
    {
      step: '4',
      title: 'Golden Frying Process',
      description: 'Fried to golden perfection in pure palm oil at precisely controlled temperatures for optimal crunch.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-50 to-earth-50 py-8 md:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-accent-100 rounded-full text-accent-800 font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Customer Favorite
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Premium <span className="text-gradient">ChinChin</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the authentic taste of West Africa with our signature ChinChin. 
                Handcrafted using traditional methods and premium ingredients for that perfect 
                golden crunch in every bite.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mb-2">
                      {feature.icon}
                    </div>
                    <span className="text-xs text-gray-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80"
                  alt="Premium ChinChin"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
                    <span className="text-sm font-medium">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ordering Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-secondary-50 to-earth-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {sizes.map((packageItem) => (
                      <button
                        key={packageItem.name}
                        onClick={() => setSelectedSize(packageItem.name)}
                        className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                          selectedSize === packageItem.name
                            ? 'border-secondary-500 bg-secondary-50'
                            : 'border-gray-200 bg-white hover:border-secondary-300'
                        }`}
                      >
                        {packageItem.popular && (
                          <div className="absolute -top-2 left-4">
                            <span className="bg-accent-500 text-white text-xs px-3 py-1 rounded-full">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="pt-2">
                          <div className="font-bold text-gray-900 mb-1">{packageItem.name}</div>
                          <div className="text-sm text-gray-600 mb-2">{packageItem.quantity}</div>
                          <div className="text-secondary-600 font-bold text-lg">{packageItem.price}</div>
                          <div className="text-xs text-gray-500 mt-1">{packageItem.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <a href="tel:+2349164778395" className="btn-primary text-center py-3 inline-flex items-center justify-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                      <a 
                        href="https://wa.me/2349164778395" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary text-center py-3 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white border-green-600"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp
                      </a>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Alternative Contact:</p>
                      <a href="tel:+2347082474369" className="text-secondary-600 hover:text-secondary-700 font-medium">
                        +234 708 247 4369
                      </a>
                    </div>
                    <a href="mailto:jennykingsglobal2022@gmail.com" className="w-full btn-secondary text-center py-3 inline-flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Email for Bulk Orders
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Package className="w-5 h-5 text-secondary-600" />
                      <span className="text-gray-700">Premium sealed packaging</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-secondary-600" />
                      <span className="text-gray-700">Free delivery within Asaba</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-secondary-600" />
                      <span className="text-gray-700">2-3 days nationwide delivery</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-secondary-600" />
                      <span className="text-gray-700">Freshness guarantee</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Nutrition Facts (per 100g)</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {nutritionFacts.map((fact, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{fact.label}:</span>
                          <span className="font-medium">{fact.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It&apos;s Made Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crafted with <span className="text-gradient">Tradition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece of our ChinChin is made using time-honored techniques that have been 
              perfected over generations, ensuring authentic taste and superior quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pure, Natural <span className="text-gradient">Ingredients</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in transparency. That&apos;s why we use only the finest, 
                natural ingredients with no artificial preservatives or additives.
              </p>
              
              <div className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-secondary-600" />
                    <span className="text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586825112956-136b76d0b5dd?auto=format&fit=crop&w=800&q=80"
                  alt="Natural ingredients"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-600 to-earth-600 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Premium ChinChin?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied customers who trust Jenyrenfoods for authentic, 
              high-quality African snacks delivered fresh to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+2349164778395" className="bg-white text-secondary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call: +234 916 477 8395
              </a>
              <a href="tel:+2347082474369" className="bg-white text-secondary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call: +234 708 247 4369
              </a>
              <a href="mailto:jennykingsglobal2022@gmail.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-secondary-600 transition-colors inline-flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChinChinPage;
