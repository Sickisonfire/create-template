import inquirer, { QuestionCollection } from 'inquirer';

// import * as fs from 'fs';
// import { dirname } from 'path';

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'template',
    message: 'Choose Template:',
    choices: ['React', 'Node', 'Vanilla', 'Vue'],
  },
  {
    type: 'input',
    name: 'project-name',
    message: 'Enter Project name:',
    validate: input => {
      const pass: boolean = input.match(/^[a-z0-9-_]+$/i);
      if (pass) {
        return true;
      }
      return 'Please enter a valid name';
    },
  },
  {
    type: 'input',
    name: 'directory',
    message: 'Enter directory:',
  },
];

inquirer.prompt(questions).then(as => {
  console.log(JSON.stringify(as));
});
