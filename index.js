// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import fs from 'fs';

// const fs = require('fs');

// inquirer 
// 	.prompt ([
// 	])
// 	.then((response) => {
// 		console.log(response);
// // Use user feedback for.. whatever! 
// 	})
// 	.catch((error) => {
// 		if (error.isTtyError) {

// 		} else { 
// // Something else went wrong
// 	}
// });

// TODO: Create an array of questions for user input


function init() {
    inquirer
    .prompt([
      {
          type: 'input',
          message: 'What is your Github username?', 
          name: 'username',
      },
      {
          type: 'input',
          message: 'What is your email address? ', 
          name: 'email',
      },
      {
          type: 'input',
          name: 'projectName',
          message: 'What is your project’s name?',
        },
      {
          type: 'input',
          message: 'Please write a short description of your project:', 
          name: 'description',
      },
      {
          type: 'input',
          message: 'Are there any installation needed?', 
          name: 'installation',
      },
      {
          type: 'input',
          message: 'How is the application used?', 
          name: 'usage',
      },
      {
          type: 'list',
          message: 'What kind of license should your project have? ', 
          name: 'license',
          choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
          type: 'input',
          message: 'What command should be run to install dependencies? ', 
          name: 'dependencies',
      },
      {
          type: 'input',
          message: 'What command should be run to run tests?', 
          name: 'tests',
          default: 'npm test',
      },
      {
          type: 'input',
          message: 'What does the user need to know about contributing to the repo? ', 
          name: 'contributionNotes',
      },
      ])
      .then((data) => {
          // Generate the README file using the user's input
          const filename = 'README.md';
          const licenseBadge = `![${data.license} License](https://img.shields.io/badge/license-${data.license}-green)`;
          const content = `
# ${data.projectName}
${licenseBadge}

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
This project is covered under the ${data.license} license.

## Contributing
${data.contributionNotes}

## Tests
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact ${data.username} directly at ${data.email}.
`;
          
              fs.writeFile(filename, content, (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log(`README file generated at ${filename}`);
                }
              });
            });
    // inquirer.prompt(questions).then(answers => {
    //     console.log(answers.username)
    //     console.dir(answers, { colors: true });
    // })
    
}

// Function call to initialize app
init();



// const readMeFile = `# ${answers.username}
// fs.appendFile('README.md', `${readMeFile}\n`, (err) =>
// err ? console.error(err) : console.log('Read me file created!')
// );

// TODO: Create a function to write README file
// function writeToFile(README., data) {}
// Append file readme.md 
// TODO: Create a function to initialize app
