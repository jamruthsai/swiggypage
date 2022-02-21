import { menuModel } from './menuModel.js';
import { menuView } from './menuView.js';
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
};

export { menuController };
