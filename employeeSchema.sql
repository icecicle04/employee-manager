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
        id INT NOT NULL
        AUTO_INCREMENT,
    title VARCHAR
        (30),
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY KEY
        (id)
    );

        CREATE TABLE department
        (
            id INT NOT NULL
            AUTO_INCREMENT,
    department_name VARCHAR
            (30),
    PRIMARY KEY
            (id)
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

            INSERT INTO role
                (title, salary, department_id)
            VALUES
                ("Developer", 32000, 1);

            INSERT INTO department
                (department_name)
            VALUES
                ("Technology");