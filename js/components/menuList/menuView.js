import { dishBuilder } from './menuHelper.js';

const menuView = {
  dishes: {},
  init(data) {
    this.dishes = data;
    this.render();
  },
  render() {
    let menuList = ``;
    for (let category in this.dishes) {
      menuList += dishBuilder(category, this.dishes[category]);
    }
    document.querySelector('.dishes').innerHTML = menuList;
  },
};

export { menuView };
