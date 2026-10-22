import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuCard from '../ui/menu-card.jsx';
import SectionTitle from '../ui/section-title.jsx';

const BEST_MENUS = [
  {
    id: 'pepperoni',
    name: '클래식 페퍼로니',
    description: '50년 전 첫 메뉴 그대로. 바삭하게 구운 페퍼로니가 가득.',
    price: 21900,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80',
    badge: 'BEST 1',
  },
  {
    id: 'margherita',
    name: '화덕 마르게리타',
    description: '생모짜렐라와 바질, 산 마르자노 토마토의 깔끔한 조화.',
    price: 19900,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    badge: 'BEST 2',
  },
  {
    id: 'bbq-chicken',
    name: '스모크 바비큐 치킨',
    description: '훈연 바비큐 소스에 부드러운 치킨과 적양파를 듬뿍.',
    price: 24900,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    badge: 'BEST 3',
  },
  {
    id: 'garden-veggie',
    name: '가든 베지터블',
    description: '방울토마토, 올리브, 허브를 올린 산뜻한 채소 피자.',
    price: 20900,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80',
    badge: 'NEW',
  },
];

/**
 * BestMenuSection 컴포넌트
 * 콘텐츠1: 베스트 메뉴 목록
 *
 * Props:
 * @param {function} onAddToCart - 메뉴 담기 시 메뉴 id를 인자로 실행할 함수 [Required]
 *
 * Example usage:
 * <BestMenuSection onAddToCart={ (menuId) => addToCart(menuId) } />
 */
function BestMenuSection({ onAddToCart }) {
  return (
    <Box id="best-menu" component="section" sx={ { py: { xs: 8, md: 12 }, scrollMarginTop: { xs: 64, md: 72 } } }>
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <SectionTitle
          eyebrow="BEST MENU"
          title="오십년피자 베스트 메뉴"
          description="반세기 동안 가장 많이 사랑받은 대표 피자를 만나보세요."
        />
        <Grid container spacing={ 3 }>
          { BEST_MENUS.map((menu) => (
            <Grid key={ menu.id } size={ { xs: 12, sm: 6, md: 3 } }>
              <MenuCard
                name={ menu.name }
                description={ menu.description }
                price={ menu.price }
                image={ menu.image }
                badge={ menu.badge }
                onAddToCart={ () => onAddToCart(menu.id) }
              />
            </Grid>
          )) }
        </Grid>
      </Container>
    </Box>
  );
}

export default BestMenuSection;
