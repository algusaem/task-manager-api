const express = require('express');
const Task = require('../models/taskSchema');
const router = express.Router();

// Devuelve todas las tareas.
router.get('/', (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((error) => {
      res.status(500).send('Error retrieving lists from database');
    });
});

// Devuelve las tareas de la lista pasada cómo parámetro.
router.get('/:listname', (req, res) => {
  const listname = req.params.listname;

  Task.find({ listname: listname })
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((error) => {
      res.status(500).send('Error retrieving tasks from database');
    });
});

module.exports = router;