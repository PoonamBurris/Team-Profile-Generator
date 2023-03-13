const Employee = require('./Employee.js');
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    printschool(){
        return this.school;
    }
    printtype(){
        return "Intern";
    }
}

module.exports = Intern;