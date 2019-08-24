const express = require('express');
const db = require('../db/index.js');

const app = express();
const port = 3000;

app.use(express.static(__dirname + 'public'));

app.get('/api/L1/banner/images', (req, res) => {
  // db.getListings((error, listing) => {
  //   if (error) return error;
  //   res.send(listing);
  // });

  db.getImages((error, images) => {
    if (error) return error;
    res.send(images);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));