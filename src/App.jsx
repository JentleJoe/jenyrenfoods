import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import ChinChinPage from './pages/ChinChinPage';
import PlantainFlourPage from './pages/PlantainFlourPage';
import BeansFlourPage from './pages/BeansFlourPage';
import SoybeanPowderPage from './pages/SoybeanPowderPage';
import TigernutPowderPage from './pages/TigernutPowderPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/chinchin" element={<ChinChinPage />} />
        <Route path="/products/plantain-flour" element={<PlantainFlourPage />} />
        <Route path="/products/beans-flour" element={<BeansFlourPage />} />
        <Route path="/products/soybean-powder" element={<SoybeanPowderPage />} />
        <Route path="/products/tigernut-powder" element={<TigernutPowderPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;