const express = require('express');
const List = require('../models/listSchema');
const router = express.Router();

//GET
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
  

// POST
// Crea una nueva lista.
router.post('/', (req, res) => {
  const { username, name } = req.body;

  const newList = new List({
    username: username,
    name: name,
  });

  newList.save()
    .then((list) => {
      res.send(list);
    })
    .catch((error) => {
      res.status(500).send('Error saving list to database');
    });
});


module.exports = router;