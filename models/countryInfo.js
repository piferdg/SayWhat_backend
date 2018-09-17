const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema and model

const countryInfoSchema = new Schema({
  name: String,
  currency: String,

})

const countryInfo = mongoose.model('countryInfo', countryInfoSchema)

module.exports = countryInfo