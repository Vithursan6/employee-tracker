USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 950000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 115000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 300000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jason", "Jackson", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Nicholson", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kunal", "Singh", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Roger", "Bell", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Fido", "Telus", 1, 2);
