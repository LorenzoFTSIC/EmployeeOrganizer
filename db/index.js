const config = require("./config.js");

class EmployeeDB {

  constructor(config) {
    this.config = config;
  }


  findEmployees() {
    return this.config.promise().query("SELECT * FROM employees");
  }

  findDepartments() {
    return this.config.promise().query("SELECT name FROM department");
  }

  viewRolesTitle() {
    return this.config.promise().query("SELECT role.title FROM role");
  }


  addDept(answer) {
    return this.config.promise().query("INSERT into department SET ? ", {
      name: answer.newDepartment,
    });
  }


  addEmployeeRole(answer) {
    console.log(answer);
    console.log("inside addEmployeeRole");
    return this.config.promise().query("INSERT into role SET ? ", {
      title: answer.title,
      salary: answer.salary,
      department_id: answer.department_id,
    });
  }

  addNewEmployee(answer) {
    return this.config.promise().query("INSERT INTO employees SET ? ",
    {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id,
    });
  }

  updateEmployeeRole(answer) {
    return this.config.promise().query(" INSERT INTO employees SET ? ",
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role: answer.role
        
      });
  }

  
}
module.exports = new EmployeeDB(config);