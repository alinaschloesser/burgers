-- CREATE DATABASE burgers_db;

Use burgers_db;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255),
devoured boolean default 0,
burger_date timestamp default current_timestamp,
PRIMARY KEY(id)
);