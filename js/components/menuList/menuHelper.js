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

function buttonBuilder(dish) {
  const button = `<div class="${'dish ' + dish.id}">
                <button class="secondaryButton" >Add</button>
              </div>`;
  return button;
}
function dishBuilder(category, dishes) {
  let menu = ``;
  for (let dish of dishes) {
    menu += `
    <div class="dish b-bt-05">
        ${dishDetailsBuilder(dish)}
        ${buttonBuilder(dish)}
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

export { dishBuilder };
