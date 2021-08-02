// TODO: Move this data into the backend DB
const productInfoMap = {
  bubbleTea: {
    title: 'Bubble Tea',
    type: 'milkTea',
    imgFileName: 'bubble.jfif',
    price: '$4.49 - $4.99'
  },
  redBeanTea: {
    title: 'Taro Milk Tea',
    type: 'milkTea',
    imgFileName: 'taro.jfif',
    price: 'TBD'
  },
  cheeseTea: {
    title: 'Cheese Milk Tea',
    type: 'milkTea',
    imgFileName: 'cheese1.jfif',
    price: 'TBD'
  },
  mangoTea: {
    title: 'Mango Tea',
    type: 'fruitTea',
    imgFileName: 'mangoTea.jpg',
    price: 'TBD'
  },
  berryTea: {
    title: 'Mix Berry Tea',
    type: 'fruitTea',
    imgFileName: 'berryTea.jpg',
    price: 'TBD'
  },
  passionFruitTea: {
    title: 'Passion Fruit QQ',
    type: 'fruitTea',
    imgFileName: 'passion.jpeg',
    price: 'TBD'
  },
  matchaTea: {
    title: 'Matcha Creme',
    type: 'specialtyDrinks',
    imgFileName: 'matcha.jpg',
    price: 'TBD'
  },
  thaiTea: {
    title: 'Thai Tea',
    type: 'specialtyDrinks',
    imgFileName: 'thaiTea.jpg',
    price: 'TBD'
  },
  smoothie: {
    title: 'Peach Oolong',
    type: 'specialtyDrinks',
    imgFileName: 'coldTea.jfif',
    price: 'TBD'
  }
};

module.exports = {
  getProductInfo: function(productId) {
    return productInfoMap[productId];
  }
};