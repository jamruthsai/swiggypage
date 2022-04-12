import { menuController } from './components/menuList/menuController.js';
import { cartController } from './components/cartItems/cartController.js';

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  menuController.init();
  cartController.init();
});
