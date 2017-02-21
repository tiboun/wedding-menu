const express = require('express');
const Coupon = require('../models/coupon');
const FormPresence = require('../models/form-presence');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/coupon/save', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  console.log(req.body);

  var coupon = new Coupon(req.body);
  coupon.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(coupon);
    }
  });
});

router.get('/coupon/getall', (req, res) => {
  Coupon.find({}, function(err, coupons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(coupons)
    }
  });
})

router.post('/form-presence/save', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  console.log(req.body);

  var form = new FormPresence(req.body);
  form.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(form);
    }
  });
});

router.get('/form-presence/getall', (req, res) => {
  FormPresence.find({}, function(err, forms) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(forms)
    }
  });
})

module.exports = router;