import { cartModel } from './cartModel.js';
import { cartView } from './cartView.js';
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
};

export { cartController };
