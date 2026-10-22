import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * SectionTitle 컴포넌트
 * 각 콘텐츠 섹션 상단의 제목 영역
 *
 * Props:
 * @param {string} eyebrow - 제목 위 작은 영문 라벨 [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 제목 아래 설명 문구 [Optional]
 * @param {boolean} isCentered - 가운데 정렬 여부 [Optional, 기본값: true]
 *
 * Example usage:
 * <SectionTitle eyebrow="BEST MENU" title="베스트 메뉴" description="가장 사랑받는 피자" />
 */
function SectionTitle({ eyebrow, title, description, isCentered = true }) {
  return (
    <Box sx={ { textAlign: isCentered ? 'center' : 'left', mb: { xs: 4, md: 6 } } }>
      <Box component="span" sx={ { color: 'primary.main', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.9rem' } }>
        { eyebrow }
      </Box>
      <Typography variant="h2" sx={ { mt: 1, fontSize: { xs: '1.75rem', md: '2.25rem' } } }>
        { title }
      </Typography>
      { description && (
        <Typography sx={ { mt: 1.5, color: 'text.secondary' } }>
          { description }
        </Typography>
      ) }
    </Box>
  );
}

export default SectionTitle;
