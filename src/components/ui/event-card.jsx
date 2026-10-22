import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 * EventCard 컴포넌트
 * 세일 이벤트 1개를 이미지 배경 카드로 보여준다.
 *
 * Props:
 * @param {string} tag - 할인율 등 강조 라벨 [Required]
 * @param {string} title - 이벤트 제목 [Required]
 * @param {string} description - 이벤트 설명 [Required]
 * @param {string} period - 이벤트 기간 [Required]
 * @param {string} image - 배경 이미지 URL [Required]
 *
 * Example usage:
 * <EventCard tag="30% OFF" title="화요일 반값" description="..." period="매주 화요일" image={ url } />
 */
function EventCard({ tag, title, description, period, image }) {
  return (
    <Box
      component="article"
      sx={ {
        position: 'relative',
        height: '100%',
        minHeight: { xs: 280, md: 340 },
        borderRadius: 4,
        overflow: 'hidden',
        color: 'common.white',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundImage: `linear-gradient(180deg, rgba(46, 32, 22, 0.1) 0%, rgba(46, 32, 22, 0.85) 75%), url(${ image })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } }
    >
      <Box sx={ { p: { xs: 3, md: 4 }, width: '100%' } }>
        <Box
          component="span"
          sx={ {
            display: 'inline-block',
            bgcolor: 'primary.main',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontWeight: 900,
            fontSize: '1rem',
          } }
        >
          { tag }
        </Box>
        <Typography component="h3" sx={ { mt: 1.5, fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700 } }>
          { title }
        </Typography>
        <Typography sx={ { mt: 1, opacity: 0.9 } }>
          { description }
        </Typography>
        <Box sx={ { mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' } }>
          <Box component="span" sx={ { fontSize: '0.95rem', color: 'secondary.light' } }>
            { period }
          </Box>
          <Button variant="contained" href="#best-menu" sx={ { borderRadius: 999, px: 3 } }>
            주문하기
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EventCard;
