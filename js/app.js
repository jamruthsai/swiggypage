import { menuController } from './components/menuController.js';

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  menuController.init();
});
