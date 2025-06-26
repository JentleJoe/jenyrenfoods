import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Wheat } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const products = [
    { name: 'ChinChin', href: '/products/chinchin' },
    { name: 'Plantain Flour', href: '/products/plantain-flour' },
    { name: 'Beans Flour', href: '/products/beans-flour' },
    { name: 'Soybean Powder', href: '/products/soybean-powder' },
    { name: 'Tigernut Powder', href: '/products/tigernut-powder' },
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
        ? 'bg-cream-50 shadow-lg border-b border-cream-300' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-honey-gradient rounded-full flex items-center justify-center shadow-md">
              <Wheat className="w-6 h-6 text-brown-800" />
            </div>
            <Link to="/" className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-brown-700' 
                : 'text-brown-800'
            }`}>Jenyrenfoods</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-all duration-300 ${
              isScrolled 
                ? 'text-brown-600 hover:text-honey-600' 
                : 'text-brown-700 hover:text-honey-600'
            } ${location.pathname === '/' ? 'text-honey-600' : ''}`}>
              Home
            </Link>
            
            <Link to="/pricing" className={`font-medium transition-all duration-300 ${
              isScrolled 
                ? 'text-brown-600 hover:text-honey-600' 
                : 'text-brown-700 hover:text-honey-600'
            } ${location.pathname === '/pricing' ? 'text-honey-600' : ''}`}>
              Pricing
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center space-x-1 font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-brown-600 hover:text-honey-600' 
                    : 'text-brown-700 hover:text-honey-600'
                } ${location.pathname === '/products' ? 'text-honey-600' : ''}`}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-cream-50 rounded-lg shadow-lg border border-cream-300 py-2">
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-brown-700 hover:bg-honey-100 hover:text-brown-800 transition-colors font-medium"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    All Products
                  </Link>
                  <div className="border-t border-cream-300 my-1"></div>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block px-4 py-2 text-brown-600 hover:bg-honey-100 hover:text-brown-800 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/contact" className={`font-medium transition-all duration-300 ${
              isScrolled 
                ? 'text-brown-600 hover:text-honey-600' 
                : 'text-brown-700 hover:text-honey-600'
            } ${location.pathname === '/contact' ? 'text-honey-600' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 transition-all duration-300 ${
                isScrolled 
                  ? 'text-brown-800' 
                  : 'text-brown-700'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-all duration-300 ${
                isScrolled 
                  ? 'text-brown-800' 
                  : 'text-brown-700'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden border-t py-4 ${
            isScrolled 
              ? 'border-cream-300 bg-cream-50' 
              : 'border-cream-300/50 bg-cream-50/95 backdrop-blur-md shadow-lg'
          }`}>
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className={`font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-brown-600 hover:text-honey-600' 
                  : 'text-brown-700 hover:text-honey-600'
              } ${location.pathname === '/' ? 'text-honey-600' : ''}`}
              onClick={() => setIsOpen(false)}>
                Home
              </Link>
              
              <Link to="/pricing" className={`font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-brown-600 hover:text-honey-600' 
                  : 'text-brown-700 hover:text-honey-600'
              } ${location.pathname === '/pricing' ? 'text-honey-600' : ''}`}
              onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              
              <div>
                <button
                  className={`flex items-center justify-between w-full font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-brown-600 hover:text-honey-600' 
                      : 'text-brown-700 hover:text-honey-600'
                  } ${location.pathname === '/products' ? 'text-honey-600' : ''}`}
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      to="/products"
                      className={`block transition-all duration-300 font-medium ${
                        isScrolled 
                          ? 'text-brown-500 hover:text-honey-600' 
                          : 'text-brown-600 hover:text-honey-600'
                      }`}
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      All Products
                    </Link>
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className={`block transition-all duration-300 ${
                          isScrolled 
                            ? 'text-brown-500 hover:text-honey-600' 
                            : 'text-brown-600 hover:text-honey-600'
                        }`}
                        onClick={() => {
                          setIsProductsOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/contact" className={`font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-brown-600 hover:text-honey-600' 
                  : 'text-brown-700 hover:text-honey-600'
              } ${location.pathname === '/contact' ? 'text-honey-600' : ''}`}
              onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;