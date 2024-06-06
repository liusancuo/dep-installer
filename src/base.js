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

  generateRC() {
    throw new Error('Should reimplement this method.');
  }
}

module.exports = DependencyInstaller;
