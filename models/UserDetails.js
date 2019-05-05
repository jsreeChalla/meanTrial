var mongoose = require('mongoose');

var userDetailsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
  });

  module.exports = mongoose.model('userDetails',userDetailsSchema);
