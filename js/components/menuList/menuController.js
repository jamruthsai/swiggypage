import { menuModel } from './menuModel.js';
import { menuView } from './menuView.js';
const menuController = {
  init() {
    this.getData();
  },
  async getData() {
    const menuList = await menuModel.loadData();
    console.log(menuList);
    this.renderData();
  },
  renderData() {
    menuView.init(this.data);
  },
};

export { menuController };
