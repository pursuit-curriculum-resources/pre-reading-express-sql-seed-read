DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE colors (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 is_favorite BOOLEAN
);