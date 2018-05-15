
DROP DATABASE IF EXISTS foodBoxHero_db;
CREATE DATABASE foodBoxHero_db;

USE foodBoxHero_db;
CREATE TABLE donor (
  id int(11) NOT NULL AUTO_INCREMENT,
  organization_name varchar(255),
  foodtype varchar(255) NOT NULL,
  quantity_avalaible int(11) NOT NULL,
  timewindow varchar(255) NOT NULL,
  location varchar(255) NOT NULL,
  donortext varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;






USE foodBoxHero_db;
CREATE TABLE recipient (
  id int(11) NOT NULL AUTO_INCREMENT,
  recipiant_name varchar(255) NOT NULL,
  quantity_needed int(11) NOT NULL,
  recipienttext varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO recipient (recipiant_name,quantity_needed, recipienttext)
VALUES ('Cardinal',8,'BALABALABALA');



INSERT INTO donor (organization_name,foodtype,quantity_avalaible, timewindow,location,donortext)
VALUES ('JACK IN THE BOX','Mexican',11,'8pm to 9pm','2526 E Bell','BALABALABALA');


SELECT * FROM foodboxhero_db.donor;

SELECT * FROM foodboxhero_db.recipient;
