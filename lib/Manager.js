const Employee = require('./Employee.js');
class Manager extends Employee {
    constructor(name, id, email, officenum){
        super(name, id, email);
        this.officenum = officenum;
    }
    printofficenun(){
        return this.officenum;
    }
    printtype(){
        return "Manager";
    }
}

module.exports = Manager;