import { Clock, Bell, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoonPage = ({ productName, productDescription, estimatedDate = "Q2 2025" }) => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-cream-50 to-honey-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-8 md:py-16">
          {/* Back Link */}
          <div className="mb-8">
            <Link 
              to="/products" 
              className="inline-flex items-center text-brown-600 hover:text-brown-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Link>
          </div>

          {/* Available Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-honey-100 rounded-full text-honey-800 font-medium mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Available Soon
          </div>

          {/* Product Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-brown-900 mb-6">
            {productName}
          </h1>

          {/* Description */}
          <p className="text-xl text-brown-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {productDescription}
          </p>

          {/* Status Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-brown-900 mb-2">
                  Currently in Production
                </h2>
                <p className="text-brown-600 mb-4">
                  We&apos;re carefully preparing this premium product for you. Our team is 
                  perfecting the processing methods and sourcing the finest ingredients to ensure 
                  exceptional quality and freshness.
                </p>
                <div className="text-honey-600 font-medium">
                  Expected Launch: {estimatedDate}
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-honey-100 to-cream-100 rounded-full flex items-center justify-center">
                  <Clock className="w-16 h-16 text-honey-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Notify Me Section */}
          <div className="bg-gradient-to-br from-brown-500 to-brown-700 rounded-3xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">Get Notified When Available</h3>
            </div>
            <p className="mb-6 opacity-95">
              Be the first to know when {productName} is ready for purchase. 
              Contact us to join our priority notification list!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+2349164778395"
                className="bg-cream-50 text-brown-700 px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-brown-800 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Call: +234 916 477 8395
              </a>
              <a 
                href="tel:+2347082474369"
                className="bg-cream-50 text-brown-700 px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-brown-800 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Call: +234 708 247 4369
              </a>
              <a 
                href="mailto:jennykingsglobal2022@gmail.com"
                className="border-2 border-cream-100 text-cream-50 px-6 py-3 rounded-lg font-medium hover:bg-cream-50 hover:text-brown-700 transition-colors inline-flex items-center justify-center"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Alternative Products */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-brown-900 mb-4">
              Meanwhile, Try Our Available Product
            </h3>
            <Link 
              to="/products/chinchin" 
              className="inline-flex items-center px-6 py-3 bg-honey-600 text-white rounded-lg hover:bg-honey-700 transition-colors"
            >
              Explore Premium ChinChin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
