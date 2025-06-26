import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'Home Chef',
      text: 'Jenyrenfoods has transformed my cooking! Their plantain flour is incredibly fresh and makes the most delicious fufu. The quality is consistently excellent.',
      rating: 5
    },
    {
      name: 'Kemi Adeleke',
      role: 'Restaurant Owner',
      text: 'As a restaurant owner, I need reliable suppliers. Jenyrenfoods delivers premium quality products on time, every time. Their beans flour is exceptional.',
      rating: 5
    },
    {
      name: 'David Ibeabuchi',
      role: 'Fitness Enthusiast',
      text: 'The soybean powder is perfect for my protein needs. It\'s pure, natural, and mixes well with my smoothies. Great for maintaining a healthy lifestyle.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-honey-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-honey-400 text-honey-400" />
                ))}
              </div>
              
              <p className="text-brown-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center space-x-3">
                <div>
                  <h4 className="font-semibold text-brown-900">{testimonial.name}</h4>
                  <p className="text-sm text-brown-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-brown-600 mb-6">
            Join thousands of satisfied customers who trust Jenyrenfoods
          </p>
          <button className="btn-primary">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;