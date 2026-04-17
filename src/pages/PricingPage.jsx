import { Package, ShoppingCart, Info, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const PricingPage = () => {
  // ChinChin pricing data
  const chinChinPricing = [
    {
      name: 'Mini Package',
      quantity: '24 Pieces',
      price: '₦6,500',
      description: 'Perfect for trying our premium ChinChin',
      popular: false
    },
    {
      name: 'Medium Package',
      quantity: '24 Pieces', 
      price: '₦10,800',
      description: 'Great for families and regular enjoyment',
      popular: true
    },
    {
      name: 'Large Package',
      quantity: '24 Pieces',
      price: '₦21,600',
      description: 'Best value for ChinChin lovers',
      popular: false
    },
    {
      name: 'Family Size Package',
      quantity: '6 Pieces',
      price: '₦27,000',
      description: 'Perfect for large families and gatherings',
      popular: false
    }
  ];

  // Other organic foods pricing data
  const organicFoodsPricing = [
    {
      category: 'Date Powders',
      items: [
        { name: '200g Date Powder', cartonPrice: '₦30,000', note: '1 Carton = 12 packs' },
        { name: '400g Date Powder', cartonPrice: '₦60,000', note: '1 Carton = 12 packs' }
      ]
    },
    {
      category: 'Tiger Nut Products',
      items: [
        { name: '500g Tiger Nut Powder', cartonPrice: '₦42,000', note: '1 Carton = 12 packs' },
        { name: '200g Tiger Nut Powder', cartonPrice: '₦18,000', note: '₦1,500 per pack | 1 Carton = 12 packs' }
      ]
    },
    {
      category: 'Flour & Cereal Products',
      items: [
        { name: '500g 3-in-1 Pap', cartonPrice: '₦42,000', note: '1 Carton = 12 packs' },
        { name: '500g Tombrown Cereal', cartonPrice: '₦42,000', note: '1 Carton = 12 packs' },
        { name: '500g Beans Flour', cartonPrice: '₦24,000', note: '1 Carton = 12 packs' },
        { name: '500g Puff Puff Mix', cartonPrice: '₦30,000', note: '1 Carton = 12 packs' }
      ]
    },
    {
      category: 'Specialty Products',
      items: [
        { name: 'Date Seed Coffee', cartonPrice: '₦24,000', note: '1 Carton = 12 packs' },
        { name: '500g Soymilk Powder', cartonPrice: '₦36,000', note: '1 Carton = 12 packs' }
      ]
    },
    {
      category: 'Plantain & Fufu Flour',
      items: [
        { name: '1kg Plantain Flour', cartonPrice: '₦5,000', note: 'Carton pricing available' },
        { name: '500g Plantain Flour', cartonPrice: '₦2,500', note: 'Carton pricing available' },
        { name: '1kg Fufu Flour', cartonPrice: '₦4,000', note: 'Carton pricing available' },
        { name: '500g Fufu Flour', cartonPrice: '₦2,000', note: 'Carton pricing available' }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-warm-gradient py-12 md:py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brown-800 mb-6">
              Our <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Transparent pricing for premium African food products. Quality ingredients, 
              authentic flavors, and competitive wholesale rates.
            </p>
          </div>
        </div>
      </section>

      {/* ChinChin Pricing Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-honey-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-brown-800">
                Premium ChinChin Packages
              </h2>
            </div>
            <p className="text-xl text-brown-600 max-w-2xl mx-auto">
              Our signature product available now. Choose from different package sizes 
              to suit your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chinChinPricing.map((packageItem, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-6 transition-all duration-300 hover:shadow-xl ${
                  packageItem.popular 
                    ? 'bg-honey-50 border-2 border-honey-300 shadow-lg transform scale-105' 
                    : 'bg-cream-50 border border-cream-300 shadow-md hover:border-honey-300'
                }`}
              >
                {packageItem.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-honey-600 text-brown-800 px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-brown-800 mb-2">{packageItem.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-honey-600">{packageItem.price}</span>
                  </div>
                  <div className="bg-cream-100 rounded-lg p-3 mb-4 border border-cream-200">
                    <p className="text-sm font-medium text-brown-700">{packageItem.quantity}</p>
                  </div>
                  <p className="text-brown-600 text-sm mb-6">{packageItem.description}</p>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    packageItem.popular
                      ? 'bg-honey-600 text-brown-800 hover:bg-honey-700 border-2 border-honey-600'
                      : 'bg-cream-100 text-brown-700 hover:bg-honey-100 hover:text-brown-800 border-2 border-cream-300 hover:border-honey-400'
                  }`}>
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA for ChinChin */}
          <div className="mt-12 text-center">
            <div className="bg-honey-50 rounded-2xl p-8 border border-honey-200">
              <h3 className="text-2xl font-bold text-brown-800 mb-4">Ready to Order Premium ChinChin?</h3>
              <p className="text-brown-600 mb-6">Contact us directly to place your order and arrange delivery.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+2349164778395"
                  className="inline-flex items-center justify-center px-6 py-3 bg-honey-600 text-brown-800 rounded-lg hover:bg-honey-700 transition-colors font-semibold shadow-md"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +234 916 477 8395
                </a>
                <a
                  href="https://wa.me/2349164778395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors font-semibold shadow-md"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2 text-white" aria-hidden="true" />
                  WhatsApp Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Organic Foods Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ShoppingCart className="w-8 h-8 text-honey-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-brown-800">
                Other Premium Products Available
              </h2>
            </div>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Wholesale pricing for our complete range of organic African food products. 
              Perfect for retailers and bulk buyers.
            </p>
            
            {/* Wholesale Info Banner */}
            <div className="mt-8 inline-flex items-center bg-honey-50 border border-honey-200 rounded-lg px-6 py-3">
              <Info className="w-5 h-5 text-honey-600 mr-3" />
              <div className="text-left">
                <p className="text-brown-800 font-medium">Wholesale Pricing Information</p>
                <p className="text-brown-600 text-sm">1 Carton = 12 packs | Half Carton = 6 packs</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {organicFoodsPricing.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200">
                <div className="bg-brown-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-cream-100 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-brown-800">{item.name}</h4>
                          <span className="text-honey-600 font-bold text-lg whitespace-nowrap ml-4">
                            {item.cartonPrice}
                          </span>
                        </div>
                        <p className="text-sm text-brown-600">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Wholesale Contact Section */}
          <div className="mt-12">
            <div className="bg-cream-50 rounded-2xl shadow-lg p-8 text-center border border-honey-200">
              <h3 className="text-2xl font-bold text-brown-800 mb-4">Interested in Wholesale Orders?</h3>
              <p className="text-brown-600 mb-6 max-w-2xl mx-auto">
                Get the best wholesale rates for bulk purchases. Contact our sales team for custom pricing, 
                minimum order quantities, and delivery arrangements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+2347082474369"
                  className="inline-flex items-center justify-center px-6 py-3 bg-honey-500 text-white rounded-lg hover:bg-honey-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +234 708 247 4369
                </a>
                <a
                  href="https://wa.me/2347082474369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2 text-white" aria-hidden="true" />
                  WhatsApp Wholesale
                </a>
                <a
                  href="mailto:jennykingsglobal2022@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors"
                >
                  Email Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
            <p className="text-xl text-gray-600">Common questions about our pricing and ordering process.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept bank transfers, mobile money, and cash on delivery for local orders. For wholesale orders, we offer flexible payment terms.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer delivery services?</h3>
              <p className="text-gray-600">Yes! We provide delivery services within Delta State and surrounding areas. Delivery fees vary by location and order size.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Is there a minimum order quantity for wholesale?</h3>
              <p className="text-gray-600">Minimum order quantities vary by product. Contact our sales team for specific requirements and bulk pricing discounts.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How fresh are your products?</h3>
              <p className="text-gray-600">All our products are made fresh to order with natural preservation methods. We guarantee freshness and quality in every package.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
