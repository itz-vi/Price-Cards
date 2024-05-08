const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  title: String,
  price: String,
  add: String,
  storage: String,
  pack: String,
  image: String,

})

module.exports = mongoose.model('card', cardSchema)