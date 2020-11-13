CREATE DATABASE cityDB;

USE cityDB;

CREATE TABLE cityLife (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  city VARCHAR(250),
  additional INT
);

-- source /Users/jandy/Work/fec/aquabnb-more-places-to-stay/testFolder/testSchema.sql