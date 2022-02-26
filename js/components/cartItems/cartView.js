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
        this.handleEvent(event);
      });
  },
  handleEvent(event) {
    let dishId = event.target.parentElement.id;
    let operation = event.target.className;
    console.log(dishId, operation);
    let dish = cartController.getDish(dishId);
    if (operation === 'increase') {
      cartController.addToCart(dish);
    } else if (operation === 'decrease') {
      cartController.deleteFromCart(dishId);
    }
  },
};

export { cartView };
