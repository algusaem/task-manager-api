const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();

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
module.exports = router;