import { buildCart } from './cartHelper.js';

const cartView = {
  init(cartItems) {
    this.render(cartItems);
  },
  render(cartItems) {
    let cart = buildCart(cartItems);
    document.querySelector('.cart').innerHTML = cart;
  },
};

export { cartView };
