import { Leaf } from 'lucide-react';
import ComingSoonPage from './ComingSoonPage';

const PlantainFlourPage = () => {
  return (
    <ComingSoonPage
      productName="Plantain Flour"
      productDescription="Made from carefully selected green plantains, our flour will be a healthy gluten-free alternative packed with essential nutrients. Perfect for traditional recipes and modern baking."
      productIcon={<Leaf className="w-12 h-12" />}
      estimatedDate="Q3 2025"
    />
  );
};

export default PlantainFlourPage;
