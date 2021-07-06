import inquirer, {
  QuestionCollection,
  ChoiceCollection,
  Answers,
} from 'inquirer';
import isValid from 'is-valid-path';
import fs from 'fs-extra';
import { getTemplatesDirectoryPath } from './lib/utils/Utils';
import { createProjectFromTemplate } from './createProjectFromTemplate';

export interface TemplateAnswers extends Answers {
  template: string;
  projectName: string;
  directoryPath: string;
}

const templatesDir: string = getTemplatesDirectoryPath('templates');

const choices: ChoiceCollection = fs.readdirSync(templatesDir);

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'template',
    message: 'Choose Template:',
    choices: choices,
  },
  {
    type: 'input',
    name: 'projectName',
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
    name: 'directoryPath',
    message: 'Enter directory:',
    suffix: '(empty for current directory)',
    validate: input => {
      if (isValid(input)) {
        return true;
      }
      return 'Please enter a valid path';
    },
  },
];

inquirer.prompt(questions).then(answers => {
  try {
    createProjectFromTemplate(answers as TemplateAnswers, templatesDir);
  } catch (err) {
    console.log(err);
  }
});
