DROP KEYSPACE IF EXISTS homes;
CREATE KEYSPACE IF NOT EXISTS homes
  WITH REPLICATION = {
    'class' : 'NetworkTopologyStrategy',
    'datacenter1' : 1
  };

USE homes;


CREATE TABLE IF NOT EXISTS homes (
  id INT PRIMARY KEY,
  name VARCHAR,
  img_url TEXT,
  home_type VARCHAR,
  beds INT,
  description TEXT,
  city VARCHAR,
  cost_per_night INT,
  reviews INT,
  avg_rating DECIMAL,
  isSuperhost BOOLEAN
);

