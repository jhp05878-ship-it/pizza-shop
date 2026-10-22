import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Logo from './logo.jsx';

const COMPANY_INFO = [
  { label: '회사명', value: '(주)오십년피자' },
  { label: '대표자', value: '김정성' },
  { label: '사업자등록번호', value: '123-45-67890' },
  { label: '주소', value: '서울특별시 중구 세종대로 50, 오십년빌딩 1층' },
];

const SUPPORT_INFO = [
  { label: '고객센터', value: '1588-1976' },
  { label: '운영시간', value: '매일 11:00 – 22:00 (연중무휴)' },
];

/**
 * Footer 컴포넌트
 * 회사 정보와 고객센터 정보를 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <Footer />
 */
function Footer() {
  const renderInfoList = (items) => (
    <Box component="dl" sx={ { m: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, rowGap: 1 } }>
      { items.map((item) => (
        <Box key={ item.label } sx={ { display: 'contents' } }>
          <Box component="dt" sx={ { color: 'secondary.dark', fontSize: '0.95rem' } }>{ item.label }</Box>
          <Box component="dd" sx={ { m: 0, fontSize: '0.95rem' } }>{ item.value }</Box>
        </Box>
      )) }
    </Box>
  );

  return (
    <Box component="footer" sx={ { bgcolor: '#2E2016', color: 'secondary.light', py: { xs: 5, md: 7 }, mt: 'auto' } }>
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Grid container spacing={ { xs: 4, md: 6 } }>
          <Grid size={ { xs: 12, md: 4 } }>
            <Logo isLight />
            <Box sx={ { mt: 2, fontSize: '0.95rem', color: 'secondary.dark', lineHeight: 1.6 } }>
              50년의 정성, 한 판에 담은 변함없는 맛
            </Box>
          </Grid>
          <Grid size={ { xs: 12, md: 5 } }>
            { renderInfoList(COMPANY_INFO) }
          </Grid>
          <Grid size={ { xs: 12, md: 3 } }>
            { renderInfoList(SUPPORT_INFO) }
          </Grid>
        </Grid>
        <Divider sx={ { my: 4, borderColor: 'rgba(233, 216, 180, 0.2)' } } />
        <Box sx={ { fontSize: '0.85rem', color: 'secondary.dark' } }>
          © 2026 오십년피자. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
