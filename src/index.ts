#!/usr/bin/env node
import inquirer, { QuestionCollection, ChoiceCollection } from 'inquirer';
import isValid from 'is-valid-path';

// import * as fs from 'fs';
// import { dirname } from 'path';

const choices: ChoiceCollection = ['React', 'Node', 'Vanilla'];

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'template',
    message: 'Choose Template:',
    choices: choices,
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
    default: '.',
    validate: input => {
      console.log(isValid(input));
      if (isValid(input)) {
      }
    },
  },
];

inquirer.prompt(questions).then(as => {
  console.log(JSON.stringify(as));
});
