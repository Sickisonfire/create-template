"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyTemplateFiles = exports.getTemplatesDirectoryPath = void 0;
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
function getTemplatesDirectoryPath(directoryName) {
    var _a;
    var dir = ((_a = require.main) === null || _a === void 0 ? void 0 : _a.path) || '';
    var appDir = path_1.default.dirname(dir);
    return path_1.default.join(appDir, directoryName);
}
exports.getTemplatesDirectoryPath = getTemplatesDirectoryPath;
function copyTemplateFiles(templateDirecoryPath, ProjectPath) {
    try {
        var exists = fs_extra_1.default.pathExistsSync(ProjectPath);
        if (exists) {
            console.log('Path already exists');
            process.exit(1);
        }
        else {
            fs_extra_1.default.ensureDirSync(ProjectPath);
            fs_extra_1.default.copySync(templateDirecoryPath, ProjectPath);
            console.log('Files successful copied!');
        }
    }
    catch (err) {
        console.log(err);
    }
}
exports.copyTemplateFiles = copyTemplateFiles;
