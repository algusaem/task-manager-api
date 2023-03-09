const express = require('express');
const Task = require('../models/taskSchema');
const router = express.Router();


// GET
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

// POST
// Crea una nueva tarea.
router.post('/', (req, res) => {
  const { listname, name } = req.body;

  // Create a new task object with the request body
  const newTask = new Task({
    listname: listname,
    name: name,
  });

  // Save the new task to the database
  newTask.save()
    .then((task) => {
      res.send(task);
    })
    .catch((error) => {
      res.status(500).send('Error saving task to database');
    });
});

// PUT
// Actualiza una tarea por su nombre
router.put('/name/:name', (req, res) => {
  const taskName = req.params.name;

  Task.findOneAndUpdate({ name: taskName }, req.body, { new: true })
    .then((task) => {
      res.send(task);
    })
    .catch((error) => {
      res.status(500).send('Error updating task');
    });
});

module.exports = router;