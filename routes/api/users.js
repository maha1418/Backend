const express = require('express');

const router = express.Router();



const User = require('../../models/Users');

router.get('/', (req, res) => {
  User.find()
  .then(users => res.json(users))
  });

router.post('/', (req, res) => {
  const newUser= new User({
name: req.body.name,
university: req.body.university,
major: req.body.major,
file: req.body.file
  })
  newUser.save().then(users => res.json(users));
});
  

module.exports = router;
