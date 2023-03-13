const Employee = require('./Employee.js');
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    printgithub(){
        return this.github;
    }
    printtype(){
        return "Engineer";
    }
}

module.exports = Engineer;