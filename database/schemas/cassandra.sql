DROP KEYSPACE IF EXISTS nearbyHomes;
CREATE KEYSPACE nearbyHomes
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE nearbyHomes;

CREATE TABLE homes (
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

