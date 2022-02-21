import { fetchData } from '../../service.js';

const menuModel = {
  data: {},
  async loadData() {
    this.data = await fetchData();
    return this.data;
  },
};

export { menuModel };
