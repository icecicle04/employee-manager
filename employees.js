// dependencies

const mysql = require("mysql");
const inquirer = require("inquirer");
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

connection.connect(function (err) {
  if (err) throw err;
});

// inquirer promp for CL goes here

// listener

// app.listen(PORT, () => {
//   console.log(`App is running on http://localhost:${PORT}`);
// });
