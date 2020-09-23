const adminModel = require('../models/admin');
const express = require('express');
const { hashPassword, comparePassword } = require('../security/passwordManager');

const admin = (server) => {
  server.post('/admin/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
      const hashedPassword = await hashPassword(password)
      var newUser = await new adminModel({ email, hashedPassword }).save()
      console.log("I'm user", newUser);
      res.send(newUser)
    } catch (e) {
      console.log(e)
      res.send(500).json(err)
    }

  })
  server.post('/admin/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await adminModel.findOne({ email });
      if (user) {
        const isThere = await comparePassword(password, email);
        if (isThere) {
          return res.sendStatus(200);
        }
        if (!isThere) {
          return res.json({ error: "password or email exists" });
        }
      } else {
        return res.json({ error: "user does not exist" });
      }
    } catch (err) {
      res.send(500)
    }

  })
}

module.exports = { admin };