import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import EventCard from '../ui/event-card.jsx';
import SectionTitle from '../ui/section-title.jsx';

const SALE_EVENTS = [
  {
    id: 'anniversary',
    tag: '50% OFF',
    title: '창립 50주년 감사 세일',
    description: '모든 라지 피자 두 번째 판 반값! 50년간 함께해주신 고객님께 감사드립니다.',
    period: '2026.10.01 – 2026.11.30',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=1200&q=80',
  },
  {
    id: 'combo',
    tag: '세트 20% 할인',
    title: '패밀리 콤보 세트',
    description: '라지 피자 + 사이드 + 음료 1.25L 구성으로 온 가족이 함께 즐기세요.',
    period: '상시 진행',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&q=80',
  },
];

/**
 * SaleEventSection 컴포넌트
 * 콘텐츠3: 세일 이벤트 목록
 *
 * Props: 없음
 *
 * Example usage:
 * <SaleEventSection />
 */
function SaleEventSection() {
  return (
    <Box id="sale-event" component="section" sx={ { py: { xs: 8, md: 12 }, scrollMarginTop: { xs: 64, md: 72 } } }>
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <SectionTitle eyebrow="SALE EVENT" title="지금 진행 중인 이벤트" description="놓치면 아쉬운 특별한 혜택을 확인하세요." />
        <Grid container spacing={ 3 }>
          { SALE_EVENTS.map((event) => (
            <Grid key={ event.id } size={ { xs: 12, md: 6 } }>
              <EventCard
                tag={ event.tag }
                title={ event.title }
                description={ event.description }
                period={ event.period }
                image={ event.image }
              />
            </Grid>
          )) }
        </Grid>
      </Container>
    </Box>
  );
}

export default SaleEventSection;
