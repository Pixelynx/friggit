DROP DATABASE IF EXISTS friggit_db;
CREATE DATABASE friggit_db;

\c friggit_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  display_name VARCHAR NOT NULL
);

CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  link_twitter BOOLEAN,
  about TEXT
);

CREATE TABLE sub_friggits (
  id SERIAL PRIMARY KEY,
  admin_id INT REFERENCES users(id)
);

CREATE TABLE subscriptions (
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  page_id INT REFERENCES sub_friggits(id) ON DELETE CASCADE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  title VARCHAR NOT NULL,
  post TEXT,
  page_id INT REFERENCES sub_friggits(id) ON DELETE CASCADE,
  _link VARCHAR,
  thumbnail VARCHAR,
  oc BOOLEAN,
  nsfw BOOLEAN,
  spoiler BOOLEAN
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  page_id INT REFERENCES sub_friggits(id) ON DELETE CASCADE
);

CREATE TABLE upvote (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  comment_id INT REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE downvote (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  comment_id INT REFERENCES comments(id) ON DELETE CASCADE
);
