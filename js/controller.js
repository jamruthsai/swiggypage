import { loadData } from './model.js';
import { dishes } from './view.js';
const controller = {
  init() {
    this.data = [];
    this.getData();
  },
  async getData() {
    this.data = await loadData();
    this.renderData();
  },
  async renderData() {
    dishes.init(this.data);
  },
};

controller.init();
