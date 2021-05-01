const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type:"input",
        name: "projectTitle",
        message: "What is the title of your project?"
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
        type:"input",
        name:"license",
        message:"license"
    }, {
        type:"input",
        name:"gitUsername",
        message:"Enter your GitHub username."
    }, {
        type:"input",
        name:"email",
        message:"Enter your email."
    }
]).then(result=>{
    const {projectTitle,description,installation, usage, contributing, tests, license, gitUsername, email}=result;

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
${license}

## Contributing 
${contributing}

## Tests 
${tests}

## Questions 
For any further questions, email me at:${email}. GitHub:github.com/${gitUsername}, `


    fs.writeFile("README.md",readme, function(error){
        if(error){
            console.log("There was an error with your README file.")
        } else {
            console.log("The README file was saved successfully!")

        }
    })
});














// // TODO: Include packages needed for this application
// const inquirer = require("inquirer");
// const fs = require("fs");

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName,data,function(error){
//         if(error){
//             console.log("There was an error saving your README file.")
//         } else {
//             console.log("Your README file was saved successfully!")
//         }
//     })
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

