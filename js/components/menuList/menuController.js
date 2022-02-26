import { menuModel } from './menuModel.js';
import { menuView } from './menuView.js';
import { cartController } from '../cartItems/cartController.js';
const menuController = {
  init() {
    this.getData();
  },
  async getData() {
    const menuList = await menuModel.loadData();
    this.renderData(menuList);
  },
  renderData(menuList) {
    menuView.init(menuList);
  },
  addToCart(dishId) {
    const dish = menuModel.getDish(dishId);
    cartController.addToCart(dish);
  },
  deleteFromCart(dishId) {
    cartController.deleteFromCart(dishId);
  },
  getQuantity(dishId) {
    return cartController.getQuantity(dishId);
  },
};

export { menuController };
