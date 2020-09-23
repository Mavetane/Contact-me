const companyModel = require('../models/company');
const express = require('express');

const company = (server) => {
  server.post('/company/register', async (req, res) => {
    const { name, website, physicalAddress, email, mobileNo } = req.body;
    try {
      var newCompany = await new companyModel({ name, website, physicalAddress, email, mobileNo }).save()
      console.log("company", newCompany);
      res.send(newCompany)
    } catch (e) {
      console.log(e)
      res.send(500).json(err)
    }

  })
  server.get('/companies', async (req, res) => {
    try {
      const companies = await companyModel.find();
      res.send(companies)
    } catch (e) {
      console.log(e)
    }
  })
}

module.exports = { company };