const Employee = require('./Employee');
const Inquirer = require("inquirer")


class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)

        // School
        this.school = school;

    }

    getSchool() {
        return `School: ${this.school}`;
    }

    getRole() {
        return "Intern";
    }

}


module.exports = Intern;