import { useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Footer from '../components/common/footer.jsx';
import Header from '../components/common/header.jsx';
import BestMenuSection from '../components/landing/best-menu-section.jsx';
import BrandStorySection from '../components/landing/brand-story-section.jsx';
import HeroBanner from '../components/landing/hero-banner.jsx';
import SaleEventSection from '../components/landing/sale-event-section.jsx';
import { useCart } from '../hooks/use-cart.js';

/**
 * HomePage 컴포넌트
 * 헤더 / 배너 / 베스트 메뉴 / 브랜드 스토리 / 세일 이벤트 / 푸터로 구성된 메인 페이지
 *
 * Props: 없음
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  const { cartCount, addToCart } = useCart();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleAddToCart = (menuId) => {
    addToCart(menuId);
    setIsSnackbarOpen(true);
  };

  return (
    <>
      <Header cartCount={ cartCount } />
      <Box component="main" sx={ { width: '100%', flexGrow: 1 } }>
        <HeroBanner />
        <BestMenuSection onAddToCart={ handleAddToCart } />
        <BrandStorySection />
        <SaleEventSection />
      </Box>
      <Footer />
      <Snackbar
        open={ isSnackbarOpen }
        autoHideDuration={ 2000 }
        onClose={ () => setIsSnackbarOpen(false) }
        message="장바구니에 담았어요 🍕"
        anchorOrigin={ { vertical: 'bottom', horizontal: 'center' } }
      />
    </>
  );
}

export default HomePage;
