"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectFromTemplate = void 0;
var path_1 = __importDefault(require("path"));
var Utils_1 = require("./lib/utils/Utils");
function createProjectFromTemplate(answers, templatesDirectory) {
    var template = answers.template, projectName = answers.projectName, directoryPath = answers.directoryPath;
    var templatePath = path_1.default.join(templatesDirectory, template);
    var projectPath = path_1.default.join(directoryPath, projectName);
    Utils_1.copyTemplateFiles(templatePath, projectPath);
}
exports.createProjectFromTemplate = createProjectFromTemplate;
