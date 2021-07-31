const mongoose = require('mongoose');


module.exports = mongoose.model('project-register', {
  email: { type: String, unique: true, default: '', required: true },
  password: { type: String, default: '', required: true },
  username: { type: String, unique: true, default: '', required: true },
  isadmin: { type: Boolean, default: false, required: true },
  nextid: { type: Number, default: 0 },
  orders: [{
    orderid: { type: String, required: true },
    timemillis: { type: Number, required: true },
    totalprice: { type: Number, required: true },
    products: [{
      name: { type: String, required: true },
      size: { type: String, default: '' },
      ice: { type: String, default: '' },
      sweetness: { type: String, default: '' },
      extras: { type: [String] },
      quantity: { type: Number, required: true }
    }]
  }]
});