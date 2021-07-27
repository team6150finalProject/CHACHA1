// TODO: Move this data into the backend DB
const productInfoMap = {
  bubbleTea: {
    title: 'Bubble Tea',
    imgFileName: 'bubbleTea.jpg',
    price: '$4.49 - $4.99'
  },
  redBeanTea: {
    title: 'Taro Milk Tea',
    imgFileName: 'TaroTea.jpg',
    price: 'TBD'
  },
  cheeseTea: {
    title: 'Cheese Milk Tea',
    imgFileName: 'cheese.jpg',
    price: 'TBD'
  },
  mangoTea: {
    title: 'Mango Tea',
    imgFileName: 'mangoTea.jpg',
    price: 'TBD'
  },
  berryTea: {
    title: 'Mix Berry Tea',
    imgFileName: 'berryTea.jpg',
    price: 'TBD'
  },
  passionFruitTea: {
    title: 'Passion Fruit QQ',
    imgFileName: 'passion.jpeg',
    price: 'TBD'
  },
  matchaTea: {
    title: 'Matcha Creme',
    imgFileName: 'matcha.jpg',
    price: 'TBD'
  },
  thaiTea: {
    title: 'Thai Tea',
    imgFileName: 'thaiTea.webp',
    price: 'TBD'
  },
  smoothie: {
    title: 'Peach Oolong',
    imgFileName: 'coldTea.jfif',
    price: 'TBD'
  }
};

module.exports = {
  getProductInfo: function(productId) {
    return productInfoMap[productId];
  }
};