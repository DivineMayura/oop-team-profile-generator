const Inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


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
        addManagers();
    } else if (response.classSelection == 'Add a new Engineer.') {
        addEngineers();
    } else if (response.classSelection == 'Add a new Intern.') {
        addInterns();
    } else if (response.classSelection == 'That is all, thankyou.') {
        appendEverything();
    } else console.log("Fatal Error Occured. Please try again.")
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
            console.log("\n ++ Added new Manager to roster.\n ")
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
            console.log("\n ++ Added new Engineer to roster.\n ")
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
            console.log("\n ++ Added new Intern to roster.\n ")
            start()
        })
}


/////////////////////////////////////////////////////
// Used for testing
// increaseManagers("--Todd", 204, "triangle", "numbies")
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
// increaseInterns("--coral", 234, "dolphin", "atlantic")
// increaseInterns("reef",204,"shark","oceanic")

/////////////////////////////////////////////////
// This increases the amount of interns by one
function increaseInterns(name, id, email, school) {
    name = new Intern(name, id, email, school)
    employees.push(name)
}


var placeholder;
var arrayContainingHTMLINFO = [];

// Function that loops this whole mess for the HTML...
function runItBack() {

    // For loop 
    for (i=0; i<employees.length;i++) {
        console.log("Added: ",employees[i].getRole(), employees[i].name)
        
        // This is also pretty inefficient, I could definitely refractor this whole function and its related parts
    if(employees[i].getRole() === "Intern") {
        placeholder = employees[i].getSchool();
    } else if (employees[i].getRole() === "Manager") {
        placeholder = employees[i].getOfficeNumber();
    } else if (employees[i].getRole() === "Engineer") {
        placeholder = `GitHub: <a href="https://github.com/${employees[i].github}" class ="card-link">`+employees[i].github+`</a>`;
    } else {placeholder = "This is an error placeholder for when something goes wrong, you shouldn't really ever see this."}

        arrayContainingHTMLINFO.push(
        `<div class="card" style="width: 18rem;">
            <div class ="card-body">
                <h5 class ="card-title">${employees[i].name}</h5>
                <p class ="card-text">${employees[i].getRole()}</p>
            </div>
            <ul class ="list-group list-group-flush">
                <li class ="list-group-item">ID: ${employees[i].id}</li>
                <li class ="list-group-item">Email: ${employees[i].email}</li>
                <li class ="list-group-item">${placeholder}</li>
            </ul>
            <div class ="card-body">
            </div>
        </div>`)
        
    }
    return arrayContainingHTMLINFO.join("");
}


function appendEverything() {

// Writes a new Index.html page
fs.writeFile("./dist/index.html", 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="styleSheet" href="./roster.css"/>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Employee Roster</title>
</head>
<body>
    <header>
        <div>
            <h2 id="pageTop">
                Team Roster
            </h2>
        </div>
    </header>
    <div id="everything">
        ${runItBack()}
    </div>
    <!-- Bootstrap JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`, (err) => err ? console.error(err, "If this message is being played, it errored.") : console.log("Okay, Your new HTML can be found in the 'dist' folder! Feel free to modify this as you see fit."))

// Writes a new css sheet for that Index.html.
fs.writeFile("./dist/roster.css",`#everything {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    height: auto;
    justify-content: space-evenly;
    padding: 100px;
}

#pageTop {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background-color: black;
    box-shadow: 10px 0px 50px 20px #ef0d50;
    color: #05F4B7;
    text-shadow: 0px 0px 30px white;
}

.card-body {
    color: black;
    background-color: aquamarine;
    text-align: center;
}

.card {
    box-shadow: 0px 10px 5px 1px grey;
    margin: 10px;
}`, (err) => err ? console.error(err, "If this message is being played, it errored.") : console.log("Okay, Your new CSS can be found in the 'dist' folder! Feel free to modify this as you see fit."))
}



start()
// 300 is kind of a cool number
// 301 is not as cool.