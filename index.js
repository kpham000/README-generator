// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () =>
    inquirer.prompt([
        {
            type: ,
            name: ,
            message: ,
        },
        {
            type: ,
            name: ,
            message: ,
        },
        {
            type: ,
            name: ,
            message: ,
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}
  
// Function call to initialize app
const init = () => {
    const init= inquirer.prompt({
        type: "input",
        message: "generate the README!",
        name:"msg"
    })
    fs.appendFile ("inquirer.prompt",`${data.msg}`)
    console.log("done!")
};
  
init();

