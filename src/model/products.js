// TODO: Move this data into the backend DB
const productInfoMap = {
  bubbleTea: {
    title: 'Bubble Tea',
    imgFileName: 'Bubble.png',
    price: '$4.49 - $4.99'
  },
  redBeanTea: {
    title: 'Red Bean Milk Tea',
    imgFileName: 'Red%20Bean.png',
    price: 'TBD'
  },
  cheeseTea: {
    title: 'Cheese Milk Tea',
    imgFileName: 'Cheese.png',
    price: 'TBD'
  },
  mangoTea: {
    title: 'Mango Green Tea',
    imgFileName: 'Mango.png',
    price: 'TBD'
  },
  berryTea: {
    title: 'Berry Red Tea',
    imgFileName: 'Berry.png',
    price: 'TBD'
  },
  passionFruitTea: {
    title: 'Passion Fruit QQ',
    imgFileName: 'Passion.png',
    price: 'TBD'
  },
  matchaTea: {
    title: 'Matcha Creme',
    imgFileName: 'Matcha.png',
    price: 'TBD'
  },
  thaiTea: {
    title: 'Thai Tea',
    imgFileName: 'Thai.png',
    price: 'TBD'
  },
  smoothie: {
    title: 'Smoothie',
    imgFileName: 'Smoothie.png',
    price: 'TBD'
  }
};

module.exports = {
  getProductInfo: function(productId) {
    return productInfoMap[productId];
  }
};