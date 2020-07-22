USE employee_trackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", "34", "35"), ("Alf", "LNU", "24", "25"), ("Zach", "Morris", "14", "15");

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Dev", "200000", "701"), ("Manager", "150000", "725"), ("Intern", "40000", "780");

INSERT INTO department (name_department)
VALUEs ("Engineering"), ("Executive"), ("Operations");


