DROP DATABASE IF EXISTS nearbyHomes;
CREATE DATABASE nearbyHomes;

USE nearbyHomes;

CREATE TABLE homes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  img_url VARCHAR(200),
  home_type VARCHAR(50),
  beds INT,
  description VARCHAR(1000),
  city VARCHAR(50),
  cost_per_night INT,
  reviews INT,
  avg_rating FLOAT(3, 2),
  isSuperhost BOOLEAN
);

/*
Execute by running in mysql shell:
source /Users/mitchmcdermott/Desktop/SDC/more-places-to-stay-service/database/schemas/mysqlSchema.sql

Drop database by running in mysql shell:
DROP DATABASE nearbyHomes;

*/