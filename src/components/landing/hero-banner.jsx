import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80';

/**
 * HeroBanner 컴포넌트
 * 메인 광고 문구를 보여주는 메인 배너 (48px, bold)
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroBanner />
 */
function HeroBanner() {
  return (
    <Box
      id="top"
      component="section"
      sx={ {
        width: '100%',
        minHeight: { xs: 480, md: 600 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'common.white',
        backgroundImage: `linear-gradient(90deg, rgba(46, 32, 22, 0.88) 0%, rgba(46, 32, 22, 0.55) 55%, rgba(46, 32, 22, 0.2) 100%), url(${ HERO_IMAGE })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 }, py: { xs: 8, md: 10 } } }>
        <Box sx={ { maxWidth: 640 } }>
          <Box
            component="span"
            sx={ {
              display: 'inline-block',
              border: '1px solid',
              borderColor: 'primary.light',
              color: 'primary.light',
              borderRadius: 999,
              px: 2,
              py: 0.5,
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
            } }
          >
            SINCE 1976 · 50년 전통
          </Box>
          <Typography
            variant="h1"
            sx={ { mt: 3, fontSize: { xs: '2rem', md: '48px' }, fontWeight: 700, wordBreak: 'keep-all' } }
          >
            50년의 정성,
            <br />
            한 판에 담은 <Box component="span" sx={ { color: 'primary.light' } }>변함없는 맛</Box>
          </Typography>
          <Typography sx={ { mt: 3, color: 'secondary.light', wordBreak: 'keep-all' } }>
            매일 아침 직접 반죽한 도우와 엄선한 재료로, 1976년 첫 화덕의 맛을 그대로 지켜갑니다.
          </Typography>
          <Box sx={ { mt: 5, display: 'flex', gap: 2, flexWrap: 'wrap' } }>
            <Button variant="contained" size="large" href="#best-menu" sx={ { borderRadius: 999, px: 4, py: 1.5, fontSize: '1.05rem' } }>
              지금 주문하기
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#sale-event"
              sx={ {
                borderRadius: 999,
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                color: 'common.white',
                borderColor: 'rgba(255, 255, 255, 0.6)',
                '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255, 255, 255, 0.08)' },
              } }
            >
              이벤트 보기
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroBanner;
