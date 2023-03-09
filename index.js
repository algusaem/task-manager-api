const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// Parse incoming JSON requests
app.use(bodyParser.json());


// Import Routes
const userRoutes = require('./routes/userRoutes');
const listRoutes = require('./routes/listRoutes');
const taskRoutes = require('./routes/taskRoutes');

const mongoURI = 'mongodb+srv://algusaem:EcTjzxXVQ1fUEjmr@task-manager.wuasuef.mongodb.net/task-manager';
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongoURI, mongoOptions)
  .then(() => { console.log('Connected to MongoDB') })
  .catch((error) => { console.error('Error connecting to MongoDB:', error.message) });

// ROUTES
app.use('/users', userRoutes);
app.use('/lists', listRoutes);
app.use('/tasks', taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server started on port ${port}`) });