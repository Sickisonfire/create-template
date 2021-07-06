import { createProjectFromTemplate } from './createProjectFromTemplate';
import { copyTemplateFiles } from './lib/utils/Utils';
import { join } from 'path';
import { TemplateAnswers } from '.';

jest.mock('path', () => ({
  join: jest
    .fn()
    .mockReturnValueOnce('./templates/testTemplate')
    .mockReturnValueOnce('./testName'),
}));

jest.mock('./lib/utils/Utils', () => ({
  copyTemplateFiles: jest.fn(),
}));

const mockAnswer: TemplateAnswers = {
  directoryPath: './',
  projectName: 'testName',
  template: 'testTemplate',
};
const mockTemplateDir = './templates';

describe('createProjectFromTemplate test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create files (call copyTemplateFiles)', () => {
    const templatePath = './templates/testTemplate';
    const projectPath = './testName';

    createProjectFromTemplate(mockAnswer, mockTemplateDir);

    expect(join).toHaveBeenCalledWith(mockTemplateDir, mockAnswer.template);
    expect(join).toHaveBeenCalledWith(
      mockAnswer.directoryPath,
      mockAnswer.projectName
    );
    expect(copyTemplateFiles).toHaveBeenCalledWith(templatePath, projectPath);
  });
});
