// dependencies

const mysql = require("mysql");
const inquirer = require("inquirer");

// connections

const connection = mysql.createConnection({
  port: 3306,
  user: "root",
  password: "Braves2020",
  database: "employee_DB",
});

// inquirer promp for CL goes here
