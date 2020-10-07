DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee
(
    id INT NOT NULL
    AUTO_INCREMENT,
    first_name VARCHAR
    (30),
    last_name VARCHAR
    (30),
    role_id INT NOT NULL,
    manager_id INTEGER,
    PRIMARY KEY
    (id)
);

    CREATE TABLE role
    (
        id INT REFERENCES employee,
        title VARCHAR (30),
        salary DECIMAL,
        department_id INTEGER
    );

    CREATE TABLE department
    (
        id INT REFERENCES employee,
        name VARCHAR (30)
    );

    SELECT *
    FROM employee;
    SELECT *
    FROM department;
    SELECT *
    FROM role;