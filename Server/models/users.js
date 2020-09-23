var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  email: { type: String, required: true },
  question: { type: String, required: true },
})

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;