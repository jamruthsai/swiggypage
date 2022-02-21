async function fetchData() {
  try {
    const response = await fetch('../data.json');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('error: ' + err);
  }
}

// const data = fetchData();
export { fetchData };
