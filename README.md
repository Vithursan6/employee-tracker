
# Employee Tracker
<br>
<br>

---
<br>
<br>
<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
<br>
<br>

---
<br>
<br>

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Description:
A mySQL2 employee database created to keep track of employees.Tables were created using mysql2 for departments, roles and employee. The application allows the user to navigate database information as well as add and remove employees, adjust roles, salaries as well as update supervisors name. 
<br>
<br>
<br>

---
<br>
<br>
<br>

## Usage and Installation

- Download repository to local machine
- Open terminal or bash in root directory of repo
- Type and run "npm install Inquirer"
- Type and run "npm install Express"
- Type and run "npm start"
- Follow user prompts
<br>
<br>
<br>

---

<br>
<br>
<br>

## Built With:

- Inquirer
- MySQL2
- Node.js
<br>
<br>
<br>

---
<br>
<br>
<br>

## Screenshots

[Screenshot1](./content/images/pic1.png)
<br>
[Screenshot2](./content/images/pic2.png)
<br>
[Screenshot3](./content/images/pic3.png)
<br>
[Screenshot4](./content/images/pic4.png)
<br>

<br>
<br>
<br>

---
<br>
<br>
<br>

## Demonstration

- [Demo](https://youtu.be/FJDMogc28NQ)

<br>
<br>
<br>

---
<br>
<br>
<br>

## Links

Deployed Application:

 - https://Vithusan6.github.io/employee-tracker

Github Repository:

 - https://github.com/Vithusan6/employee-tracker
<br>
<br>
<br>

---
<br>
<br>
<br>

## License

MIT License

Copyright (c) 2022 Vithursan6

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<br>
<br>
<br>

---

