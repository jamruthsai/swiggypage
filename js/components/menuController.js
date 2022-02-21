import { model } from '../models/model.js';
import { dishes } from '../view.js';
const menuController = {
  init() {
    console.log('menuController init');
    this.data = [];
    this.getData();
  },
  getData() {
    console.log('menuController getData');
    this.data = model.init();
    this.renderData();
  },
  renderData() {
    dishes.init(this.data);
  },
};

export { menuController };
