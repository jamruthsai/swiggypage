import { fetchData } from '../components/service.js';

const model = {
  init() {
    this.data = {};
    this.loadData();
  },
  loadData() {
    this.data = await fetchData();
    return this.data;
  },
};

export { model };
