function categoryHeaderBuilder(category, dishes) {
  const header = `
 <div>
    <h2>
        ${category}
    </h2>
    <p class="lightWeightText">${dishes.length} Items</p>
 </div>
`;
  return header;
}

function dishDetailsBuilder(dish) {
  const details = `<div>
                ${dishImageBuilder(dish)}
                <h3 class="styledH3">${dish.name}</h3>
                <p class="styledP">${dish.price}</p>
                <div class="styledDiv">${dish.description}</div>
              </div>`;
  return details;
}

function dishImageBuilder(dish) {
  if (dish.isVeg) {
    return `<img src="../../../images/veg.png" alt="veg" class="icon">`;
  }
  return `<img src="../../../images/nonveg.png" alt="non-veg" class="icon">`;
}

function buttonBuilder() {
  const button = `
                <button class="secondaryButton" >Add</button>
             `;
  return button;
}

function buttonWithQuantityBuilder(quantity) {
  const button = `
                <button class="secondaryButton" >
                  <span class="decrease"> - </span>
                  <span class="quantity">${quantity}</span>
                  <span class="increase"> + </span>
                </button>
              `;
  return button;
}

function changeQuantities(quantity, className) {
  let button =
    quantity == 0 ? buttonBuilder() : buttonWithQuantityBuilder(quantity);
  let targetDishes = document.getElementsByClassName(className);
  for (let i = 0; i < targetDishes.length; i++) {
    targetDishes[i].innerHTML = button;
  }
}

function dishBuilder(category, dishes) {
  let menu = ``;
  for (let dish of dishes) {
    menu += `
    <div class="dish b-bt-05">
        ${dishDetailsBuilder(dish)}
        <div class="${'dish ' + dish.id}">
        ${buttonBuilder(dish)}
        </div>
    </div>
    `;
  }
  const categories = `

  <div id=${category} class="categories b-bt-1">
            ${categoryHeaderBuilder(category, dishes)}
            ${menu}
  </div>
  `;
  return categories;
}

export { dishBuilder, changeQuantities };
