DROP DATABASE IF EXISTS banner_images;

CREATE DATABASE banner_images;

USE banner_images;

CREATE TABLE listing (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  listing varchar(5) NOT NULL
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url varchar(2083) NOT NULL,
  description varchar(255),
  user_submit boolean,
  date date,
  unrelated_flag int,
  inappropriate_flag int,
  dislike_flag int,
  listing_id int,
  FOREIGN KEY (listing_id)
  REFERENCES listing(id)
);
