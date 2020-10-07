// dependencies

const mysql = require("mysql");
const inquirer = require("inquirer");
const { table } = require("console");
// const express = require("express");
// const { table } = require("employeeSeeds.sql");

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
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: ["Add Employee", "Delete Employee"],
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
// inquirer promp for CL goes here

// listener

console.log(`App is running on http://localhost:${PORT}`);
