USE employees_db;

INSERT INTO department
    (department_name)

VALUES
    ("Technology"),
    ("Operations"),
    ("Services"),
    ("Human Resources");

INSERT INTO role
    (role_title, department_id)
VALUES
    ("Software Engineer", 1),
    ("CEO", 2),
    ("Data Analyst", 1),
    ("Client Service Analyst", 3),
    ("HR Coordinator", 4);