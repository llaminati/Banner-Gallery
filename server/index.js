const express = require('express');
const db = require('../db/index.js');

const app = express();
const port = 3001;

app.use(express.static('public'));
app.use('/:listing', express.static('public'));

app.get('/api/:listing', (req, res) => {
  db.getImagesFromListing(req.params.listing, (error, images) => {
    if (error) { return error; }
    res.send(images);
  });
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));