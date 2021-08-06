const fakeProduct = {
  id: 1,
  productName: "Fresh Canadian Atlantic Salmon Fillet",
  aisles: "seafood",
  price: 10.99,
  category: "fish",
  type: "fresh",
  avg: 7.93,
  size: "1L",
  photo: "img/salmon_fillet.jpeg",
};

// for beand for chees beverage
const products = {
  seafood: [
    {
      id: 1,
      productName: "Fresh Canadian Atlantic Salmon Fillet",
      aisles: "seafood",
      price: 10.99,
      category: "fish",
      type: "fresh",
      avg: 7.93,
      photo: "img/salmon_fillet.jpeg",
      ingredients: "",
    },
    {
      id: 2,
      productName: "Crab flavoured pollock flakes",
      aisles: "seafood",
      price: 8.99,
      category: "fish",
      type: "fresh",
      avg: null,
      photo: "img/crab-flavored.jpeg",
    },
    {
      id: 3,
      productName: "Fresh Atlantic Salmon Steak",
      aisles: "seafood",
      price: 15.99,
      category: "fish",
      type: "fresh",
      avg: 8.81,
      photo: "img/fresh_atlantic.jpeg",
    },
    {
      id: 4,
      productName: "Pollock and Shrimp Salad",
      aisles: "seafood",
      price: 8.99,
      category: "seafood",
      type: "prepared",
      avg: 4.96,
      photo: "img/pollock-and-srimp-salad.jpeg",
    },
    {
      id: 5,
      productName: "Salmon Fillet with Rosée Sauce",
      aisles: "seafood",
      price: 12.43,
      category: "fish",
      type: "prepared",
      avg: 9.73,
      photo: "img/Salmon-Fillet-Rosée-Sauce.jpeg",
    },
    {
      id: 6,
      productName: "Frozen sliced smoked coho salmon",
      aisles: "seafood",
      price: 21.99,
      category: "fish",
      type: "frozen",
      avg: 21.99,
      photo: "img/Frozen-sliced-smoked-coho-salmon.jpeg",
      ingredients:
        "We strive to always offer you the most up-to-date product information. However, manufacturers may change this information at any time. We recommend that you read labels and packaging before consuming any product to ensure that you have the updated information regarding the ingredients, the nutritional values, as well as any allergy warnings.",
    },
    {
      id: 7,
      productName: "Frozen Uncooked Pacific White Shrimp",
      aisles: "seafood",
      price: 10.99,
      category: "fish",
      type: "fresh",
      avg: 7.93,
      photo: "img/Frozen-Uncooked-Pacific-White-Shrimp.jpeg",
    },
  ],
  beverages=[
    {
      id: 8,
      productName: "Coca-cola",
      aisles: "beverages",
      price: 1.99,
      category: "soda",
      photo: "img/cocacola.jpeg",
    },
    {
      id: 9,
      productName: "Pepsi",
      aisles: "beverages",
      price: 3.99,
      category: "soda",
      photo: "img/pepsi.jpg",
    },
    {
      id: 10,
      productName: "Orange Crush",
      aisles: "beverages",
      price: 15.99,
      category: "soda",
      photo: "img/orangecrush.JPG",
    },
    {
      id: 11,
      productName: "Cream Soda Crush",
      aisles: "beverages",
      price: 8.99,
      category: "soda",
      photo: "img/creamsoda.jpg",
    },
    {
      id: 12,
      productName: "Nestea",
      aisles: "beverages",
      price: 12.43,
      category: "soda",
      photo: "img/nestea.jpg",
    },
    {
      id: 13,
      productName: "Oasis Orange Juice",
      aisles: "beverages",
      price: 21.99,
      category: "juice",
      photo: "img/orangejuice.jpg",
    },
    {
      id: 14,
      productName: "Oasis Pineapple Juice",
      aisles: "beverages",
      price: 10.99,
      category: "juice",
      photo: "img/pineapplejuice.jpg",
    },
    {
      id: 15,
      productName: "Sprite",
      aisles: "beverages",
      price: 10.99,
      category: "soda",
      photo: "img/sprite.JPG",
    },{
      id: 16,
      productName: "Eska Water Bottles",
      aisles: "beverages",
      price: 10.99,
      category: "water",
      photo: "img/water.jpg",
    },{
      id: 17,
      productName: "Oasis Mango Juice",
      aisles: "beverages",
      price: 10.99,
      category: "juice",
      photo: "img/mangojuice.jpg",
    }
  ],
};

export default products;
