import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-earth-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-secondary-600 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-medium rounded-lg hover:bg-secondary-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-secondary-600 text-secondary-600 font-medium rounded-lg hover:bg-secondary-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
