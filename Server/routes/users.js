const userModel = require('../models/users');
const express = require('express');

const user = (server) => {
  server.post('/user', async (req, res) => {
    const { name, surname, email, mobileNo, question } = req.body;
    try {
      var newUser = await new userModel({ name, surname, email, mobileNo, question }).save()
      console.log("user", newUser);
      res.send(newUser)
    } catch (e) {
      console.log(e)
      res.send(500).json(err)
    }

  })
}

module.exports = { user };