// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the title of this application?',
        },
        {
            type: 'input',
            name: 'link',
            message: 'Link to deployed app',
        },
        {
            type: 'input',
            name: 'tech',
            message: 'list of tech used',
        },
        {
            type: 'input',
            name: 'describe',
            message: 'description of your apppliation',
        },
        {
            type: 'input',
            name: 'license',
            message: 'include license (usually MIT)',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'your contact info',
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

