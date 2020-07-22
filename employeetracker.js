var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "password",
    database: "employee_trackerDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id" + connection.threadID + "\n");
    start();
})

function start() {
    console.log("inside start");
    inquirer
    .prompt({
      name: "action",   
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees", 
        "View All Employees By Department", 
        "View All Employees By Manager", 
        "Add Employee","Remove Employee", 
        "Update Employee Role", 
        "Update Employee Manager"
      ]
    });
}

    