import { Check, Star, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Starter Pack',
      price: '$49',
      period: 'per order',
      description: 'Perfect for individuals and small families',
      features: [
        '2-3 product varieties',
        'Free shipping on orders over $50',
        'Basic customer support',
        '1-week delivery window',
        'Standard packaging'
      ],
      popular: false,
      buttonText: 'Order Now'
    },
    {
      name: 'Family Pack',
      price: '$129',
      period: 'per order',
      description: 'Ideal for families and regular customers',
      features: [
        '5-7 product varieties',
        'Free shipping on all orders',
        'Priority customer support',
        '3-5 day delivery window',
        'Premium packaging',
        '10% bulk discount',
        'Monthly newsletter with recipes'
      ],
      popular: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Business Pack',
      price: '$299',
      period: 'per order',
      description: 'For restaurants and bulk buyers',
      features: [
        'All product varieties',
        'Free express shipping',
        '24/7 dedicated support',
        'Next-day delivery available',
        'Commercial packaging',
        '20% bulk discount',
        'Custom product sourcing',
        'Quarterly business reviews'
      ],
      popular: false,
      buttonText: 'Contact Sales'
    }
  ];

  const individualProducts = [
    { name: 'ChinChin (500g)', price: '$12.99' },
    { name: 'Plantain Flour (1kg)', price: '$15.99' },
    { name: 'Beans Flour (1kg)', price: '$18.99' },
    { name: 'Soybean Powder (500g)', price: '$14.99' },
    { name: 'Tigernut Powder (500g)', price: '$16.99' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-50 to-earth-50 py-8 md:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include our premium quality guarantee 
              and authentic African food products.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-secondary-50 to-earth-50 border-2 border-secondary-200 shadow-xl' 
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center ${
                    plan.popular
                      ? 'bg-secondary-600 text-white hover:bg-secondary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Product Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individual Product Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Prefer to order individual items? Here are our current prices.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="space-y-4">
                  {individualProducts.map((product, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{product.name}</span>
                      <span className="text-secondary-600 font-bold text-lg">{product.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-secondary-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Free shipping</strong> on orders over $50. 
                    Bulk discounts available for orders over $200.
                  </p>
                </div>
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
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer bulk discounts?</h3>
              <p className="text-gray-600">Yes! We offer 10% off orders over $100, 15% off orders over $200, and custom pricing for business customers.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for business customers.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How is shipping calculated?</h3>
              <p className="text-gray-600">Shipping is free on orders over $50. For smaller orders, shipping costs $5.99 within the continental US.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel or modify my order?</h3>
              <p className="text-gray-600">Orders can be modified or cancelled within 24 hours of placement. After that, please contact our customer service team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-50 to-earth-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Place Your Order?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your needs and get started with premium African food products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Sales Team
              </button>
              <button className="btn-secondary">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
