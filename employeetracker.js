var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadID + "\n");
    start();
})

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;
                case "View All Employees By Department":
                    viewEmployeesDepartment();
                    break;
                case "View All Employees By Manager":
                    viewEmployeesManager();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;
            }
        });
}

function viewEmployees() {
    console.log('inside viewEmployees');
}

function viewEmployeesDepartment() {
    console.log("inside viewEmployeesDeparment");
}

function viewEmployeesManager() {
    console.log("yo! viewEmployeesManager here");
}

function addEmployee() {
    console.log("addEmployee");
    connection.query("SELECT * FROM employee", function (err, results) {
        inquirer
            .prompt([
                {
                    name: "firstName",
                    type: "input",
                    message: "What is the employee's first name?"
                },
                {
                    name: "lastName",
                    type: "input",
                    message: "What is the employee's last name?"
                },
                {
                    name: "role",
                    type: "input",
                    message: "What is the employee's role?"
                },
                {
                    name: "manager",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].manager_id);
                        }
                        return choiceArray;
            },
            message: "Who is the employee's manager?"
                }
            ]).then(function (answer) {
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: answer.role,
                        manager_id: answer.manager,
                    },
                    function(err) {
                        if (err) throw err;
                        console.log("employee updated!");
                        start();
                    }
                );

            });
    });
}

function removeEmployee() {
    console.log("remove employee");
}

function updateEmployeeRole() {
    console.log("woohoo!");
}

function updateEmployeeManager() {
    console.log("mic check!");
}

