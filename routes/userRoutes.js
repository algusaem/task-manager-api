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
  

  // UPDATE
  // Edita la contraseña.
  router.put('/:id/password', async (req, res) => {
    const userId = req.params.id;
    const newPassword = req.body.newPassword;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { password: newPassword },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating user');
    }
  });

  // Edita el usuario.
  router.put('/:id/username', async (req, res) => {
    const userId = req.params.id;
    const newUsername = req.body.newUsername;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { username: newUsername },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating user');
    }
  });  
  
module.exports = router;