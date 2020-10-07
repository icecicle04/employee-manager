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
        department_name VARCHAR (30)
    );

    -- --join for employee & role -- 
    SELECT *
    FROM employee LEFT JOIN role ON employee.id = employee.id;

    -- join for employee & department -- 
    SELECT *
    FROM employee LEFT JOIN department ON employee.id = employee.id;

    -- join for employee & department & role --  
    SELECT employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.department_id, department.department_name
    FROM employee INNER JOIN role ON role.id = role.id INNER JOIN department ON department.id = department.id
    ORDER BY employee.id ASC;

    SELECT *
    FROM employee;
    SELECT *
    FROM department;
    SELECT *
    FROM role;