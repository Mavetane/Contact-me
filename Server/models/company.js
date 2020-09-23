var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  name: { type: String, required: true },
  website: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  physicalAddress: { type: String, required: true },
})

var companyModel = mongoose.model('company', companySchema);
module.exports = companyModel;