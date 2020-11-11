CREATE DATABASE nearbyHomes;

USE nearbyHomes;

CREATE TABLE homes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  img_url TEXT,
  home_type VARCHAR(250),
  beds INT,
  description TEXT,
  cost_per_night INT
);

/*
Execute by running in mysql shell:
source /Users/jandy/Work/fec/aquabnb-more-places-to-stay/schema.sql

Drop database by running in mysql shell:
DROP DATABASE nearbyHomes;

*/
