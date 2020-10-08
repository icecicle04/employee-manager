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
let query = "SELECT employee, role, department";
console.log(query);
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

        case "Delete Employee":
          deleteEmployee();
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
        name: "employee_role_id",
        type: "input",
        message: "What is the employee's role id?",
      },
      {
        name: "employee_department_id",
        type: "input",
        message: "What is the employee's department id?",
      },
    ])

    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.employee_first_name,
          last_name: answer.employee_last_name,
          role_id: answer.employee_role_id,
          manager_id: answer.employee_department_id,
        },
        function (err) {
          if (err) throw err;
          console.log("Your employee has been added!");
        }
      );
      employeePrompt();
    });
}
// inquirer promp for CL goes here

// listener

console.log(`App is running on http://localhost:${PORT}`);
