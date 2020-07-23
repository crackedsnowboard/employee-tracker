USE employee_trackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", "34", "3"), ("Alf", "Mars", "24", "2"), ("Zach", "Morris", "14", "1");

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Dev", "200000", "701"), ("Manager", "150000", "725"), ("Intern", "40000", "780");

INSERT INTO department (name_department)
VALUES ("Engineering"), ("Executive"), ("Operations");


