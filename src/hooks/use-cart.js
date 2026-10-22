import { useState } from 'react';

/**
 * 장바구니 상태를 관리하는 훅
 *
 * @returns {{ cartItems: Object, cartCount: number, addToCart: function }}
 */
export function useCart() {
  const [cartItems, setCartItems] = useState({});

  const cartCount = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  const addToCart = (menuId) => {
    setCartItems((prev) => ({ ...prev, [menuId]: (prev[menuId] || 0) + 1 }));
  };

  return { cartItems, cartCount, addToCart };
}
