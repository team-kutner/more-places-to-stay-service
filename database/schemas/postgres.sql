DROP DATABASE IF EXISTS homesservice;
CREATE DATABASE homesservice;

\c homesservice;

CREATE TABLE homes (
  homeID SERIAL PRIMARY KEY,
  name VARCHAR(100),
  img_url VARCHAR(200),
  home_type VARCHAR(50),
  beds INT,
  description VARCHAR(1000),
  city VARCHAR(50),
  cost_per_night INT,
  reviews INT,
  avg_rating NUMERIC(3, 2),
  isSuperhost BOOLEAN
);
