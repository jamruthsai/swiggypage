import { cartModel } from './cartModel.js';
import { cartView } from './cartView.js';
const cartController = {
  cartItems: {},
  init() {
    this.getData();
  },
  getData() {
    this.cartItems = cartModel.getData();
    this.renderData();
  },
  renderData() {
    cartView.init(this.cartItems);
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
};

export { cartController };
