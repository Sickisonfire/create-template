import path from 'path';
import fs from 'fs-extra';

export function getTemplatesDirectoryPath(directoryName: string): string {
  const dir = require.main?.path || '';
  const appDir = path.dirname(dir);

  return path.join(appDir, directoryName);
}

export function copyTemplateFiles(
  templateDirecoryPath: string,
  ProjectPath: string
): void {
  try {
    const exists = fs.pathExistsSync(ProjectPath);
    if (exists) {
      console.log('Path already exists');
      process.exit(1);
    } else {
      fs.ensureDirSync(ProjectPath);
      fs.copySync(templateDirecoryPath, ProjectPath);
      console.log('Files successful copied!');
    }
  } catch (err) {
    console.log(err);
  }
}
