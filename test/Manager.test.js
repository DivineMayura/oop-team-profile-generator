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
})

