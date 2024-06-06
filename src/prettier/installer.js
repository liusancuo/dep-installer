const childProcess = require('child_process');
const DependencyInstaller = require('../base');
const fs = require('fs');
const path = require('path');

const RC_FILE_NAME = '.prettierrc';

class PrettierInstaller extends DependencyInstaller {
  constructor(name, version) {
    super(name, version);
  }

  run() {
    this.install();
    this.generateRC();
  }

  install() {
    const dep = this.getDependency();
    const cmd = `echo 'Installing ${dep}' \n \
    npm i -S ${dep}
  `;

    childProcess.execSync(cmd, {
      stdio: ['pipe', process.stdout, process.stderr],
    });
  }

  generateRC() {
    const rcFilePath = path.join(process.cwd(), RC_FILE_NAME);

    if (fs.existsSync(rcFilePath)) {
      console.log(`The ${RC_FILE_NAME} is existed, skip the file creation.`);
      return;
    }

    const source = path.join(__dirname, 'rc.json');

    fs.copyFileSync(source, rcFilePath);

    console.log(`${RC_FILE_NAME} is created in the root path.`);
  }
}

module.exports = new PrettierInstaller('prettier', '^3.3.1');
