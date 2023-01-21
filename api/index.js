const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
//Suppress warning from Mongoose
mongoose.set('strictQuery', false);


// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@cluster0.vnvnbcj.mongodb.net/Bakery?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a MongoDB model for new order
const Order = mongoose.model('Order', new mongoose.Schema({
  name: String,
  quantity: Number,
  pastry: String
}));


// Create a new order
app.post('/order', async (req, res) => {
  const example = new Order({
    name: req.body.name,
    quantity: req.body.quantity,
    pastry: req.body.pastry
  });
  try {
    await example.save();
    res.send(example);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all examples
app.get('/examples', async (req, res) => {
  try {
    const examples = await Example.find();
    res.send(examples);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
