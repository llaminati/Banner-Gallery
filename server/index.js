const express = require('express');
const db = require('../db/index.js');

const app = express();
const port = 3001;

app.use('/:listing/banner/images', express.static('public'));
app.use(express.static('public'));

app.get('/api/:listing/banner/images', (req, res) => {
  db.getImagesFromListing(req.params.listing, (error, images) => {
    if (error) { return error; }
    res.send(images);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));