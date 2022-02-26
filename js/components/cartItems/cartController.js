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
    console.log(this.cartItems);
    cartView.init(this.cartItems);
  },
};

export { cartController };
