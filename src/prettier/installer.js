const childProcess = require('child_process');
const DependencyInstaller = require('../base');
const fs = require('fs');
const path = require('path');
const { addDivider } = require('../util');

const RC_FILE_NAME = '.prettierrc';

class PrettierInstaller extends DependencyInstaller {
  constructor(name, version) {
    super(name, version);
  }

  run() {
    addDivider(`Install ${this.name}`);
    this.install();
    addDivider(`Generate ${RC_FILE_NAME}`);
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
    const source = path.join(__dirname, 'rc.json');

    super.generateRC(process.cwd(), RC_FILE_NAME, source);
  }

  // generateIgnore() {
  //   fs.openSync(`${process.cwd()}/.prettierignore`, 'w');
  // }
}

module.exports = new PrettierInstaller('prettier', '^3.3.1');
