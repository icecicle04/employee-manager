// dependencies

const mysql = require("mysql");
const inquirer = require("inquirer");
// const express = require("express");
// const { table } = require("employeeSeeds.sql");

// roles and department options
const roles = [
  "Software Engineer",
  "CEO",
  "Data Analyst",
  "Client Service Analyst",
  "HR Coordinator",
];
const departments = [
  "Technology",
  "Human Resources",
  "Client Services",
  "Operations",
];
// connections
// const app = express();
const PORT = 3306;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Braves2020",
  database: "employees_db",
});
let query =
  "SELECT employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.department_name";
query +=
  "FROM employee INNER JOIN role ON employee.id = employee.id INNER JOIN department ON employee.id = employee.id;";
// connection.query(query);
connection.connect(function (err) {
  if (err) throw err;
  employeePrompt();
});

function employeePrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add Employee",
        "Add Roles",
        "Add Departments",
        "View Employees",
        "View Roles",
        "View Departments",
        "Update Employee Roles",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add Employee":
          addEmployee();
          break;

        case "Add Roles":
          addRoles();
          break;

        case "Add Departments":
          addDepartments();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "View Roles":
          viewRoles();
          break;

        case "View Departments":
          viewDepartments();
          break;

        case "Update Employee Roles":
          updateEmployeeRoles();
          break;
      }
    });
}
// functions
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "employee_first_name",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "employee_last_name",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "employee_manager_id",
        type: "input",
        message: "What is the employee's manager id?",
        choices: [1, 2, 3, 4, 5],
      },
      {
        name: "employee_role_id",
        type: "input",
        message: "What is the employee's role id?",
        choices: [
          { name: "Software Engineer", value: 1 },
          { name: "CEO", value: 2 },
          { name: "Data Analyst", value: 3 },
          { name: "Client Service Analyst", value: 4 },
          { name: "Human Resources Coordinator", value: 5 },
        ],
      },
    ])
    .then(function (answer) {
      connection.query("INSERT INTO employee SET ?", {
        first_name: answer.employee_first_name,
        last_name: answer.employee_last_name,
        manager_id: answer.employee_manager_id,
        role_id: answer.employee_role_id.value,
      });
    })
    .then(function addRole() {
      inquirer
        .prompt([
          {
            name: "role_title",
            type: "list",
            message: "What is the employee's role title?",
            choices: [
              "Software Engineer",
              "CEO",
              "Data Analyst",
              "Client Service Analyst",
              "HR Coordinator",
            ],
          },
        ])
        .then(function (answer) {
          connection.query("INSERT INTO role SET ?", {
            role_title: answer.role_title,
          });
          (err, data) => {
            if (err) throw err;
          };
          console.log("Your employee has been added!");
        });
    });
}
employeePrompt();

// inquirer promp for CL goes here

// listener

console.log(`App is running on http://localhost:${PORT}`);
