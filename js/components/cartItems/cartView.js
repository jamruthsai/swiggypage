import { buildCart } from './cartHelper.js';
import { cartController } from './cartController.js';
const cartView = {
  init() {
    this.initListeners();
  },
  render(cartItems) {
    let cart = buildCart(cartItems);
    document.querySelector('.cart').innerHTML = cart;
  },
  initListeners() {
    document
      .getElementsByClassName('cart')[0]
      .addEventListener('click', (event) => {
        cartController.handleEvent(event);
      });
  },
};

export { cartView };
