DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30), 
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10),
    PRIMARY KEY (id) 
);

CREATE TABLE roles (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2), 
    department_id INTEGER(10),
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    name_department VARCHAR(30),
    PRIMARY KEY (id)
);

