import { Zap } from 'lucide-react';
import ComingSoonPage from './ComingSoonPage';

const BeansFlourPage = () => {
  return (
    <ComingSoonPage
      productName="Beans Flour"
      productDescription="Our beans flour will be a powerhouse of plant-based protein, perfect for making traditional dishes like moi-moi and akara. Rich in nutrients and authentic in taste."
      productIcon={<Zap className="w-12 h-12" />}
      estimatedDate="Q4 2025"
    />
  );
};

export default BeansFlourPage;
