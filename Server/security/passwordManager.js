const bcrypt = require('bcrypt');
const Admin = require("../models/admin");

const hashPassword = async (password) => {
  const saltRounds = 10;
  try {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (err) {
    console.log(err)
  }
}

const comparePassword = async (password, email) => {
  try {
    const user = await Admin.findOne({ email })
    const isCorrect = await bcrypt.compare(password, user.hashedPassword);
    return isCorrect
  } catch (err) {
    console.log(err)
  }
}

module.exports = { hashPassword, comparePassword };

