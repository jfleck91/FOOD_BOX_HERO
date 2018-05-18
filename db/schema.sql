
DROP DATABASE IF EXISTS foodBoxHero_db;
CREATE DATABASE foodBoxHero_db;

USE foodBoxHero_db;
CREATE TABLE donations (
  id int(11) NOT NULL AUTO_INCREMENT,

  business varchar(255),

  donorText varchar(255) DEFAULT NULL,

  address varchar(255) NOT NULL,

  quantity_avalaible int(11) NOT NULL,
 
-- food type dropdown not null

-- allergens checkboxes null allowed

  pickupDate varchar(255) NOT NULL,

  lastCall varchar(255) NOT NULL,

  created_at VARCHAR(255) NOT NULL,

  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;






USE foodBoxHero_db;
CREATE TABLE recipients (
  id int(11) NOT NULL AUTO_INCREMENT,

  recipiant_name varchar(255) NOT NULL,

  quantity_needed int(11) NOT NULL,

  recipientText varchar(255) DEFAULT NULL,

  created_at VARCHAR(255) NOT NULL,

  PRIMARY KEY (id)
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO recipients (recipiant_name,quantity_needed,recipientText,created_at,)
VALUES ('Cardinal',8,'BALABALABALA','Time_Stamp');

-- add catagory and allergens


INSERT INTO donations (business,quantity_avalaible,lastCall,address,donorText,created_at,pickupDate,)
VALUES ('Jack in the Box',11,'9pm','2526 E Bell','BALABALABALA','time_Stamp','date')
,('McDonold',59,'9:30pm','1115 E Green','BALABmacALABALA','tsdfsime_Stdffamp','date');

-- add catagory and allergens


SELECT * FROM foodBoxHero_db.recipients;
SELECT * FROM foodBoxHero_db.donations;
