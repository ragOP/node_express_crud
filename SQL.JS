use employeedb;

CREATE TABLE employee(
id int (11) DEFAULT NULL,
name varchar (45) DEFAULT NULL,
salary int(11) DEFAULT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO employee(id,name,salary)
VALUES(1,'Raghib',50000),
(2,'Taazeem',400012),
(3,'Najmi',45000);

Select * FROM employee;