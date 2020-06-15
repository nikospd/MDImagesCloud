CREATE DATABASE nodelogin;
USE nodelogin;

CREATE TABLE accounts (
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL
);

INSERT INTO accounts (username, password) VALUES ('test', 'test');