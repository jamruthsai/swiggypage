async function fetchData() {
  return await fetch('../data.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
}

// const data = fetchData();
export { fetchData };
