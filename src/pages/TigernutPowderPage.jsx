import { Shield } from 'lucide-react';
import ComingSoonPage from './ComingSoonPage';

const TigernutPowderPage = () => {
  return (
    <ComingSoonPage
      productName="Tigernut Powder"
      productDescription="Ground from premium tigernuts, this powder will be naturally sweet and packed with fiber, making it perfect for healthy beverages and snacks. An ancient superfood for modern nutrition."
      productIcon={<Shield className="w-12 h-12" />}
      estimatedDate="Q3 2025"
    />
  );
};

export default TigernutPowderPage;
