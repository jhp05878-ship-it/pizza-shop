import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { formatPrice } from '../../utils/format-price.js';

/**
 * MenuCard 컴포넌트
 * 피자 메뉴 1개를 카드 형태로 보여준다.
 *
 * Props:
 * @param {string} name - 메뉴 이름 [Required]
 * @param {string} description - 메뉴 설명 [Required]
 * @param {number} price - 가격(원) [Required]
 * @param {string} image - 메뉴 이미지 URL [Required]
 * @param {string} badge - 이미지 위 배지 문구 [Optional]
 * @param {function} onAddToCart - 장바구니 담기 클릭 시 실행할 함수 [Optional]
 *
 * Example usage:
 * <MenuCard name="페퍼로니" description="..." price={ 23900 } image={ url } onAddToCart={ handleAdd } />
 */
function MenuCard({ name, description, price, image, badge, onAddToCart }) {
  return (
    <Card
      elevation={ 0 }
      sx={ {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'secondary.main',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 28px rgba(62, 44, 30, 0.12)' },
      } }
    >
      <Box sx={ { position: 'relative' } }>
        <CardMedia component="img" image={ image } alt={ name } sx={ { aspectRatio: '4 / 3', objectFit: 'cover' } } />
        { badge && (
          <Chip label={ badge } color="primary" size="small" sx={ { position: 'absolute', top: 12, left: 12, fontWeight: 700 } } />
        ) }
      </Box>
      <CardContent sx={ { flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1, p: 2.5 } }>
        <Typography component="h3" sx={ { fontSize: '1.25rem', fontWeight: 700 } }>
          { name }
        </Typography>
        <Typography sx={ { color: 'text.secondary', fontSize: '1rem', flexGrow: 1 } }>
          { description }
        </Typography>
        <Box sx={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 } }>
          <Box component="span" sx={ { fontSize: '1.25rem', fontWeight: 900, color: 'primary.main' } }>
            { formatPrice(price) }
          </Box>
          <Button
            variant="contained"
            size="small"
            startIcon={ <AddShoppingCartIcon /> }
            onClick={ onAddToCart }
            sx={ { borderRadius: 999, px: 2 } }
          >
            담기
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MenuCard;
