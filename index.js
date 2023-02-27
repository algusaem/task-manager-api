const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Primer mensaje de la API');
});

app.get('/listas/' + id, (req, res) => {
  res.send('Devuelve las listas de tareas con la id' + id);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
