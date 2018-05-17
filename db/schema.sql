
DROP DATABASE IF EXISTS foodBoxHero_db;
CREATE DATABASE foodBoxHero_db;

USE foodBoxHero_db;
CREATE TABLE donations (
  id int(11) NOT NULL AUTO_INCREMENT,

  business varchar(255),

  foodtype varchar(255) NOT NULL,

  quantity_avalaible int(11) NOT NULL,

  lastCall varchar(255) NOT NULL,

  address varchar(255) NOT NULL,

  donorText varchar(255) DEFAULT NULL,

  donated_at VARCHAR(255) NOT NULL,

  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;






USE foodBoxHero_db;
CREATE TABLE recipients (
  id int(11) NOT NULL AUTO_INCREMENT,

  recipiant_name varchar(255) NOT NULL,

  quantity_needed int(11) NOT NULL,

  recipientText varchar(255) DEFAULT NULL,

  PRIMARY KEY (id)
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO recipients (recipiant_name,quantity_needed,recipientText)
VALUES ('Cardinal',8,'BALABALABALA');



INSERT INTO donations (business,foodtype,quantity_avalaible,lastCall,address,donorText,donated_at)
VALUES ('Jack in the Box','Mexican',11,'9pm','2526 E Bell','BALABALABALA','time_Stamp')
,('McDonold','African',59,'9:30pm','1115 E Green','BALABmacALABALA','tsdfsime_Stdffamp');

SELECT * FROM foodboxhero_db.donations;

SELECT * FROM foodboxhero_db.recipients;
