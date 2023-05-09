// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [    
    {        
        type: 'input',        
        name: 'Github',        
        message: 'What is your Github account',      
    },      
    {        
        type: 'input',        
        name: 'email',        
        message: 'What is your email?',      
    },      
    {
    type: 'input',        
    name: 'title',        
    message: 'What is the title of your project?',      
    },      
    {        
        type: 'input',        
        name: 'installation',        
        message: 'Please provide details of installation',      
    },      
    {        
        type: 'input',        
        name: 'usage',        
        message: 'Please provide user usage summary',      
    },      
    {        
        type: 'input',        
        name: 'license',        
        message: 'What is your project license?',      
    },      
    {        
        type: 'input',        
        name: 'contributors',        
        message: 'Please confirm if other users may contribute',      
    },      
    {        
        type: 'confirm',        
        name: 'contributingGuidelines',        
        message: 'Do you have any contributing guidelines?',      
    },      
    {        
        type: 'input',        
        name: 'test',        
        message: 'Please provide details on how to test your app',      },];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md generated!')
  );
}

// Function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        // Generate README content using user input
        const readmeData = `# ${answers.title}
  
    ## Description
    ${answers.usage}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${answers.installation}
  
    ## Usage
    ${answers.usage}
  
    ## License
    This project is licensed under the ${answers.license} license.
  
    ## Contributing
    ${answers.contributors}
  
    ## Tests
    ${answers.test}
  
    ## Questions
    For any questions about the project, please contact [${answers.email}](mailto:${answers.email}). Visit my [GitHub](https://github.com/${answers.Github}) to see more of my work.
  `;
  
  function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadme(answers);

      fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

init();

        // Write README file
        writeToFile('README.md', readmeData);
      })
      .catch((err) => {
        console.log(err);
      });
  }