import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <About />
      
      {/* Additional About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Journey
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Founded with a passion for preserving African culinary traditions, Jenyrenfoods 
                began as a small family business with a big dream: to make authentic African 
                food products accessible to everyone, while maintaining the highest quality standards.
              </p>
              
              <p className="mb-6">
                Our founders recognized that many traditional food processing methods were being 
                lost to modernization. They set out to bridge this gap by combining time-tested 
                techniques with modern food safety standards, creating products that honor our 
                heritage while meeting contemporary nutritional needs.
              </p>
              
              <p className="mb-6">
                Today, we continue to grow while staying true to our core values: quality, 
                authenticity, and community. Every product we create tells a story of tradition, 
                innovation, and the love of good food.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
