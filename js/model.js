import { fetchData } from './service.js';

async function loadData() {
  let data = await fetchData();
  return data;
}

export { loadData };
