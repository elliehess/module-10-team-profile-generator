//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./dist/templateHTML');

const myTeam = []; //empty array to store team members 

// Array of questions for user input
const createManager = function() { //function to create a manager 
     inquirer.prompt ([
      {
          type: "input",
          message: "What is the name of your team manager?",
          name: "managerName"
      },
      {
          type: "input",
          message: "What is the id # for your team manager?",
          name: "managerId"
      },
      {
          type: "input",
          message: "What is the email for your team manager?",
          name: "managerEmail"
      },
      {
          type: "input",
          message: "What is the office number for your team manager?",
          name: "managerOfficeNumber"
      },
  ])
    .then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    myTeam.push(manager)
    nextEmployee(); // to continue creating the rest of the team 
    })
  }

  const createEngineer = function () { //function to create an Engineer
    inquirer.prompt ([
      {
        type: "input",
        message: "What is the name of this engineer?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the id # for this engineer?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub user name?",
        name: "engineerGitHub"
    },
    ])
    .then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
      myTeam.push(engineer)
      nextEmployee();
    })
  }

  const createIntern = function () { //function to create an intern
    inquirer.prompt ([
      {
        type: "input",
        message: "What is the name of this intern?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the id # for this intern?",
        name: "internID"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the name of the school the intern is attending?",
        name: "internSchool"
      },
    ])
    .then(answers => {
      const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
      myTeam.push(intern)
      nextEmployee();
    })
  }

  const nextEmployee = function() { //function to choose if you would like to add another employee
    inquirer.prompt ([
      {
        type: "list",
        message: "Would you like to add another team member?", 
        choices: ["Engineer", "Intern", "My team is complete!"],
        name: "employeeOption"
      }
    ])
    .then(answers => {
      if( answers.employeeOption === 'Engineer') {
        createEngineer();
      } else if (answers.employeeOption === 'Intern') {
        createIntern();
      } else if(answers.employeeOption === 'My team is complete!') {
        console.log('Team is Complete!');

      const userContentHTML = generateHTML(myTeam); //Placeholder for html file that will be generated with user input 


        fs.writeFile('profile.html', userContentHTML, (err) => //write the HTML file with user input
        err ? console.log(err) : console.log('Successfully created profile.html!')
      );
      }
    })
  }



// Function call to initialize app
createManager();


