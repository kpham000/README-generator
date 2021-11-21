// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
// const questions = [];
promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        message: 'Title',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Description',
        name: 'description',
        },
        {
        type: 'input',
        message: 'Installation',
        name: 'installation',
        },
        {
        type: 'input',
        message: 'Usage',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'Contribution',
        name: 'contribution',
        },
        {
        type: 'input',
        message: 'Testing',
        name: 'testing',
        },
        {
        type: 'list',
        message: 'License',
        name: 'licensing',
        choices: [
            "Apache",
            "BSD",
            "Eclipe",
            "GNU",
            "IBM",
            "MIT",
            "Mozilla",
            "Zlib"
            ]
        },
        {
        type: 'input',
        message: 'Github username',
        name: 'github',
        },
        {
        type: 'input',
        message: 'Email',
        name: 'email',
        },
    ])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const inputs = await promptUser();
        const generateContent = generateMarkdown(inputs);
        await writeFileAsync('README.md', generateContent);
        console.log('logged to README.md');
    }   
    
    catch(err) { 
        console.log(err);
    }
}

// Function call to initialize app
init();

