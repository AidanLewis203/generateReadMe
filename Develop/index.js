// TODO: Include packages needed for this application
const generateMarkdown = require('generateMarkdown')
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

function generateREADME(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
Email: ${data.email}
`;
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((response) => {
        const markdown = generateMarkdown(response);
        writeToFile('test.md', markdown);
    });

}

// Function call to initialize app
init();