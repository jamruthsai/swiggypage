import { fetchData } from '../../service.js';

const menuModel = {
  // init() {
  //   console.log('model init');

  //   this.loadData();
  // },
  data: {},
  async loadData() {
    this.data = await fetchData();
    return this.data;
  },
};

export { menuModel };
