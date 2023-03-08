const express = require('express');
const List = require('../models/listSchema');
const router = express.Router();

// Devuelve todas las listas.
router.get('/', (req, res) => {
    List.find({})
      .then((lists) => {
        res.send(lists);
      })
      .catch((error) => {
        res.status(500).send('Error retrieving lists from database');
      });
});
  
// Devuelve las listas del usuario pasado cómo parámetro.
router.get('/:username', (req, res) => {
    const username = req.params.username;

    List.find({ username: username })
        .then((lists) => {
        res.send(lists);
        })
        .catch((error) => {
        res.status(500).send('Error retrieving lists from database');
        });
});
  
module.exports = router;