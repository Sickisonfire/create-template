"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createProjectFromTemplate_1 = require("./createProjectFromTemplate");
var Utils_1 = require("./lib/utils/Utils");
var path_1 = require("path");
jest.mock('path', function () { return ({
    join: jest
        .fn()
        .mockReturnValueOnce('./templates/testTemplate')
        .mockReturnValueOnce('./testName'),
}); });
jest.mock('./lib/utils/Utils', function () { return ({
    copyTemplateFiles: jest.fn(),
}); });
var mockAnswer = {
    directoryPath: './',
    projectName: 'testName',
    template: 'testTemplate',
};
var mockTemplateDir = './templates';
describe('createProjectFromTemplate test suite', function () {
    afterEach(function () {
        jest.clearAllMocks();
    });
    it('should create files (call copyTemplateFiles)', function () {
        var templatePath = './templates/testTemplate';
        var projectPath = './testName';
        createProjectFromTemplate_1.createProjectFromTemplate(mockAnswer, mockTemplateDir);
        expect(path_1.join).toHaveBeenCalledWith(mockTemplateDir, mockAnswer.template);
        expect(path_1.join).toHaveBeenCalledWith(mockAnswer.directoryPath, mockAnswer.projectName);
        expect(Utils_1.copyTemplateFiles).toHaveBeenCalledWith(templatePath, projectPath);
    });
});
