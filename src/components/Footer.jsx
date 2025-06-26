import { Facebook, Instagram, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  const products = [
    'ChinChin',
    'Plantain Flour',
    'Beans Flour',
    'Soybean Powder',
    'Tigernut Powder'
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
                <li key={product}>
                  <a
                    href={`#${product.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-secondary-400 transition-colors"
                  >
                    {product}
                  </a>
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
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">+2349164778395</span>
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