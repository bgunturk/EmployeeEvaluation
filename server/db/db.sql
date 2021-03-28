/*
 CREATE TABLE developers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
 ); 


 // INSERT INTO developers (id, name, location, price_range) values
 //(1, 'Harry','Istanbul', 2);

 DROP TABLE developers;
 */