const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/inventoryDB');

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const { name, quantity, price } = req.body;
  const item = new Item({ name, quantity, price });
  await item.save();
  res.json(item);
});

app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

app.listen(5000, () => console.log('Server started on port 5000'));