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
                "View All Departments",
                "View All Roles",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Add Department",
                "Add Role",
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
                case "View All Departments":
                    viewDepartments();
                    break;
                case "View All Roles":
                    viewRoles();
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
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
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
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}

function viewDepartments() {
    console.log("this or that");
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}

function viewRoles() {
    console.log("mouse");
    connection.query("SELECT * FROM roles", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
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
                    function (err) {
                        if (err) throw err;
                        console.log("employee updated!");
                        // console.table(results);
                        start();
                    }
                );

            });
    });
}

function addDepartment() {
    console.log("Scenario!");
    connection.query("SELECT * FROM department", function (err, results) {
        inquirer
            .prompt([
                {
                    name: "department",
                    type: "input",
                    message: "What is the department you want add?"
                }
            ]).then(function (answer) {
                connection.query(
                    "INSERT INTO department SET ?",
                    {
                        name_department: answer.department
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("deparment updated!");
                        start();
                    }
                );

            });
    });
}

function addRole() {
    console.log("Fife");
    connection.query("SELECT * FROM roles", function (err, results) {
        inquirer
            .prompt([
                {
                    name: "title",
                    type: "input",
                    message: "What is the title of the role you want add?"
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is the salary of the role you want add?"
                },
                {
                    name: "department",
                    type: "input",
                    message: "What department is the role in?"
                }
            ]).then(function (answer) {
                connection.query(
                    "INSERT INTO roles SET ?",
                    {
                        title: answer.title,
                        salary: answer.salary,
                        department_id: answer.department,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("deparment updated!");
                        start();
                    }
                );

            });
    });
}

function removeEmployee() {
    console.log("remove employee");
    connection.query("SELECT * FROM employee", function (err, results) {
        inquirer
            .prompt([
                {
                    name: "employeeID",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].id);
                        }
                        return choiceArray;
                    },
                    message: "Please select the employee's ID that you wish to remove?"

                },
            ]).then(function (answer) {
                connection.query(
                    "DELETE FROM employee WHERE ?",
                    {
                        id: answer.employeeID
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("employee deleted!");
                        start();
                    }
                );
            });
    })
}

function updateEmployeeRole() {
    connection.query("SELECT * FROM roles", function (err, results) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "update",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].id);
                        }
                        return choiceArray;
                    },
                    message: "Which role would you like to update?"
                },
                {
                    name: "title",
                    type: "input",
                    message: "What is the title of the role you want update?"
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is the salary of the role you want update?"
                },
                {
                    name: "department",
                    type: "input",
                    message: "What department is the updated role in?"
                }
            ])
            .then(function (answer) {
                // var chosenItem;
                // for (var i = 0; i < results.length; i++) {
                // if (results[i].id === answer.update) {
                connection.query(
                    "UPDATE roles SET ? WHERE ?",
                    [
                        {
                            title: answer.title,
                            salary: answer.salary,
                            department_id: answer.department
                        },
                        {
                            id: answer.update
                        }
                    ],
                    function (error) {
                        if (error) throw err;
                        console.log("This worked!");
                        start();
                    }
                );
                // }
                // }
            });
    });
}

function updateEmployeeManager() {
    console.log("mic check!");
}

