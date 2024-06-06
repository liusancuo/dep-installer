#!/usr/bin/env node

const installerMap = require('./src');

const dep = process.argv[2];

const installer = installerMap[dep];

if (installer && installer.run instanceof Function) {
  installer.run();
} else {
  console.log(`Invalid dependency '${dep}'`);
  process.exit(-1);
}
