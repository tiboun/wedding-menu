const express = require('express');
const Coupon = require('../models/coupon');
const FormPresence = require('../models/form-presence');
const Questions = require('../models/questions');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/coupon/save', (req, res) => {
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

router.post('/coupon/delete', (req, res) => {
  Coupon.remove({}, function(err, coupons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('ok')
    }
  });
})

router.post('/form-presence/save', (req, res) => {
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

router.post('/form-presence/delete', (req, res) => {
  FormPresence.remove({}, function(err, coupons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('ok')
    }
  });
})

router.post('/questions/save', (req, res) => {
  var form = new Questions(req.body);
  form.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(form);
    }
  });
});

router.get('/questions/getall', (req, res) => {
  Questions.find({}, function(err, forms) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(forms)
    }
  });
})

router.post('/questions/delete', (req, res) => {
  Questions.remove({}, function(err, coupons) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('ok')
    }
  });
})

module.exports = router;