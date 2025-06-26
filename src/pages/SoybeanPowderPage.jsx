import { Heart } from 'lucide-react';
import ComingSoonPage from './ComingSoonPage';

const SoybeanPowderPage = () => {
  return (
    <ComingSoonPage
      productName="Soybean Powder"
      productDescription="Premium soybean powder that will provide all essential amino acids, perfect for boosting the nutritional value of your meals. Heart-healthy and versatile for various uses."
      productIcon={<Heart className="w-12 h-12" />}
      estimatedDate="Q4 2025"
    />
  );
};

export default SoybeanPowderPage;
