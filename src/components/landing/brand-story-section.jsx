import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SectionTitle from '../ui/section-title.jsx';

const STORY_IMAGE = 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=1000&q=80';

const STATS = [
  { value: '50년', label: '변함없는 전통' },
  { value: '120곳', label: '전국 매장' },
  { value: '매일', label: '직접 반죽하는 도우' },
];

const HISTORY = [
  { year: '1976', text: '서울 을지로 작은 화덕에서 첫 피자를 굽다' },
  { year: '1998', text: '비법 토마토 소스 레시피 완성' },
  { year: '2026', text: '창립 50주년, 처음의 맛을 그대로' },
];

/**
 * BrandStorySection 컴포넌트
 * 콘텐츠2: 50년 전통의 브랜드 스토리
 *
 * Props: 없음
 *
 * Example usage:
 * <BrandStorySection />
 */
function BrandStorySection() {
  return (
    <Box
      id="brand-story"
      component="section"
      sx={ { py: { xs: 8, md: 12 }, bgcolor: 'secondary.light', scrollMarginTop: { xs: 64, md: 72 } } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Grid container spacing={ { xs: 5, md: 8 } } sx={ { alignItems: 'center' } }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Box
              component="img"
              src={ STORY_IMAGE }
              alt="나무 도마 위에 놓인 갓 구운 피자"
              sx={ {
                width: '100%',
                aspectRatio: { xs: '4 / 3', md: '4 / 5' },
                objectFit: 'cover',
                borderRadius: 4,
                display: 'block',
                boxShadow: '0 20px 40px rgba(62, 44, 30, 0.15)',
              } }
            />
          </Grid>
          <Grid size={ { xs: 12, md: 6 } }>
            <SectionTitle eyebrow="BRAND STORY" title="1976년, 작은 화덕에서 시작된 이야기" isCentered={ false } />
            <Typography sx={ { color: 'text.secondary', wordBreak: 'keep-all', mt: { xs: -2, md: -3 } } }>
              창업주가 직접 장작을 지펴 구운 첫 피자 한 판. 그날의 정성을 잊지 않기 위해 우리는 지금도
              매일 아침 도우를 손으로 반죽하고, 소스는 매장에서 직접 끓입니다. 유행은 바뀌어도 맛은
              바뀌지 않도록, 세 세대에 걸쳐 같은 레시피를 지켜왔습니다.
            </Typography>

            <Box component="ol" sx={ { listStyle: 'none', p: 0, m: 0, mt: 4, display: 'flex', flexDirection: 'column', gap: 2 } }>
              { HISTORY.map((item) => (
                <Box component="li" key={ item.year } sx={ { display: 'flex', gap: 2, alignItems: 'baseline' } }>
                  <Box component="span" sx={ { color: 'primary.main', fontWeight: 900, fontSize: '1.1rem', minWidth: 52 } }>
                    { item.year }
                  </Box>
                  <Box component="span" sx={ { fontSize: '1rem' } }>{ item.text }</Box>
                </Box>
              )) }
            </Box>

            <Grid container spacing={ 2 } sx={ { mt: 5 } }>
              { STATS.map((stat) => (
                <Grid key={ stat.label } size={ { xs: 4 } }>
                  <Box sx={ { bgcolor: 'background.paper', borderRadius: 3, py: 2.5, px: 1, textAlign: 'center' } }>
                    <Box sx={ { fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 900, color: 'primary.main' } }>
                      { stat.value }
                    </Box>
                    <Box sx={ { fontSize: { xs: '0.8rem', md: '0.9rem' }, color: 'text.secondary', mt: 0.5 } }>
                      { stat.label }
                    </Box>
                  </Box>
                </Grid>
              )) }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BrandStorySection;
