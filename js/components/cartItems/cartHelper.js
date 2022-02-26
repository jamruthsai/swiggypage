function emptyCart() {
  const emptycart = `<div class="emptyCart">
          <h3 class="secondaryH3">Empty Cart</h3>
          <p class="lightWeightedText"></p>
          <div class="emptyCart">
            <img src="/images/emptycart.png" alt="" class="styledimg">
            <p class="secondaryP">
              Good food is always cooking! Go ahead, order some yummy items from the menu.
            </p>
          </div>
        </div>`;
  return emptycart;
}

function buildCart(cartItems) {
  if (cartItems.totalItems == 0) {
    return emptyCart();
  }
  let cartHeader = buildCartHeader(cartItems.totalItems);
  let items = buildCartItems(cartItems.dishes);
  let cart = `
    <div class="cartItems">
      ${cartHeader}
      ${items}
      <div class="checkout">
        <div class="subtotal">
          <h4>Total</h4>
          <span>${cartItems.total}</span>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  `;
  return cart;
}

function buildCartHeader(len) {
  let header = ` <div>
          <h1>Cart</h1>
          <p>${len} Items</p>
        </div>`;
  return header;
}

function buildCartItems(dishes) {
  let items = ``;
  dishes.forEach((dish) => {
    items += `<div class="cartItem">
            ${dishImageBuilder(dish)}
            <div>
              <h3>${dish.name}</h3>
              <p>${dish.price}</p>
            </div>
            <div class="quantity">
              <span class="#sub">-</span>
              <span>1</span>
              <span class="#add">+</span>
            </div>
          </div>;
          `;
  });
  return items;
}
function dishImageBuilder(dish) {
  if (dish.isVeg) {
    return `<img src="../../../images/veg.png" alt="veg" class="cartIcon">`;
  }
  return `<img src="../../../images/nonveg.png" alt="non-veg" class="cartIcon">`;
}

export { buildCart };
