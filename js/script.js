fetch('../data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function createCatagories(title, type) {
  let category = document.createElement('div');
  category.classList.add('categories');
  category.classList.add('b-bt-1');
  category.id = type;
  let categoryTitle = document.createElement('h2');
  categoryTitle.innerHTML = title;
  let noOfItems = document.createElement('p');
  noOfItems.classList.add('lightWeightText');
  noOfItems.innerHTML = '';
  let innerDiv = document.createElement('div');
  innerDiv.appendChild(categoryTitle);
  innerDiv.appendChild(noOfItems);
  category.appendChild(innerDiv);
  return category;
}

function appendData(data) {
  let recommended = createCatagories('Recommended', 'recommended');
  let platters = createCatagories('Platters', 'platters');
  let starters = createCatagories('Starters', 'starters');
  let maincourse = createCatagories('Main Course', 'maincourse');
  let familypack = createCatagories('Family Binge Pack', 'familypack');
  for (let i = 0; i < data.length; i++) {
    let dish = document.createElement('div');
    dish.classList.add('dish');
    dish.classList.add('b-bt-05');
    let name = document.createElement('h3');
    name.innerHTML = data[i].name;
    name.classList.add('styledH3');
    let price = document.createElement('p');
    price.innerHTML = data[i].price;
    price.classList.add('styledP');
    let description = document.createElement('div');
    description.innerHTML = data[i].description;
    description.classList.add('styledDiv');
    let img = document.createElement('img');
    if (data[i].veg) {
      img.src = '../assests/images/veg.png';
      img.alt = 'veg';
      img.classList.add('icon');
    } else {
      img.src = '../assests/images/nonveg.png';
      img.alt = 'nonveg';
      img.classList.add('icon');
    }
    let button = document.createElement('button');
    button.innerHTML = 'Add';
    button.classList.add('secondaryButton');
    let firstDiv = document.createElement('div');
    firstDiv.appendChild(img);
    firstDiv.appendChild(name);
    firstDiv.appendChild(price);
    firstDiv.appendChild(description);
    let secondDiv = document.createElement('div');
    secondDiv.appendChild(button);
    dish.appendChild(firstDiv);
    dish.appendChild(secondDiv);

    if (data[i].catagories.includes('recommended')) {
      //clone the node
      let clone = dish.cloneNode(true);
      recommended.appendChild(clone);
    }
    if (data[i].catagories.includes('platters')) {
      platters.appendChild(dish);
    }
    if (data[i].catagories.includes('starters')) {
      starters.appendChild(dish);
    }
    if (data[i].catagories.includes('maincourse')) {
      maincourse.appendChild(dish);
    }
    if (data[i].catagories.includes('familypack')) {
      familypack.appendChild(dish);
    }
  }
  // Change the number of items in the recommended category

  document.getElementsByClassName('dishes')[0].appendChild(recommended);
  document.getElementsByClassName('dishes')[0].appendChild(platters);
  document.getElementsByClassName('dishes')[0].appendChild(starters);
  document.getElementsByClassName('dishes')[0].appendChild(maincourse);
  document.getElementsByClassName('dishes')[0].appendChild(familypack);
  let recommendedItems = document.querySelectorAll('#recommended p');
  recommendedItems[0].innerHTML = recommended.childElementCount - 1 + ' items';
  let plattersItems = document.querySelectorAll('#platters p');
  plattersItems[0].innerHTML = platters.childElementCount - 1 + ' items';
  let startersItems = document.querySelectorAll('#starters p');
  startersItems[0].innerHTML = starters.childElementCount - 1 + ' items';
  let maincourseItems = document.querySelectorAll('#maincourse p');
  maincourseItems[0].innerHTML = maincourse.childElementCount - 1 + ' items';
  let familypackItems = document.querySelectorAll('#familypack p');
  familypackItems[0].innerHTML = familypack.childElementCount - 1 + ' items';
}
