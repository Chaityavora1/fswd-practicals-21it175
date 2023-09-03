const express = require('express');
const app = express();




app.use(express.json());




app.get('/json', (req, res) => {
  res.status(200).json({ message: 'GET request successful', method: 'GET' });
});




app.post('/json', (req, res) => {
  const requestData = req.body;
  res.status(201).json({ message: 'POST request successful', method: 'POST', data: requestData });
});




app.put('/put', (req, res) => {
  res.status(200).send('PUT request successful');
});




app.delete('/delete', (req, res) => {
  res.status(204).send('DELETE request successful');
});




app.get('/custom', (req, res) => {
  res.status(418).send("I'm a teapot");
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
