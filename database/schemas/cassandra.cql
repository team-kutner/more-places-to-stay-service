DROP KEYSPACE IF EXISTS homesservice;
CREATE KEYSPACE IF NOT EXISTS homesservice
  WITH REPLICATION = {
    'class' : 'NetworkTopologyStrategy',
    'datacenter1' : 1
  };

USE homesservice;

CREATE TABLE IF NOT EXISTS homes (
  homeID INT PRIMARY KEY,
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

