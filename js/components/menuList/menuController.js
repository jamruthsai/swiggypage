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
  handleEvent(event) {
    console.log(event.target.parentElement);
    console.log(event.target.innerHTML);
    if (event.target.innerHTML === 'Add') {
      const className = event.target.parentElement.className;
      const dishId = className.split(' ')[1];
      menuController.addToCart(dishId);
      menuView.changeAllDishesQuantities(1, className);
    } else {
      // const quantity = parseInt(event.target.innerHTML);
      const operation = event.target.className;
      if (operation == 'increase' || operation == 'decrease') {
        const className = event.target.parentElement.parentElement.className;
        const dishId = className.split(' ')[1];
        const quantity = menuController.getQuantity(dishId);
        if (operation === 'increase') {
          menuView.changeAllDishesQuantities(quantity + 1, className);
          menuController.addToCart(dishId);
        } else {
          menuView.changeAllDishesQuantities(quantity - 1, className);
          menuController.deleteFromCart(dishId);
        }
      }
    }
  },
  deleteFromCart(dishId) {
    cartController.deleteFromCart(dishId);
  },
  getQuantity(dishId) {
    return cartController.getQuantity(dishId);
  },
  updateQuantities(dishId, operation) {
    let quantity = this.getQuantity(dishId);
    menuView.updateQuantities(dishId, operation, quantity);
  },
  clearCart() {
    console.log('clear cart');
    this.getData();
  },
};

export { menuController };
