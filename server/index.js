/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const db = require('../db/index.js');

const app = express({ strict: true });
const port = 3001;

app.use(compression());
app.use(express.static('public'));
app.use('/:listing', express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/:listing', (req, res) => {
  db.getImagesFromListing(req.params.listing, (error, images) => {
    if (error) { return error; }
    return res.send(images);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
