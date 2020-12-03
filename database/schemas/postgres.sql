DROP DATABASE IF EXISTS homesservice;
CREATE DATABASE homesservice;

\c homesservice;

CREATE TABLE homes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250),
  img_url TEXT,
  home_type VARCHAR(250),
  beds INT,
  description TEXT,
  city VARCHAR(250),
  cost_per_night INT,
  reviews INT,
  avg_rating NUMERIC(3, 2),
  isSuperhost BOOLEAN
);
