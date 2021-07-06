import { copyTemplateFiles } from './Utils';

import fs from 'fs-extra';
import 'path';

jest.mock('path');
jest.mock('fs-extra');

const mockpathExistsSync = jest.fn();
const mockEnsureDirSync = jest.fn();
const mockcopySync = jest.fn();

fs.pathExistsSync = mockpathExistsSync;
fs.ensureDirSync = mockEnsureDirSync;
fs.copySync = mockcopySync;

const templateDirecoryPath = './templates';
const ProjectPath = './dev/projectname';

describe('Utils test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should copy files successfuly', () => {
    const exitSpy = jest.spyOn(process, 'exit');
    mockpathExistsSync.mockImplementationOnce(() => false);

    copyTemplateFiles(templateDirecoryPath, ProjectPath);

    expect(mockpathExistsSync).toHaveBeenCalledWith(ProjectPath);
    expect(mockEnsureDirSync).toHaveBeenCalledWith(ProjectPath);
    expect(mockcopySync).toHaveBeenCalledWith(
      templateDirecoryPath,
      ProjectPath
    );
    expect(exitSpy).not.toHaveBeenCalled();
  });

  it('should exit the process with existing directory', () => {
    const exitSpy = jest
      .spyOn(process, 'exit')
      .mockImplementation(() => undefined as never);
    mockpathExistsSync.mockImplementationOnce(() => true);

    copyTemplateFiles(templateDirecoryPath, ProjectPath);

    expect(mockpathExistsSync).toHaveBeenCalledWith(ProjectPath);
    expect(mockEnsureDirSync).not.toHaveBeenCalled();
    expect(mockcopySync).not.toHaveBeenCalled();
    expect(exitSpy).toHaveBeenCalled();
  });

  it('should log any errors', () => {
    mockpathExistsSync.mockImplementationOnce(() => {
      throw new Error('test');
    });

    copyTemplateFiles(templateDirecoryPath, ProjectPath);

    expect(mockpathExistsSync).toHaveBeenCalled();
    expect(mockEnsureDirSync).not.toHaveBeenCalled();
    expect(mockcopySync).not.toHaveBeenCalled();
  });
});
