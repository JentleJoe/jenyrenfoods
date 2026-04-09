import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Office',
      content: 'Tom Adigwe Street Off DLA Road, Asaba, Delta State',
      subContent: 'Monday - Saturday: 9:00 AM - 7:00 PM'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call or WhatsApp',
      content: '+234 916 477 8395 | +234 708 247 4369',
      subContent: 'Available on calls and WhatsApp during business hours'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'jennykingsglobal2022@gmail.com',
      subContent: 'We respond within 24 hours'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM',
      subContent: 'Sunday: Closed'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream-50 to-honey-50 py-8 md:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brown-900 mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Have questions about our products? Want to place a bulk order? 
              We&apos;d love to hear from you and help you with all your African food needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center group cursor-default">
                  <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-4 text-honey-600 group-hover:bg-honey-200 group-hover:scale-110 transition-all duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-brown-900 mb-2 group-hover:text-honey-700 transition-colors">{info.title}</h3>
                  <p className="text-brown-600 mb-1">{info.content}</p>
                  <p className="text-sm text-brown-500">{info.subContent}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Direct Contact CTA */}
          <AnimatedSection animation="scale" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cream-50 to-honey-50 rounded-3xl p-8 md:p-12 border border-honey-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
                    Ready to Get in Touch?
                  </h2>
                  <p className="text-brown-600 text-lg">
                    Choose your preferred method to contact us. We&apos;re here to help with all your African food needs!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a 
                    href="tel:+2349164778395"
                    className="bg-honey-500 text-white p-6 rounded-2xl hover:bg-honey-600 hover:scale-105 hover:shadow-lg transition-all duration-300 text-center group"
                    aria-label="Call Jenyrenfoods on +234 916 477 8395"
                  >
                    <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2">Call Jenyrenfoods Sales</h3>
                    <p className="text-sm opacity-90">+234 916 477 8395</p>
                    <p className="text-xs opacity-75 mt-1">Instant response</p>
                  </a>

                  <a 
                    href="https://wa.me/2349164778395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-6 rounded-2xl hover:bg-green-600 hover:scale-105 hover:shadow-lg transition-all duration-300 text-center group"
                    aria-label="Chat with Jenyrenfoods on WhatsApp at +234 916 477 8395"
                  >
                    <FaWhatsapp className="w-8 h-8 mx-auto mb-3 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                    <h3 className="font-semibold text-lg mb-2">Chat on WhatsApp</h3>
                    <p className="text-sm opacity-90">Chat with us</p>
                    <p className="text-xs opacity-75 mt-1">Quick & convenient</p>
                  </a>

                  <a 
                    href="mailto:jennykingsglobal2022@gmail.com"
                    className="bg-brown-500 text-white p-6 rounded-2xl hover:bg-brown-600 hover:scale-105 hover:shadow-lg transition-all duration-300 text-center group"
                    aria-label="Email Jenyrenfoods at jennykingsglobal2022@gmail.com"
                  >
                    <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                    <h3 className="font-semibold text-lg mb-2">Email Jenyrenfoods</h3>
                    <p className="text-sm opacity-90">For detailed inquiries</p>
                    <p className="text-xs opacity-75 mt-1">24h response time</p>
                  </a>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-brown-600 mb-4">
                    <strong>Alternative contact:</strong> <a href="tel:+2347082474369" className="text-honey-600 hover:text-honey-700 font-medium" aria-label="Call Jenyrenfoods alternative number +234 708 247 4369">+234 708 247 4369</a>
                  </p>
                  <p className="text-sm text-brown-500">
                    Business Hours: Monday - Saturday, 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Google Map Section */}
      <AnimatedSection animation="fade-up">
        <section className="section-padding bg-cream-50">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
                Find Us on the Map
              </h2>
              <p className="text-xl text-brown-600">
                Visit our office in Asaba, Delta State for direct inquiries and product pickup.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7893!2d6.7247!3d6.2063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMjIuNyJOIDZwNDMnMjguOSJF!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jenyrenfoods Office Location"
                ></iframe>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-cream-50 to-honey-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="group cursor-default">
                    <h3 className="font-semibold text-brown-900 mb-2 group-hover:text-honey-700 transition-colors">Address</h3>
                    <p className="text-brown-600">Tom Adigwe Street Off DLA Road, Asaba, Delta State</p>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="font-semibold text-brown-900 mb-2 group-hover:text-honey-700 transition-colors">Phone / WhatsApp</h3>
                    <div className="text-brown-600">
                      <p>+234 916 477 8395</p>
                      <p>+234 708 247 4369</p>
                    </div>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="font-semibold text-brown-900 mb-2 group-hover:text-honey-700 transition-colors">Hours</h3>
                    <p className="text-brown-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
