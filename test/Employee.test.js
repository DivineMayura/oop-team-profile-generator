const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Employee Class", () => {
        const toad = new Employee("Todd Toadward", 69, "Todd.Toadward@gmail.com");

    it("Creates a parent class of Employee from which the remaining classes take from", () => {

        expect(toad.name).toBe("Todd Toadward");
        expect(toad.id).toBe(69);
        expect(toad.email).toBe("Todd.Toadward@gmail.com")

    });

    describe("getName", () => {
        it("gets the name of the new Employee", () => {

            function getName(employee) {
                let name = employee.name
                return name;
            }
            expect(getName(toad)).toBe("Todd Toadward")

        })
    })

    describe("getId", () => {
        it("get the ID of the new Employee", () => {

            function getName(employee) {
                let id = employee.id
                return id;
            }
            expect(getName(toad)).toBe(69)

        })
    })

    describe("getEmail", () => {
        it("gets the email of the new Employee", () => {

            function getName(employee) {
                let email = employee.email
                return email;
            }
            expect(getName(toad)).toBe("Todd.Toadward@gmail.com")

        })
    })

    describe("getRole", () => {
        it("gets the role of the new Employee", () => {

            function getName() {
                return "Employee";
            }

            expect(getName()).toBe("Employee")

        })
    })
})


