import { cartModel } from './cartModel.js';
import { cartView } from './cartView.js';
import { menuController } from '../menuList/menuController.js';
const cartController = {
  cartItems: {},
  init() {
    this.getData();
    cartView.init();
  },
  getData() {
    this.cartItems = cartModel.getData();
    this.renderData();
  },
  renderData() {
    cartView.render(this.cartItems);
  },
  handleEvent(event) {
    if (event.target.innerHTML === 'Checkout') {
      this.checkout();
    } else {
      this.addOrDeleteToCart(event);
    }
  },
  addOrDeleteToCart(event) {
    let dishId = event.target.parentElement.id;
    let operation = event.target.className;
    let dish = this.getDish(dishId);
    if (operation === 'increase') {
      this.addToCart(dish);
      this.sendQuantityToMenu(dishId, operation);
    } else if (operation === 'decrease') {
      this.deleteFromCart(dishId);
      this.sendQuantityToMenu(dishId, operation);
    }
  },
  checkout() {
    this.clearCart();
  },
  clearCart() {
    cartModel.clearCart();
    menuController.clearCart();
    this.getData();
  },
  addToCart(dish) {
    cartModel.addDish(dish);
    this.getData();
  },
  deleteFromCart(dishId) {
    cartModel.deleteDish(dishId);
    this.getData();
  },
  getQuantity(dishId) {
    return cartModel.getQuantity(dishId);
  },
  getDish(dishId) {
    return cartModel.getDish(dishId);
  },
  sendQuantityToMenu(dishId, operation) {
    menuController.updateQuantities(dishId, operation);
  },
};

export { cartController };
