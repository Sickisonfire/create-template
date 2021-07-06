import path from 'path';

import { copyTemplateFiles } from './lib/utils/Utils';
import { TemplateAnswers } from '.';

export function createProjectFromTemplate(
  answers: TemplateAnswers,
  templatesDirectory: string
): void {
  const { template, projectName, directoryPath } = answers;
  const templatePath: string = path.join(templatesDirectory, template);
  const projectPath: string = path.join(directoryPath, projectName);
  copyTemplateFiles(templatePath, projectPath);
}
