const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre serveur Express !');
});

const server = app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app; // Exporter l'application Express
