const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const getListings = (cb) => {
  connection.query('SELECT * FROM listing', (error, results) => {
    if (error) return error;
    cb(null, results);
  })
};

const getImages = (cb) => {
  connection.query('SELECT * FROM images', (error, results) => {
    if (error) return error;
    cb(null, results);
  })
};

module.exports = {
  getListings,
  getImages
}