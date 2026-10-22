import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from './logo.jsx';

const NAV_ITEMS = [
  { label: '베스트 메뉴', href: '#best-menu' },
  { label: '브랜드 스토리', href: '#brand-story' },
  { label: '이벤트', href: '#sale-event' },
];

/**
 * Header 컴포넌트
 * 가로형 고정 헤더 (스크롤 시 상단 유지)
 *
 * Props:
 * @param {number} cartCount - 장바구니에 담긴 상품 수량 [Optional, 기본값: 0]
 *
 * Example usage:
 * <Header cartCount={ 3 } />
 */
function Header({ cartCount = 0 }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={ 0 }
      sx={ {
        bgcolor: 'rgba(251, 246, 236, 0.95)',
        backdropFilter: 'blur(8px)',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'secondary.main',
      } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Toolbar disableGutters sx={ { minHeight: { xs: 64, md: 72 }, gap: 2 } }>
          <IconButton
            aria-label="메뉴 열기"
            onClick={ () => setIsDrawerOpen(true) }
            sx={ { display: { xs: 'inline-flex', md: 'none' }, ml: -1 } }
          >
            <MenuIcon />
          </IconButton>

          <Logo />

          <Box component="nav" sx={ { display: { xs: 'none', md: 'flex' }, gap: 1, ml: 4 } }>
            { NAV_ITEMS.map((item) => (
              <Button
                key={ item.href }
                href={ item.href }
                color="inherit"
                sx={ { fontSize: '1rem', fontWeight: 500, px: 2, '&:hover': { color: 'primary.main' } } }
              >
                { item.label }
              </Button>
            )) }
          </Box>

          <Box sx={ { flexGrow: 1 } } />

          <Button
            variant="outlined"
            color="primary"
            sx={ { borderRadius: 999, px: { xs: 2, md: 3 }, display: { xs: 'none', sm: 'inline-flex' } } }
          >
            로그인
          </Button>

          <IconButton aria-label={ `장바구니 ${ cartCount }개` } color="inherit">
            <Badge badgeContent={ cartCount } color="primary" showZero max={ 99 }>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={ isDrawerOpen } onClose={ () => setIsDrawerOpen(false) }>
        <Box sx={ { width: 260, py: 2, bgcolor: 'background.default', height: '100%' } }>
          <Box sx={ { px: 2, pb: 2 } }>
            <Logo />
          </Box>
          <List>
            { NAV_ITEMS.map((item) => (
              <ListItemButton key={ item.href } component="a" href={ item.href } onClick={ () => setIsDrawerOpen(false) }>
                <ListItemText primary={ item.label } />
              </ListItemButton>
            )) }
            <ListItemButton onClick={ () => setIsDrawerOpen(false) }>
              <ListItemText primary="로그인" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
