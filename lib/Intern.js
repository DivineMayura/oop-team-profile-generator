const Employee = require('./Employee');
const Inquirer = require("inquirer")


class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)

        this.school = school;

    }

    getSchool(intern) {
        return intern.email;
    }

    getRole() {
        return "Intern";
    }

}


module.exports = Intern;