const fs = require('fs');
const path = require('path');

class DependencyInstaller {
  constructor(name, version) {
    this.name = name;
    this.version = version;
  }

  getDependency() {
    return this.name + '@' + this.version;
  }

  run() {
    // compose those methods inside the sub class to install the dependency
  }

  install() {
    throw new Error('Should reimplement this method.');
  }

  generateRC(rootPath, fileName, sourceRCFilePath) {
    const destRCFilePath = path.join(rootPath, fileName);

    if (fs.existsSync(destRCFilePath)) {
      console.log(`The ${fileName} is existed, skip the file creation.`);
      return;
    }

    fs.copyFileSync(sourceRCFilePath, destRCFilePath);

    console.log(`${fileName} is created under '${rootPath}'`);
  }
}

module.exports = DependencyInstaller;
