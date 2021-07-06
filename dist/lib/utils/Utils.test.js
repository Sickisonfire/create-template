"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var fs_extra_1 = __importDefault(require("fs-extra"));
require("path");
jest.mock('path');
jest.mock('fs-extra');
var mockpathExistsSync = jest.fn();
var mockEnsureDirSync = jest.fn();
var mockcopySync = jest.fn();
fs_extra_1.default.pathExistsSync = mockpathExistsSync;
fs_extra_1.default.ensureDirSync = mockEnsureDirSync;
fs_extra_1.default.copySync = mockcopySync;
var templateDirecoryPath = './templates';
var ProjectPath = './dev/projectname';
describe('Utils test suite', function () {
    afterEach(function () {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });
    it('should copy files successfuly', function () {
        var exitSpy = jest.spyOn(process, 'exit');
        mockpathExistsSync.mockImplementationOnce(function () { return false; });
        Utils_1.copyTemplateFiles(templateDirecoryPath, ProjectPath);
        expect(mockpathExistsSync).toHaveBeenCalledWith(ProjectPath);
        expect(mockEnsureDirSync).toHaveBeenCalledWith(ProjectPath);
        expect(mockcopySync).toHaveBeenCalledWith(templateDirecoryPath, ProjectPath);
        expect(exitSpy).not.toHaveBeenCalled();
    });
    it('should exit the process with existing directory', function () {
        var exitSpy = jest
            .spyOn(process, 'exit')
            .mockImplementation(function () { return undefined; });
        mockpathExistsSync.mockImplementationOnce(function () { return true; });
        Utils_1.copyTemplateFiles(templateDirecoryPath, ProjectPath);
        expect(mockpathExistsSync).toHaveBeenCalledWith(ProjectPath);
        expect(mockEnsureDirSync).not.toHaveBeenCalled();
        expect(mockcopySync).not.toHaveBeenCalled();
        expect(exitSpy).toHaveBeenCalled();
    });
    it('should log any errors', function () {
        mockpathExistsSync.mockImplementationOnce(function () {
            throw new Error('test');
        });
        Utils_1.copyTemplateFiles(templateDirecoryPath, ProjectPath);
        expect(mockpathExistsSync).toHaveBeenCalled();
        expect(mockEnsureDirSync).not.toHaveBeenCalled();
        expect(mockcopySync).not.toHaveBeenCalled();
    });
});
