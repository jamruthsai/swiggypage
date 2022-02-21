const dishes = {
  init(data) {
    this.dishes = document.getElementsByClassName('dishes')[0];
    this.data = data;
    this.render();
  },
  render() {
    this.recommended = this.buildCatagories('Recommended', 'recommended');
    this.platters = this.buildCatagories('Platters', 'platters');
    this.starters = this.buildCatagories('Starters', 'starters');
    this.maincourse = this.buildCatagories('Main Course', 'maincourse');
    this.familypack = this.buildCatagories('Family Binge Pack', 'familypack');
    for (let i = 0; i < this.data.length; i++) {
      this.buildDish(this.data[i]);
    }
  },

  //Builders
  buildCatagories(title, type) {
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
  },

  appendDishes() {
    this.dishes.appendChild(this.recommended);
    this.dishes.appendChild(this.platters);
    this.dishes.appendChild(this.starters);
    this.dishes.appendChild(this.maincourse);
    this.dishes.appendChild(this.familypack);
  },

  buildDish(dishItem) {
    let details = this.buildDetails(dishItem);
    let button = this.buildButton();
    let dish = document.createElement('div');
    dish.classList.add('dish');
    dish.classList.add('b-bt-05');
    dish.appendChild(details);
    dish.appendChild(button);
    this.categorizeCategory(dish, dishItem.catagories);
    this.appendDishes();
    this.setNoOfItems();
  },

  buildDetails(dishItem) {
    let img = this.buildImage(dishItem.isVeg);
    let name = document.createElement('h3');
    name.innerHTML = dishItem.name;
    name.classList.add('styledH3');
    let price = document.createElement('p');
    price.innerHTML = dishItem.price;
    price.classList.add('styledP');
    let description = document.createElement('div');
    description.innerHTML = dishItem.description;
    description.classList.add('styledDiv');
    let div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(description);
    return div;
  },

  buildImage(isVeg) {
    let img = document.createElement('img');
    if (isVeg) {
      img.src = '../assests/images/veg.png';
      img.alt = 'veg';
      img.classList.add('icon');
    } else {
      img.src = '../assests/images/nonveg.png';
      img.alt = 'nonveg';
      img.classList.add('icon');
    }
    return img;
  },

  buildButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Add';
    button.classList.add('secondaryButton');
    let div = document.createElement('div');
    div.appendChild(button);
    return div;
  },

  categorizeCategory(dish, catagories) {
    if (catagories.includes('recommended')) {
      //clone the node
      let clone = dish.cloneNode(true);
      this.recommended.appendChild(clone);
    }
    if (catagories.includes('platters')) {
      this.platters.appendChild(dish);
    }
    if (catagories.includes('starters')) {
      this.starters.appendChild(dish);
    }
    if (catagories.includes('maincourse')) {
      this.maincourse.appendChild(dish);
    }
    if (catagories.includes('familypack')) {
      this.familypack.appendChild(dish);
    }
  },
  setNoOfItems() {
    let recommendedItems = document.querySelectorAll('#recommended p');
    recommendedItems[0].innerHTML =
      this.recommended.childElementCount - 1 + ' items';

    let plattersItems = document.querySelectorAll('#platters p');
    plattersItems[0].innerHTML = this.platters.childElementCount - 1 + ' items';

    let startersItems = document.querySelectorAll('#starters p');
    startersItems[0].innerHTML = this.starters.childElementCount - 1 + ' items';

    let maincourseItems = document.querySelectorAll('#maincourse p');
    maincourseItems[0].innerHTML =
      this.maincourse.childElementCount - 1 + ' items';

    let familypackItems = document.querySelectorAll('#familypack p');
    familypackItems[0].innerHTML =
      this.familypack.childElementCount - 1 + ' items';
  },
};

export { dishes };
