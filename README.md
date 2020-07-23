# Using MySQL to track employees
I am builiding a command line application that will use a MySQL database to create and track employees. The purpose of this excercise is to build CRUD (create, read, update, delete) skills using SQL statements to interact with stored data.  

## User Story
As a business owner, I want to be able to view and manage the departments, roles, and employees in my company, so that I can organize and plan my business


* Employee table will have a unique id, first name, last name, rode ID, and manager ID.
* Roles table will have id, title, salary, and department ID
* Departments table will have an id and the name of the department 

## Installation
I used MySQL to store the data and node.js to build the command line interface using the inquirer library. 

Check out inquirer [Inquirer](https://www.npmjs.com/package/inquirer)
and node [Node](https://nodejs.org/en/)
and MySQL [MySQL](https://dev.mysql.com/doc/)

## Key Code Snippets
A few key SQL queries that helped display data in the format desired: 

A left join to bring together different elements from disparate tables was the highlight of my SQL learning. 
```
function viewEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, roles.title, roles.salary FROM employee LEFT JOIN roles on employee.id = roles.id;", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}
```

### Link to deployed Team Profile generator
[Employee-Tracker](https://github.com/crackedsnowboard/employee-tracker)

#### GIF of Applicaton

![App](https://media.giphy.com/media/ifSwVbb5ci6NgekwtH/giphy.gif)


#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)

