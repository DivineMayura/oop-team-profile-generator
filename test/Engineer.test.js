const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Class Engineer which Extends Employee, creates a Engineer", () => {
    const samus = new Engineer("samus", 69, "samus@gmail.com", "DivineMayura");
    it("Creates an engineer", () => {

        expect(samus.name).toBe("samus");
        expect(samus.id).toBe(69);
        expect(samus.email).toBe("samus@gmail.com");
        expect(samus.github).toBe("DivineMayura");

    })

    it("getRole, overwrites the role of this object", () => {

        function getRole() {
            return "Engineer";
        }

        expect(getRole()).toBe("Engineer")
    })

    it("getGitHub, gets the github", () => {

        function getGitHub() {
            return samus.github;
        }

        expect(getGitHub()).toBe("DivineMayura")
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
            expect(getName(samus)).toBe(69)

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