const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();

// GET
// Devuelve todos los usuarios.
router.get('/', (req, res) => {
    User.find({})
        .then((users) => {
        res.send(users);
        })
        .catch((error) => {
        res.status(500).send('Error retrieving users from database');
        });
});

// POST
// Crea un nuevo usuario.
router.post('/', (req, res) => {
    console.log(req.body); // log the request body
    const { username, password } = req.body;
  
    const newUser = new User({
      username: username,
      password: password,
    });
  
    newUser.save()
      .then((user) => {
        res.send(user);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error saving user to database');
      });
  });
  
  
module.exports = router;