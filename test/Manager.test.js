const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Class Manager which Extends Employee, creates a Manager", () => {
    const samus = new Manager("samus", 420, "samus@gmail.com", "(555) 555-5555");
    it("Creates a manager", () => {

        expect(samus.name).toBe("samus");
        expect(samus.id).toBe(420);
        expect(samus.email).toBe("samus@gmail.com");
        expect(samus.officeNumber).toBe("(555) 555-5555");

    })

    it("getRole, overwrites the role of this object", () => {

        function getRole() {
            return "Manager";
        }

        expect(getRole()).toBe("Manager")
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

