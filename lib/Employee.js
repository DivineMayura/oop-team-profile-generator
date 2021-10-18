


// Employee class
class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName(employee) {
        let name = employee.name
        return name;
    }

    getId(employee) {
        let id = employee.id
        return id;
    }

    getEmail(employee) {
        let email = employee.email
        return email;
    }

    getRole() {
        return "Employee";
    }

}

// const moose = new Employee("this is a cow", 53, "emailss")
// console.log(moose)



module.exports = Employee;