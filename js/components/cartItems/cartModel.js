const cartModel = {
  data: {
    dishes: [],
    total: 0,
    totalItems: 0,
  },
  getData() {
    return this.data;
  },
  addDish(dish) {
    let quantity = this.getQuantity(dish.id);
    if (quantity == 0) {
      dish.quantity = 1;
      dish.subTotal = dish.price;
      this.data.dishes.push(dish);
      this.data.total += dish.price;
      this.data.totalItems += 1;
    } else {
      let targetDish = this.getDish(dish.id);
      targetDish.quantity += 1;
      targetDish.subTotal += dish.price;
      this.data.total += dish.price;
      this.data.totalItems += 1;
    }
  },
  deleteDish(dishId) {
    let targetDish = this.getDish(dishId);
    let quantity = targetDish.quantity;
    if (quantity == 1) {
      this.data.dishes.splice(this.data.dishes.indexOf(targetDish), 1);
      this.data.total -= targetDish.subTotal;
      this.data.totalItems -= 1;
    } else {
      targetDish.quantity -= 1;
      targetDish.subTotal -= targetDish.price;
      this.data.total -= targetDish.price;
      this.data.totalItems -= 1;
    }
  },

  getQuantity(dishId) {
    let quantity = 0;
    this.data.dishes.forEach((dish) => {
      if (dish.id === dishId) {
        quantity = dish.quantity;
      }
    });
    return quantity;
  },
  getDish(dishId) {
    let targetDish = {};
    this.data.dishes.forEach((dish) => {
      if (dish.id === dishId) {
        targetDish = dish;
      }
    });
    return targetDish;
  },
  clearCart() {
    // Store the data in localStorage
    localStorage.setItem('cart', JSON.stringify(this.data));
    this.data.dishes = [];
    this.data.total = 0;
    this.data.totalItems = 0;
  },
};

export { cartModel };
