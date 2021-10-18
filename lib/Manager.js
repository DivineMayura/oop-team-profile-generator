const Employee = require('./Employee');



class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)

        // Office Number
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return `Office number: ${this.officeNumber}`
    }
    getRole() {
        return "Manager";
    }

}


module.exports = Manager;