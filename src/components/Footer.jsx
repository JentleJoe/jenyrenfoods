import { Facebook, Instagram, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

// Official WhatsApp Logo Icon Component
const WhatsAppIcon = ({ className = "" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12.012 2C6.48 2 2.002 6.478 2.002 12.011c0 1.77.459 3.527 1.334 5.068L2 22l5.06-1.327a9.958 9.958 0 0 0 4.952 1.316c5.532 0 10.01-4.478 10.01-10.011C22.022 6.478 17.544 2 12.012 2zm5.524 14.26c-.234.658-.896 1.207-1.459 1.352-.565.146-.88.146-2.542-.534-1.662-.68-4.055-3.101-5.717-5.419-.83-1.158-1.345-2.543-1.345-3.952 0-1.409.747-2.101 1.013-2.388.266-.288.581-.36.774-.36.193 0 .387.007.555.014.178.007.415-.068.652.497l.899 2.201c.096.193.161.415.032.652-.129.236-.193.385-.385.607-.193.222-.406.497-.58.668-.193.193-.394.401-.17.787.225.386 1.001 1.648 2.146 2.67 1.473 1.314 2.715 1.72 3.101 1.911.387.193.612.161.836-.096.225-.257.966-1.127 1.224-1.514.257-.386.514-.322.868-.193.354.129 2.24 1.056 2.627 1.249.387.193.645.289.741.451.096.161.096.934-.138 1.592z" 
      fill="#25D366"
    />
  </svg>
);

const Footer = () => {
  const products = [
    { name: 'ChinChin', href: '/products/chinchin' },
    { name: 'Plantain Flour', href: '/products/plantain-flour' },
    { name: 'Beans Flour', href: '/products/beans-flour' },
    { name: 'Soybean Powder', href: '/products/soybean-powder' },
    { name: 'Tigernut Powder', href: '/products/tigernut-powder' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/share/1LRK9jrtDR/?mibextid=LQQJ4d', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.facebook.com/share/1LRK9jrtDR/?mibextid=LQQJ4d', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Jenyrenfoods</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium African food products crafted with tradition and care. 
              Bringing authentic flavors to your table since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary-600 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-gray-300 hover:text-secondary-400 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Tom Adigwe Street Off DLA Road, Asaba, Delta State
                </span>
              </div>
              
              {/* Phone Numbers */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <a href="tel:+2349164778395" className="text-gray-300 hover:text-secondary-400 transition-colors">
                        +234 916 477 8395
                      </a>
                      <a 
                        href="https://wa.me/2349164778395" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity ml-2"
                        title="Send WhatsApp message"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a href="tel:+2347082474369" className="text-gray-300 hover:text-secondary-400 transition-colors">
                        +234 708 247 4369
                      </a>
                      <a 
                        href="https://wa.me/2347082474369" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity ml-2"
                        title="Send WhatsApp message"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <a
                  href="mailto:jennykingsglobal2022@gmail.com"
                  className="text-gray-300 hover:text-secondary-400 transition-colors"
                >
                  jennykingsglobal2022@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Jenyrenfoods. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-secondary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;