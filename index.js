const Inquirer = require("inquirer")

const Manager = require("./lib/Manager")
// const addManagers = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")

// Default unchanged question list.
// Only has list selection.
const bigAsk = [{
    type: "list",
    message: "Would you like to add a new Employee to the roster? \n --",
    choices: ["Add a new Manager.", "Add a new Engineer.", "Add a new Intern.", "That is all, thankyou."],
    name: "classSelection"
}]

// This is the array of employees
// I push them all to this, then I loop through to append it all to the page.
// super simple.
const employees = []

// Initialization function
function start() {

    Inquirer
        .prompt(bigAsk)
        .then(response => choices(response))
}

// Alternatively this could be inside a singular add person function
// which removes the repitition involved in re-creating the bigAsk/questions array.
// That would require me to refractor two main functions into one however, so I can save it for later.
function choices(response) {
    if (response.classSelection == 'Add a new Manager.') {
        addManagers()
    } else if (response.classSelection == 'Add a new Engineer.') {
        addEngineers()
    } else if (response.classSelection == 'Add a new Intern.') {
        addInterns()
    } else if (response.classSelection == 'That is all, thankyou.') {
        runItBack();
    } else console.log("Oops, that result wasn't expected. Please try again.")
}


// I can do this by passing it all through one function, would require refactor
function addManagers() {
    // let bigAsk overwrites the constantly set question list with new ones while this function is running.
    let bigAsk = [{
        type: "input",
        message: "What is the name of this Manager? \n --",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is this Managers ID? \n --",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the email for this Manager? \n --",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is this Managers office Number? \n --",
        name: "officeNumber"
    }
    ]
    // a new inquiry with the new questions, which creates a new manager.
    Inquirer
        .prompt(bigAsk)
        .then((response) => {
            // console.log(response);
            increaseManagers(response.managerName, response.managerId, response.managerEmail, response.officeNumber)
            console.log("Currently, these are the employees", employees)
            start()
        })
}


// refractor this in the future.
function addEngineers() {
    let bigAsk = [{
        type: "input",
        message: "What is the name of this Engineer? \n --",
        name: "name"
    },
    {
        type: "input",
        message: "What is this Engineers ID? \n --",
        name: "id"
    },
    {
        type: "input",
        message: "What is the email for this Engineer? \n --",
        name: "email"
    },
    {
        type: "input",
        message: "What is this Engineers GitHub username? \n --",
        name: "github"
    }
    ]

    Inquirer
        .prompt(bigAsk)
        .then((response) => {
            // console.log(response);
            increaseEngineers(response.name, response.id, response.email, response.github)
            console.log("Currently, these are the employees", employees)
            start()
        })
}


// refractor this in the future.
function addInterns() {
    let bigAsk = [{
        type: "input",
        message: "What is the name of this Intern? \n --",
        name: "name"
    },
    {
        type: "input",
        message: "What is this Interns ID? \n --",
        name: "id"
    },
    {
        type: "input",
        message: "What is this Interns Email? \n --",
        name: "email"
    },
    {
        type: "input",
        message: "What school is this Intern from? \n --",
        name: "school"
    }
    ]

    Inquirer
        .prompt(bigAsk)
        .then((response) => {
            // console.log(response);
            increaseInterns(response.name, response.id, response.email, response.school)
            console.log("Currently, these are the employees", employees)
            start()
        })
}




/////////////////////////////////////////////////////
// Used for testing
increaseManagers("--Todd", 204, "triangle", "numbies")
// increaseManagers("Rabecca",264,"square","numbors")

/////////////////////////////////////////////////////
// This increases the amount of managers by one
function increaseManagers(name, id, email, officeNumber) {
    // let whatAmI = `var ${name}`
    // whatAmI = new Manager(name, id, email, officeNumber)
    name = new Manager(name, id, email, officeNumber)
    employees.push(name)
}

///////////////////////////////////////////////////
// Used for testing
// increaseEngineers("--acacia", 824, "filiment", "tundra")
// increaseEngineers("Oak",254,"fiber","jungle")

///////////////////////////////////////////////////
// This increases the amount of Engineers by one
function increaseEngineers(name, id, email, github) {
    name = new Engineer(name, id, email, github)
    employees.push(name)
}

/////////////////////////////////////////////////
// Used for testing
increaseInterns("--coral", 234, "dolphin", "atlantic")
// increaseInterns("reef",204,"shark","ocianic")

/////////////////////////////////////////////////
// This increases the amount of interns by one
function increaseInterns(name, id, email, school) {
    name = new Intern(name, id, email, school)
    employees.push(name)
}


function runItBack() {
    for (i=0; i<employees.length;i++) {
        console.log(employees[i])
        // if(employees[i] == Manager) {

        // How DO I DO this part.
            Employee.getRole(employees[i])
                getRole(employees[i])
                console.log(getRole(), "this is 1st")
                console.log(getRole(employees[i]), "this is 2nd")
        // }

// This will be appended to the page.

        // <div class="card" style="width: 18rem;">
        //     <div class ="card-body">
        //         <h5 class ="card-title">Manager</h5>
        //         <p class ="card-text">e bulk of the card's content.</p>
        //     </div>
        //     <ul class ="list-group list-group-flush">
        //         <li class ="list-group-item">An item</li>
        //         <li class ="list-group-item">A second item</li>
        //         <li class ="list-group-item">A third item</li>
        //     </ul>
        //     <div class ="card-body">
        //         <a href="#" class ="card-link">Card link</a>
        //         <a href="#" class ="card-link">Another link</a>
        //     </div>
        // </div>


    }
}

console.log(employees)


start()

module.exports = start;