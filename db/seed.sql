drop table houses;

CREATE TABLE houses (
id SERIAL PRIMARY KEY,
name VARCHAR(500),
address VARCHAR(500),
city VARCHAR(500),
state VARCHAR(500),
zip INTEGER
);

ALTER TABLE houses
ADD img VARCHAR(5000),
ADD rent_amount INT,
ADD mortgage INT;
-- 

INSERT INTO houses(name,address,city,state,zip,img,rent_amount,mortgage)
VALUES('Eric','123 BAller ln.','PG','CALIFORNIA',90210,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbCEixyB9PWiVIP_s_DBqWnKobc88AjoPTsXsJNczQjESjraDcg',2222,5555);

select * from houses;