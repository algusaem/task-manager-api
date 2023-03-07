const express = require('express');
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://algusaem:EcTjzxXVQ1fUEjmr@task-manager.wuasuef.mongodb.net/task-manager';
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


mongoose.connect(mongoURI, mongoOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', userSchema);

const app = express();

// Return the users.
app.get('/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send('Error retrieving users from database');
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
