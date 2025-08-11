// index.js
const express = require('express');
const app = express();
const port = 3000; // Change port for each service if running together

app.get('/', (req, res) => {
  res.send('Its a User Service!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
