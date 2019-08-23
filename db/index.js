const mysql = require('mysql');
const mysqlConfig = require('./config.js');
var faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const seedListing = () => {
  for (var i = 1; i <= 100; i++) {
    connection.query('INSERT INTO listing (id) VALUE (?)', [i], (error, results) => {
      if (error) {
        console.log(error, 'error seed listing');
      }
    }
  )};
}

const seedImages = () => {
  for (var i = 1; i <= 100; i++) {
    let randomListing = Math.floor(Math.random() * 100);
    let randomNum = faker.random.number() + '';
    let num = Number(randomNum[0]);

    connection.query('INSERT INTO images (url, description, user_submit, date, unrelated_flag, inappropriate_flag, dislike_flag, listing_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?)', [faker.image.imageUrl(), faker.random.words(), faker.random.boolean(), faker.date.past(), num, num, num, randomListing], (error, results) => {
      if (error) {
        console.log(error, 'error seed images');
      }
    })
  }
}

seedListing();
seedImages();

module.exports = {
  seedListing,
  seedImages
}
