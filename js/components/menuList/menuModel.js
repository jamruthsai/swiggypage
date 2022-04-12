import { fetchData } from '../../service.js';

const menuModel = {
  data: {},
  async loadData() {
    this.data = await fetchData();
    return this.data;
  },
  getDish(id) {
    for (let [category, dishes] of Object.entries(this.data)) {
      //Find id dish in dishes
      for (let i = 0; i < dishes.length; i++) {
        if (id == dishes[i].id) {
          return dishes[i];
        }
      }
    }
    return {};
  },
};

export { menuModel };
