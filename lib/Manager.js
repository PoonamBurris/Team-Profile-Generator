const Employee = require('lib/Employee.js');
class Manager extends Employee {
    constructor(name, id, email, officenum){
        super(name, id, email);
        this.school = school;
    }
    printofficenun(){
        return this.officenum;
    }
    printtype(){
        return "Manager";
    }
}

module.exports = Manager;