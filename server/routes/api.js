const express = require('express');
const User = require('../models/user');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  console.log(req.body);

  var chris = new User({
    name: 'Chris',
    username: 'sevilayha',
    password: 'password' 
  });
  chris.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("User saved successfully!");
    }
  });
});

module.exports = router;