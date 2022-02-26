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
    cartModel.addNewDish(dish);
    this.getData();
  },
};

export { cartController };
