const express = require('express');
const Joi = require('joi');
const app = express();
const port = 8081;
let items = [];

app.use(express.json());

const itemSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().integer().min(0).required(),
});

function validateItem(req, res, next) {
  const { error } = itemSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

app.post('/items', validateItem, (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json(newItem);
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  if (items[itemId]) {
    items[itemId] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (items[itemId]) {
    items.splice(itemId, 1);
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
