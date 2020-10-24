DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR
    (30) NOT NULL,
    last_name VARCHAR
    (30) NOT NULL,
    role_id INT NOT NULL,
    INDEX role_ind (role_id),
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT NOT NULL
    );

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR (30),
    salary DECIMAL,
    department_id INTEGER
    );

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR (30)
    );

-- --join for employee & role -- 
SELECT *
FROM employee LEFT JOIN role ON employee.id = employee.id;

-- join for employee & department -- 
SELECT *
FROM employee LEFT JOIN department ON employee.id = employee.id;

-- join for employee & department & role --  
SELECT employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.role_title, role.salary, role.department_id, department.department_name
FROM employee INNER JOIN role ON role.id = role.id INNER JOIN department ON department.id = department.id
ORDER BY employee.id ASC;

SELECT *
FROM employee;
SELECT *
FROM department;
SELECT *
FROM role;