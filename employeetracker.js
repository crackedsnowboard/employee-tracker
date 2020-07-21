var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = requirer("console.table");

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
})

inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee","Remove Employee", "Update Employee Role", "Update Employee Manager"],
            name: "choice"
    }

])
    
    