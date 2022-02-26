import { buildCart } from './cartHelper.js';

const cartView = {
  init(cartItems) {
    this.render(cartItems);
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
        console.log(event.target);
      });
  },
  handleEvent(event) {
    console.log(event.target);
  },
};

export { cartView };
