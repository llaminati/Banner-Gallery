const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const seedListing = () => {
  for (var i = 1; i <= 100; i++) {
    connection.query('INSERT INTO listing (listing) VALUE (?)', [`L${i}`], (error, results) => {
      if (error) { console.log(error); }
    });
  }
};

const seedImages = () => {
  for (var i = 1; i <= 100; i++) {
    let randomUnrelatedFlag = Math.floor(Math.random() * 3);
    let randomInappropriate = Math.floor(Math.random() * 3);
    let randomDislike = Math.floor(Math.random() * 3);
    let randomListing = Math.floor(Math.random() * 100);

    // prevents listing from being 0
    if (randomListing === 0) {
      randomListing++;
    }

    connection.query('INSERT INTO images (url, description, user_submit, date, unrelated_flag, inappropriate_flag, dislike_flag, listing_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?)', [faker.image.imageUrl(), faker.random.words(), faker.random.boolean(), faker.date.past(), randomUnrelatedFlag, randomInappropriate, randomDislike, randomListing], (error, results) => {
      if (error) { console.log(error); }
    });
  }
};

seedListing();
seedImages();

module.exports = {
  seedListing,
  seedImages
};