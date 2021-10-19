const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Class Intern which Extends Employee, creates a Intern", () => {
    const samus = new Intern("samus", 420, "samus@gmail.com", "Atlantic Ocean");
    it("Creates an intern", () => {

        expect(samus.name).toBe("samus");
        expect(samus.id).toBe(420);
        expect(samus.email).toBe("samus@gmail.com");
        expect(samus.school).toBe("Atlantic Ocean");

    })

    it("getRole, overwrites the role of this object", () => {

        function getRole() {
            return "Intern";
        }

        expect(getRole()).toBe("Intern")
    })

    it("getSchool, gets the school", () => {

        function getSchool() {
            return samus.school;
        }

        expect(getSchool()).toBe("Atlantic Ocean")
    })

    describe("getName", () => {
        it("gets the name of the new Employee", () => {

            function getName(employee) {
                let name = employee.name
                return name;
            }
            expect(getName(samus)).toBe("samus")

        })
    })

    describe("getId", () => {
        it("get the ID of the new Employee", () => {

            function getName(employee) {
                // Intended function structure
                let id = employee.id
                return id;
            }
            expect(getName(samus)).toBe(420)

        })
    })

    describe("getEmail", () => {
        it("gets the email of the new Employee", () => {
            Employee
                function getName(employee) {
                    return employee.email;
                }
                expect(getName(samus)).toBe("samus@gmail.com")

        })
    })
})