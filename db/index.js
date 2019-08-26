const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const getImagesFromListing = (listingId, cb) => {
  connection.query('SELECT * FROM images WHERE listing_id IN (SELECT id FROM listing WHERE listing = ?)', [listingId], (error, results) => {
    if (error) { console.log(error); }
    cb(null, results);
  });
};

module.exports = {
  getImagesFromListing
};