import { createTheme } from '@mui/material/styles';

/**
 * 오십년피자 브랜드 테마
 * - 주요 색상: 주황색(primary) / 베이지색(secondary, background)
 * - 폰트: Noto Sans KR, 기본 문구 18px
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#E8711C',
      dark: '#C25A0F',
      light: '#F4A261',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E9D8B4',
      light: '#F5EBD7',
      dark: '#CDB88C',
      contrastText: '#3E2C1E',
    },
    background: {
      default: '#FBF6EC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3E2C1E',
      secondary: '#6F5B4A',
    },
  },
  typography: {
    fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
    body1: {
      fontSize: '18px',
      lineHeight: 1.6,
    },
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

export default theme;
