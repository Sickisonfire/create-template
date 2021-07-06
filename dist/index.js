"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var is_valid_path_1 = __importDefault(require("is-valid-path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var Utils_1 = require("./lib/utils/Utils");
var createProjectFromTemplate_1 = require("./createProjectFromTemplate");
var templatesDir = Utils_1.getTemplatesDirectoryPath('templates');
var choices = fs_extra_1.default.readdirSync(templatesDir);
var questions = [
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
        validate: function (input) {
            var pass = input.match(/^[a-z0-9-_]+$/i);
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
        validate: function (input) {
            if (is_valid_path_1.default(input)) {
                return true;
            }
            return 'Please enter a valid path';
        },
    },
];
inquirer_1.default.prompt(questions).then(function (answers) {
    try {
        createProjectFromTemplate_1.createProjectFromTemplate(answers, templatesDir);
    }
    catch (err) {
        console.log(err);
    }
});
