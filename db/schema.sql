
DROP DATABASE IF EXISTS foodBoxHero_db;
CREATE DATABASE foodBoxHero_db;

USE foodBoxHero_db;

CREATE TABLE donor
(
	id int NOT NULL AUTO_INCREMENT,
    foodtype VARCHAR(255), 
	quantity_avalaible INT(11),
    timewindow VARCHAR(255),
    location VARCHAR(255),
    
    
	PRIMARY KEY (id)
);


USE foodBoxHero_db;
CREATE TABLE recipient
(
	id int NOT NULL AUTO_INCREMENT,

	recipiant_name VARCHAR(255),
    quantity_needed INT(11),
    
    
	PRIMARY KEY (id)
);




