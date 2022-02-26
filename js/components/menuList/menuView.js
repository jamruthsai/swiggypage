import { dishBuilder } from './menuHelper.js';
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
        this.addDishToCart(event);
      });
  },
  addDishToCart(event) {
    const dishId = event.target.parentElement.className.split(' ')[1];
    menuController.addToCart(dishId);
  },
};

export { menuView };
