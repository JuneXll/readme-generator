//Calling packages required for running application
const inquirer = require("inquirer");
const fs = require("fs");

let badge=""

//Questions to build README
inquirer.prompt([
    {
        type:"input",
        name:"fullName",
        message:"Full Name:"
    }, {
        type:"input",
        name: "projectTitle",
        message: "Project Name:"
    }, {
        type:"input",
        name: "description",
        message: "Write a short description explaining the what, why and hows of your project."
    }, {
        type:"input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    }, {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    }, {
        type:"input",
        name: "contributing",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    }, {
        type:"input",
        name:"tests",
        message:"List test instructions if needed."
    }, {
        type:"rawlist",
        name:"license",
        message:"Choose a License",
        choices:["Apache","MIT","GNU"]
    }, {
        type:"input",
        name:"gitUsername",
        message:"GitHub Username:"
    }, {
        type:"input",
        name:"email",
        message:"Email:"
    }
]).then(result=>{
    //Result object storing the user input
    const {fullName,projectTitle,description,installation, usage, contributing, tests, license, gitUsername, email}=result;
    //Rendering the license
    renderLicense();
    //Constructing template for README
    const readme = 
`# ${projectTitle}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)

## Installation 
${installation}

## Usage 
${usage}

## License 
${badge}
Copyright (c) 2021 ${fullName}. (GitHub:(https://github.com/${gitUsername})). Licensed under the ${license} license.


## Contributing 
${contributing}

## Tests 
${tests}

## Questions 
For any further questions, email me at:${email}. GitHub:(https://github.com/${gitUsername}) `

    //Creating README file with user input. Will console log error or successful
    fs.writeFile("README.md",readme, function(error){
        if(error){
            console.log("There was an error with saving your README file.")
        } else {
            console.log("README file was saved successfully!")

        }
    })
});

//Function to render license and badge
function renderLicense(result.license){
    const apache="(https://opensource.org/licenses/Apache-2.0)"
    const apacheBadge="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

    const mit="(https://opensource.org/licenses/MIT)"
    const mitBadge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    const gnu="(https://www.gnu.org/licenses/gpl-3.0)"
    const gnuBadge="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

    if(result.license==="Apache"){
        result.license=apache;
        badge=apacheBadge;
    } else if (result.license==="MIT"){
        result.license=mit;
        badge=mitBadge;

    } else if (result.license==="GNU"){
        result.license=gnu;
        badge=gnuBadge;
    }
    console.log(result.license);
};













// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

