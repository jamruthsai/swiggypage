import { dishBuilder, changeQuantities } from './menuHelper.js';
import { menuController } from './menuController.js';

const menuView = {
  dishes: {},
  init(data) {
    this.dishes = data;
    this.render();
    this.initListeners();
  },
  render() {
    let menuList = ``;
    for (let category in this.dishes) {
      menuList += dishBuilder(category, this.dishes[category]);
    }
    document.querySelector('.dishes').innerHTML = menuList;
  },
  initListeners() {
    document
      .getElementsByClassName('dishes')[0]
      .addEventListener('click', (event) => {
        menuController.handleEvent(event);
      });
  },
  changeAllDishesQuantities(quantity, className) {
    changeQuantities(quantity, className);
  },
  updateQuantities(dishId, operation, quantity) {
    let className = `dish ${dishId}`;
    if (operation === 'increase') {
      changeQuantities(quantity, className);
    } else {
      changeQuantities(quantity, className);
    }
  },
};

export { menuView };
