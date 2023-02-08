//Packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// Array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a short description about the what, how, and why of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can users use this project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can users contribute to your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'If you have written any tests for your project, list examples of how to run them'
      },
    {
      type: 'list',
      name: 'license',
      message: 'Which license did you use?',
      choices: ['MIT License','Boost Software License 1.0', 'Apache License 2.0', 'GNU General Public License v2.0', 'Other' ]
    },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        },
    ]);
};

//Placeholder for README file that will be generated with user input 
const generateREADME = ({ name, description, installation, usage, contribute, test, license, github, email }) => {


let badge = "";
//use the switch function to switch between the badges depending on what license the user chooses 
switch (license) {
    case 'MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      ;
      break;
    case 'Boost Software License 1.0':
      badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      ;
      break;
    case 'Apache License 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      ;
      break;
    case 'GNU General Public License v2.0':
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        ;
        break;
    default:
      console.log("oops");
}

return `# ${name}
${badge}

## Description

${description}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contribute}

## Tests 

${test}

## License

${license}

## Badges

${badge}

## Questions 

Any questions? 
Feel free to check out my work here:
[${github}](${github})

Or you can reach out to me at my email address below:
${email}
`;}
// Function to initialize app
const init = () => {
    promptUser()
    //Function to write README file
      .then((answers) => writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();


