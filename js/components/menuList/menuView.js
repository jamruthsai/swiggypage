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
        this.handleEvent(event);
      });
  },
  handleEvent(event) {
    console.log(event.target);
    if (event.target.innerHTML === 'Add') {
      const className = event.target.parentElement.className;
      const dishId = className.split(' ')[1];
      menuController.addToCart(dishId);
      changeQuantities(1, className);
    } else {
      // const quantity = parseInt(event.target.innerHTML);
      const operation = event.target.className;
      if (operation == 'increase' || operation == 'decrease') {
        const className = event.target.parentElement.parentElement.className;
        console.log(operation, className);
        const dishId = className.split(' ')[1];
        const quantity = menuController.getQuantity(dishId);
        if (operation === 'increase') {
          changeQuantities(quantity + 1, className);
          menuController.addToCart(dishId);
        } else {
          changeQuantities(quantity - 1, className);
          menuController.deleteFromCart(dishId);
        }
      }
    }
  },
};

export { menuView };
