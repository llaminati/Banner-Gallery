const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const seedListings = () => {
  for (var i = 1; i <= 100; i++) {
    connection.query('INSERT INTO listings (listings) VALUE (?)', [`L${i}`], (error, results) => {
      if (error) { console.log(error); }
    });
  }
};

const seedImages = () => {
  for (var i = 1; i <= 100; i++) {
    let imageUrl = `https://llaminati-images.s3-us-west-1.amazonaws.com/${i}.jpg`;

    connection.query('INSERT INTO images (url, description, user_submit, date, unrelated_flag, inappropriate_flag, dislike_flag) VALUE (?, ?, ?, ?, ?, ?, ?)', [imageUrl, faker.lorem.words(), faker.random.boolean(), faker.date.past(), 0, 0, 0], (error, results) => {
      if (error) { console.log(error); }
    });
  }
};

const seedListingsImages = () => {
  let amountOfImages = 0;

  while (amountOfImages < 1000) {
    let randListingId = Math.floor(Math.random() * 100);
    let randImageId = Math.floor(Math.random() * 100);

    if (randListingId === 0) { randListingId++; }
    if (randImageId === 0) { randImageId++; }

    connection.query('INSERT INTO listings_images (listing_id, image_id) VALUE (?, ?)', [randListingId, randImageId], (error, results) => {
      if (error) { console.log(error); }
    });

    amountOfImages++;
  }
};

seedListings();
seedImages();
seedListingsImages();