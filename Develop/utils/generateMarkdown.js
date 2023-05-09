// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  let badge = '';

  switch (license.toLowerCase()) {
    case 'mit':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'gpl 3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default:
      badge = '';
      break;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  let link = '';

  switch (license.toLowerCase()) {
    case 'mit':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'gpl 3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      link = '';
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License
This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
