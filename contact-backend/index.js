const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define the schema and model
const contactSchema = new mongoose.Schema({
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/contact', (req, res) => {
  const newContact = new Contact({
    email: req.body.email,
    message: req.body.message
  });

  newContact.save()
    .then(() => res.status(200).json({ message: 'Message saved successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.get('/contacts', (req, res) => {
  Contact.find()
    .then(contacts => res.status(200).json(contacts))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
