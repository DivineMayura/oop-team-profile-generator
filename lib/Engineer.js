const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email)

        // GitHub
        this.github = github;

    }

    getGitHub() {
        return `GitHub: ${this.github}`
    }

    getRole() {
        return "Engineer";
    }

}


module.exports = Engineer;