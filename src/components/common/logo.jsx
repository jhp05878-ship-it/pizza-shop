import Box from '@mui/material/Box';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

/**
 * Logo 컴포넌트
 *
 * Props:
 * @param {boolean} isLight - 어두운 배경용 밝은 로고 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <Logo />
 * <Logo isLight />
 */
function Logo({ isLight = false }) {
  return (
    <Box
      component="a"
      href="#top"
      aria-label="오십년피자 홈"
      sx={ {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        color: isLight ? 'common.white' : 'text.primary',
        textDecoration: 'none',
      } }
    >
      <Box
        sx={ {
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <LocalPizzaIcon />
      </Box>
      <Box sx={ { display: 'flex', flexDirection: 'column', lineHeight: 1 } }>
        <Box component="span" sx={ { fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em' } }>
          오십년피자
        </Box>
        <Box component="span" sx={ { fontSize: '0.7rem', fontWeight: 500, color: 'primary.main', letterSpacing: '0.15em' } }>
          SINCE 1976
        </Box>
      </Box>
    </Box>
  );
}

export default Logo;
