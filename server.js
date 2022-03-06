

var connection = require('./sql/connection');
const inquirer = require("inquirer");
require("console.table");
// const sql = require("./sql");



// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  promptUser();
});

// function which prompts the user for what action they should take
function promptUser() {

  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Please select a function:",
      choices: [
        "View Employees",
        "View Employees by Department",
        "Add an Employee",
        "Remove an Employee",
        "Update an Employee Role",
        "Add a Role",
        "End"]
    })
    .then(function ({ task }) {
      switch (task) {
        case "View Employees":
          viewEmp();
          break;
        case "View Employees by Department":
          viewEmpByDep();
          break;

        case "Add an Employee":
          addEmp();
          break;
        case "Remove an Employee":
          removeEmp();
          break;
        case "Update an Employee Role":
          updateEmpRole();
          break;
        case "Add a Role":
          addRole();
          break;


        case "End":
          connection.end();
          break;
      }
    });
}

function viewEmp() {
  console.log("Displaying employees\n");

  var query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`

  connection.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Employees Displayed!\n");

    promptUser();
  });

}

function viewEmpByDep() {
  console.log("Displaying employees by department\n");

  var query =
    `SELECT d.id, d.name, r.salary AS budget
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  GROUP BY d.id, d.name`

  connection.query(query, function (err, res) {
    if (err) throw err;

    const depChoices = res.map(data => ({
      value: data.id, name: data.name
    }));

    console.table(res);
    console.log("Displaying Departments:\n");

    promptDepartment(depChoices);
  });
 
}

function promptDepartment(depChoices) {

  inquirer
    .prompt([
      {
        type: "list",
        name: "depId",
        message: "Please select a department!",
        choices: depChoices
      }
    ])
    .then(function (answer) {
      console.log("answer ", answer.depId);

      var query =
        `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department 
  FROM employee e
  JOIN role r
	ON e.role_id = r.id
  JOIN department d
  ON d.id = r.department_id
  WHERE d.id = ?`

      connection.query(query, answer.depId, function (err, res) {
        if (err) throw err;

        console.table("response", res);
        console.log(res.affectedRows + "Displaying Employees\n");

        promptUser();
      });
    });
}


function addEmp() {
  console.log("Employee Assigned!")

  var query =
    `SELECT r.id, r.title, r.salary 
      FROM role r`

  connection.query(query, function (err, res) {
    if (err) throw err;

    const roleChoices = res.map(({ id, title, salary }) => ({
      value: id, title: `${title}`, salary: `${salary}`
    }));

    console.table(res);
    console.log("Role to be Assigned?");

    promptInsert(roleChoices);
  });
}

function promptInsert(roleChoices) {

  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Employee's first name?"
      },
      {
        type: "input",
        name: "last_name",
        message: "Employee's last name?"
      },
      {
        type: "list",
        name: "roleId",
        message: "Employee role?",
        choices: roleChoices
      },

    ])
    .then(function (answer) {
      console.log(answer);

      var query = `INSERT INTO employee SET ?`
      connection.query(query,
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        function (err, res) {
          if (err) throw err;

          console.table(res);
          console.log(res.insertedRows + "Successfully Assigned!\n");

          promptUser();
        });
    });
}


function removeEmps() {
  console.log("Deleting an employee");

  var query =
    `SELECT e.id, e.first_name, e.last_name
      FROM employee e`

  connection.query(query, function (err, res) {
    if (err) throw err;

    const delEmpChoices = res.map(({ id, first_name, last_name }) => ({
      value: id, name: `${id} ${first_name} ${last_name}`
    }));

    console.table(res);
    console.log("ArrayToDelete!\n");

    promptDelete(delEmpChoices);
  });
}


function promptDelete(delEmpChoices) {

  inquirer
    .prompt([
      {
        type: "list",
        name: "empId",
        message: "Which employee do you want to remove?",
        choices: delEmpChoices
      }
    ])
    .then(function (answer) {

      var query = `DELETE FROM employee WHERE ?`;
      connection.query(query, { id: answer.empId }, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log(res.affectedRows + "Deleted!\n");

        promptUser();
      });

    });
}

function updateEmpRole() { 
  empArr();

}

function empArr() {
  console.log("Updating an employee");

  var query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  JOIN role r
	ON e.role_id = r.id
  JOIN department d
  ON d.id = r.department_id
  JOIN employee m
	ON m.id = e.manager_id`

  connection.query(query, function (err, res) {
    if (err) throw err;

    const empChoices = res.map(({ id, first_name, last_name }) => ({
      value: id, name: `${first_name} ${last_name}`      
    }));

    console.table(res);
    console.log("empArr To Update!\n")

    roleArr(empChoices);
  });
}

function roleArr(empChoices) {
  console.log("Updating role");

  var query =
    `SELECT r.id, r.title, r.salary 
  FROM role r`
  let roleChoices;

  connection.query(query, function (err, res) {
    if (err) throw err;

    roleChoices = res.map(({ id, title, salary }) => ({
      value: id, title: `${title}`, salary: `${salary}`      
    }));

    console.table(res);
    console.log("roleArr to Update!\n")

    empRole(empChoices, roleChoices);
  });
}

function empRole(empChoices, roleChoices) {

  inquirer
    .prompt([
      {
        type: "list",
        name: "empId",
        message: "Which employee should be assigned this role?",
        choices: empChoices
      },
      {
        type: "list",
        name: "roleId",
        message: "Which role would you like to update?",
        choices: roleChoices
      },
    ])
    .then(function (answer) {

      var query = `UPDATE employee SET role_id = ? WHERE id = ?`
      connection.query(query,
        [ answer.roleId,  
          answer.empId
        ],
        function (err, res) {
          if (err) throw err;

          console.table(res);
          console.log(res.affectedRows + "Successfully Updated!");

          promptUser();
        });
    });
}



function addRole() {

  var query =
    `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    JOIN role r
    ON e.role_id = r.id
    JOIN department d
    ON d.id = r.department_id
    GROUP BY d.id, d.name`

  connection.query(query, function (err, res) {
    if (err) throw err;

    const depChoices = res.map(({ id, name }) => ({
      value: id, name: `${id} ${name}`
    }));

    console.table(res);
    console.log("Department array!");

    addEmpRole(depChoices);
  });
}

function addEmpRole(depChoices) {

  inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "Role title?"
      },
      {
        type: "input",
        name: "roleSalary",
        message: "Role Salary?"
      },
      {
        type: "list",
        name: "depId",
        message: "Department?",
        choices: depChoices
      },
    ])
    .then(function (answer) {

      var query = `INSERT INTO role SET ?`

      connection.query(query, {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.depId
      },
        function (err, res) {
          if (err) throw err;

          console.table(res);
          console.log("Role Assigned!");

          promptUser();
        });

    });
}

