// TODO: Include packages needed for this application
//const generateMarkdown = require('generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'What is the title of your project'
    },
    {
        type: 'input',
        name: 'description', 
        message: 'Please enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: '
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application: ',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success!");
    });
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((response) => {

    });

}

// Function call to initialize app
init();