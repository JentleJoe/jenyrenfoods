import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const products = [
    { name: 'ChinChin', href: '#chinchin' },
    { name: 'Plantain Flour', href: '#plantain-flour' },
    { name: 'Beans Flour', href: '#beans-flour' },
    { name: 'Soybean Powder', href: '#soybean-powder' },
    { name: 'Tigernut Powder', href: '#tigernut-powder' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-secondary-800' : 'text-white'
            }`}>Jenyrenfoods</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-secondary-600' 
                : 'text-white hover:text-secondary-200'
            }`}>
              Home
            </a>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-secondary-600' 
                    : 'text-white hover:text-secondary-200'
                }`}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#pricing" className={`font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-secondary-600' 
                : 'text-white hover:text-secondary-200'
            }`}>
              Pricing
            </a>
            <a href="#contact" className={`font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-secondary-600' 
                : 'text-white hover:text-secondary-200'
            }`}>
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden border-t py-4 ${
            isScrolled ? 'border-gray-200 bg-white' : 'border-white/20 bg-white/95 backdrop-blur-md'
          }`}>
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-secondary-600' 
                  : 'text-gray-800 hover:text-secondary-600'
              }`}>
                Home
              </a>
              
              <div>
                <button
                  className={`flex items-center justify-between w-full font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-secondary-600' 
                      : 'text-gray-800 hover:text-secondary-600'
                  }`}
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        className={`block transition-colors ${
                          isScrolled 
                            ? 'text-gray-600 hover:text-secondary-600' 
                            : 'text-gray-700 hover:text-secondary-600'
                        }`}
                        onClick={() => {
                          setIsProductsOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {product.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#pricing" className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-secondary-600' 
                  : 'text-gray-800 hover:text-secondary-600'
              }`}>
                Pricing
              </a>
              <a href="#contact" className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-secondary-600' 
                  : 'text-gray-800 hover:text-secondary-600'
              }`}>
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;