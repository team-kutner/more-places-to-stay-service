DROP DATABASE IF EXISTS nearbyHomes;
CREATE DATABASE nearbyHomes;

USE nearbyHomes;

CREATE TABLE homes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250),
  img_url TEXT,
  home_type VARCHAR(250),
  beds INT,
  description TEXT,
  city VARCHAR(250),
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