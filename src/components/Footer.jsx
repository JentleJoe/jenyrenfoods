import { Facebook, Instagram, Mail, Phone, MapPin, Wheat } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const products = [
    { name: 'ChinChin', href: '/products/chinchin' },
    { name: 'Plantain Flour', href: '/products/plantain-flour' },
    { name: 'Beans Flour', href: '/products/beans-flour' },
    { name: 'Soybean Powder', href: '/products/soybean-powder' },
    { name: 'Tigernut Powder', href: '/products/tigernut-powder' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/share/1LRK9jrtDR/?mibextid=LQQJ4d', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.facebook.com/share/1LRK9jrtDR/?mibextid=LQQJ4d', name: 'Instagram' }
  ];

  return (
    <footer className="bg-brown-gradient text-cream-100">
      <div className="container-custom px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-honey-gradient rounded-full flex items-center justify-center shadow-lg">
                <Wheat className="w-6 h-6 text-brown-800" />
              </div>
              <span className="text-2xl font-bold text-cream-50">Jenyrenfoods</span>
            </div>
            <p className="text-cream-200 mb-6 leading-relaxed">
              Premium African food products crafted with tradition and care. 
              Bringing authentic flavors to your table since 2023.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brown-600 rounded-full flex items-center justify-center hover:bg-honey-600 transition-colors shadow-md"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="text-cream-100">{social.icon}</span>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cream-50">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-cream-200 hover:text-honey-300 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cream-50">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream-200 hover:text-honey-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cream-50">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-honey-400 flex-shrink-0" />
                <span className="text-cream-200">
                  Tom Adigwe Street Off DLA Road, Asaba, Delta State
                </span>
              </div>
              
              {/* Phone Numbers */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-honey-400 flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <a href="tel:+2349164778395" className="text-cream-200 hover:text-honey-300 transition-colors" aria-label="Call Jenyrenfoods on +234 916 477 8395">
                        +234 916 477 8395
                      </a>
                      <a 
                        href="https://wa.me/2349164778395" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity ml-2 inline-flex items-center gap-1 text-cream-200 hover:text-honey-300"
                        title="Send WhatsApp message to +234 916 477 8395"
                        aria-label="Send WhatsApp message to Jenyrenfoods on +234 916 477 8395"
                      >
                        <FaWhatsapp className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a href="tel:+2347082474369" className="text-cream-200 hover:text-honey-300 transition-colors" aria-label="Call Jenyrenfoods on +234 708 247 4369">
                        +234 708 247 4369
                      </a>
                      <a 
                        href="https://wa.me/2347082474369" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity ml-2 inline-flex items-center gap-1 text-cream-200 hover:text-honey-300"
                        title="Send WhatsApp message to +234 708 247 4369"
                        aria-label="Send WhatsApp message to Jenyrenfoods on +234 708 247 4369"
                      >
                        <FaWhatsapp className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-honey-400 flex-shrink-0" />
                <a
                  href="mailto:jennykingsglobal2022@gmail.com"
                  className="text-cream-200 hover:text-honey-300 transition-colors"
                  aria-label="Email Jenyrenfoods at jennykingsglobal2022@gmail.com"
                >
                  jennykingsglobal2022@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-brown-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-300 text-sm">
              © 2025 Jenyrenfoods. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://joshuaoseghale.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-honey-300 text-sm transition-colors"
              >
                Built by Joshua Oseghale
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
