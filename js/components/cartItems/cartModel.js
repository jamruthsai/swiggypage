const cartModel = {
  data: {
    dishes: [
      {
        id: '0',
        name: 'Veg Platter',
        price: 699,
        isVeg: true,
        description:
          'An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.',
      },
    ],
    total: 699,
    totalItems: 1,
  },
  getData() {
    return this.data;
  },
};

export { cartModel };
